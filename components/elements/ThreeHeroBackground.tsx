'use client'

import { useEffect, useRef } from "react"
import * as THREE from "three"

export default function ThreeHeroBackground() {
	const containerRef = useRef<HTMLDivElement | null>(null)

	useEffect(() => {
		const container = containerRef.current
		if (!container) return

		const scene = new THREE.Scene()
		scene.fog = new THREE.Fog(0x050509, 20, 140)

		const camera = new THREE.PerspectiveCamera(56, 1, 0.1, 300)
		camera.position.set(0, 2, 48)

		const renderer = new THREE.WebGLRenderer({
			antialias: true,
			alpha: true,
			powerPreference: "high-performance",
		})
		renderer.setClearColor(0x000000, 0)
		renderer.setPixelRatio(Math.min(window.devicePixelRatio, 1.6))
		container.appendChild(renderer.domElement)

		const particleCount = 1700
		const positions = new Float32Array(particleCount * 3)
		const velocities = new Float32Array(particleCount)
		const colors = new Float32Array(particleCount * 3)
		const neonPalette = [
			new THREE.Color(0x00f5ff),
			new THREE.Color(0xa855f7),
			new THREE.Color(0x00ff88),
		]
		const lightPalette = [
			new THREE.Color(0x2563eb),
			new THREE.Color(0xc026d3),
			new THREE.Color(0x0ea5e9),
		]
		let isLightMode = false

		for (let i = 0; i < particleCount; i++) {
			const i3 = i * 3
			positions[i3] = (Math.random() - 0.5) * 150
			positions[i3 + 1] = (Math.random() - 0.5) * 70
			positions[i3 + 2] = -90 + Math.random() * 120
			velocities[i] = 0.15 + Math.random() * 0.5
			const color = neonPalette[Math.floor(Math.random() * neonPalette.length)]
			colors[i3] = color.r
			colors[i3 + 1] = color.g
			colors[i3 + 2] = color.b
		}

		const particlesGeometry = new THREE.BufferGeometry()
		particlesGeometry.setAttribute("position", new THREE.BufferAttribute(positions, 3))
		particlesGeometry.setAttribute("color", new THREE.BufferAttribute(colors, 3))

		const particlesMaterial = new THREE.PointsMaterial({
			size: 0.42,
			vertexColors: true,
			transparent: true,
			opacity: 0.8,
			blending: THREE.AdditiveBlending,
			depthWrite: false,
		})

		const particles = new THREE.Points(particlesGeometry, particlesMaterial)
		scene.add(particles)

		const gridA = new THREE.GridHelper(180, 26, 0x00f5ff, 0x0088aa)
		const gridB = new THREE.GridHelper(180, 26, 0xa855f7, 0x6d28d9)
		const gridMaterialA = (Array.isArray(gridA.material) ? gridA.material : [gridA.material]) as THREE.LineBasicMaterial[]
		const gridMaterialB = (Array.isArray(gridB.material) ? gridB.material : [gridB.material]) as THREE.LineBasicMaterial[]
		gridMaterialA.forEach((material) => {
			material.transparent = true
			material.opacity = 0.2
		})
		gridMaterialB.forEach((material) => {
			material.transparent = true
			material.opacity = 0.12
		})
		gridA.position.set(0, -16, -40)
		gridB.position.set(0, -16.3, -70)
		scene.add(gridA)
		scene.add(gridB)

		const frame = new THREE.Mesh(
			new THREE.TorusKnotGeometry(9, 0.15, 140, 18),
			new THREE.MeshBasicMaterial({
				color: 0x00f5ff,
				wireframe: true,
				transparent: true,
				opacity: 0.23,
			}),
		)
		frame.position.set(22, 6, -20)
		scene.add(frame)

		const ring = new THREE.Mesh(
			new THREE.TorusGeometry(12, 0.2, 12, 120),
			new THREE.MeshBasicMaterial({
				color: 0xa855f7,
				transparent: true,
				opacity: 0.26,
			}),
		)
		ring.position.set(-26, -2, -16)
		ring.rotation.x = Math.PI * 0.35
		scene.add(ring)

		const updateThemeColors = () => {
			const isLight = document.documentElement.getAttribute("data-bs-theme") === "light"
			isLightMode = isLight
			const activePalette = isLight ? lightPalette : neonPalette
			const baseColors = activePalette.map((color) => color.clone())
			const colorAttribute = particlesGeometry.attributes.color as THREE.BufferAttribute
			const colorArray = colorAttribute.array as Float32Array

			for (let i = 0; i < particleCount; i++) {
				const i3 = i * 3
				const color = baseColors[i % baseColors.length]
				colorArray[i3] = color.r
				colorArray[i3 + 1] = color.g
				colorArray[i3 + 2] = color.b
			}
			colorAttribute.needsUpdate = true

			if (isLight) {
				scene.fog = new THREE.Fog(0xeaf2ff, 20, 150)
				particlesMaterial.blending = THREE.NormalBlending
				particlesMaterial.opacity = 0.95
				particlesMaterial.size = 0.62
				gridMaterialA.forEach((material) => {
					material.color.set(0x2563eb)
					material.opacity = 0.3
				})
				gridMaterialB.forEach((material) => {
					material.color.set(0xc026d3)
					material.opacity = 0.2
				})
				;(frame.material as THREE.MeshBasicMaterial).color.set(0x1d4ed8)
				;(frame.material as THREE.MeshBasicMaterial).opacity = 0.28
				;(ring.material as THREE.MeshBasicMaterial).color.set(0xc026d3)
				;(ring.material as THREE.MeshBasicMaterial).opacity = 0.32
			} else {
				scene.fog = new THREE.Fog(0x050509, 20, 140)
				particlesMaterial.blending = THREE.AdditiveBlending
				particlesMaterial.opacity = 0.8
				particlesMaterial.size = 0.42
				gridMaterialA.forEach((material) => {
					material.color.set(0x00f5ff)
					material.opacity = 0.2
				})
				gridMaterialB.forEach((material) => {
					material.color.set(0xa855f7)
					material.opacity = 0.12
				})
				;(frame.material as THREE.MeshBasicMaterial).color.set(0x00f5ff)
				;(frame.material as THREE.MeshBasicMaterial).opacity = 0.23
				;(ring.material as THREE.MeshBasicMaterial).color.set(0xa855f7)
				;(ring.material as THREE.MeshBasicMaterial).opacity = 0.26
			}
		}

		updateThemeColors()
		const themeObserver = new MutationObserver(updateThemeColors)
		themeObserver.observe(document.documentElement, {
			attributes: true,
			attributeFilter: ["data-bs-theme"],
		})

		const clock = new THREE.Clock()
		let frameId = 0

		const resize = () => {
			const width = container.clientWidth
			const height = container.clientHeight
			if (!width || !height) return
			camera.aspect = width / height
			camera.updateProjectionMatrix()
			renderer.setSize(width, height)
		}

		const animate = () => {
			const elapsed = clock.getElapsedTime()
			const positionAttribute = particlesGeometry.attributes.position as THREE.BufferAttribute
			const positionArray = positionAttribute.array as Float32Array

			for (let i = 0; i < particleCount; i++) {
				const i3 = i * 3
				positionArray[i3 + 2] += velocities[i]
				positionArray[i3] += Math.sin(elapsed * 0.6 + i * 0.03) * 0.01
				positionArray[i3 + 1] += Math.cos(elapsed * 0.8 + i * 0.02) * 0.008
				if (positionArray[i3 + 2] > 35) {
					positionArray[i3 + 2] = -95
					positionArray[i3] = (Math.random() - 0.5) * 150
					positionArray[i3 + 1] = (Math.random() - 0.5) * 70
				}
			}

			positionAttribute.needsUpdate = true

			const pulse = isLightMode
				? 0.86 + Math.sin(elapsed * 2.4) * 0.08
				: 0.62 + Math.sin(elapsed * 2.4) * 0.18
			particlesMaterial.opacity = pulse
			frame.rotation.x = elapsed * 0.12
			frame.rotation.y = elapsed * 0.2
			ring.rotation.z = elapsed * 0.18
			gridA.position.z += 0.23
			gridB.position.z += 0.23

			if (gridA.position.z > 25) gridA.position.z = -70
			if (gridB.position.z > 25) gridB.position.z = -70

			renderer.render(scene, camera)
			frameId = window.requestAnimationFrame(animate)
		}

		resize()
		animate()
		window.addEventListener("resize", resize)

		return () => {
			window.cancelAnimationFrame(frameId)
			window.removeEventListener("resize", resize)
			themeObserver.disconnect()

			particlesGeometry.dispose()
			particlesMaterial.dispose()
			;(gridA.geometry as THREE.BufferGeometry).dispose()
			;(gridB.geometry as THREE.BufferGeometry).dispose()
			gridMaterialA.forEach((material) => material.dispose())
			gridMaterialB.forEach((material) => material.dispose())
			;(frame.geometry as THREE.BufferGeometry).dispose()
			;(frame.material as THREE.Material).dispose()
			;(ring.geometry as THREE.BufferGeometry).dispose()
			;(ring.material as THREE.Material).dispose()
			renderer.dispose()

			if (renderer.domElement.parentNode === container) {
				container.removeChild(renderer.domElement)
			}
		}
	}, [])

	return <div ref={containerRef} className="position-absolute top-0 start-0 w-100 h-100 pointer-events-none overflow-hidden" style={{ zIndex: 1 }} />
}
