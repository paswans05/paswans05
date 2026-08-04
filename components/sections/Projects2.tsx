'use client'
import { Autoplay, Navigation, Pagination } from "swiper/modules"
import { Swiper, SwiperSlide } from "swiper/react"

const swiperOptions = {
	modules: [Autoplay, Pagination, Navigation],
	slidesPerView: 1,
	slidesPerGroup: 1,
	centeredSlides: false,
	loop: true,
	autoplay: {
		delay: 4000,
	},
	pagination: {
		el: '.swiper-pagination',
	},
	navigation: {
		nextEl: '.swiper-button-next',
		prevEl: '.swiper-button-prev',
	},
}

const featuredProjects = [
	{
		name: "CabWala",
		description: "School transportation platform connecting parents with trusted drivers for safe child pickup and drop-off.",
		tech: "Flutter, Laravel, Google Maps, Firebase",
	},
	{
		name: "Work3X",
		description: "AI-powered hiring and recruitment platform for startups and businesses.",
		tech: "Next.js, TypeScript, Laravel, OpenAI",
	},
	{
		name: "DropDrinx",
		description: "Online alcohol delivery platform with real-time order management.",
		tech: "React, Laravel, MySQL",
	},
	{
		name: "PayOFF",
		description: "Offline peer-to-peer payment platform using Bluetooth technology.",
		tech: "Flutter, Laravel",
	},
	{
		name: "Sendbix",
		description: "Email and WhatsApp marketing automation platform.",
		tech: "React, Laravel",
	},
	{
		name: "CommiX",
		description: "AI-powered VS Code extension that generates intelligent Git commit messages.",
		tech: "TypeScript, VS Code API, OpenAI",
	},
]

export default function Projects2() {
	return (
		<>
			<div id="projects" className="section-projects-2 pt-5">
				<div className="container">
					<div className="rounded-3 border border-1 position-relative overflow-hidden">
						<div className="box-linear-animation position-relative z-1">
							<div className="p-lg-8 p-md-6 p-3 position-relative z-1">
								<div className="d-flex align-items-center">
									<svg className="text-primary-2 me-2" xmlns="http://www.w3.org/2000/svg" width={5} height={6} viewBox="0 0 5 6" fill="none">
										<circle cx="2.5" cy={3} r="2.5" fill="#A8FF53" />
									</svg>
									<span className="text-linear-4 d-flex align-items-center"> Projects </span>
								</div>
								<h3>Featured Projects</h3>
								<div className="position-relative">
									<Swiper {...swiperOptions} className="swiper slider-two pb-3 position-relative">
										<div className="swiper-wrapper">
											{featuredProjects.map((project) => (
												<SwiperSlide key={project.name}>
													<div className="p-lg-5 p-md-4 p-3 border border-1 mt-5 bg-3">
														<div className="row">
															<div className="col-lg-5">
																<img className="w-100" src="assets/imgs/home-page-2/projects/img-1.png" alt={project.name} />
															</div>
															<div className="col-lg-7 ps-lg-5 mt-5 mt-lg-0">
																<h4 className="text-linear-4">{project.name}</h4>
																<p>{project.description}</p>
																<ul className="mt-4 list-unstyled">
																	<li className="text-secondary-2 mb-3 border-bottom pb-3">Project Info</li>
																	<li className="text-dark mb-3 border-bottom pb-3">
																		<div className="d-flex justify-content-between">
																			<p className="text-dark mb-0 text-end">Category</p>
																			<p className="text-300 mb-0 text-end">Featured Project</p>
																		</div>
																	</li>
																	<li className="text-dark mb-3 border-bottom pb-3">
																		<div className="d-flex justify-content-between">
																			<p className="text-dark mb-0 text-end">Role</p>
																			<p className="text-300 mb-0 text-end">Product Builder</p>
																		</div>
																	</li>
																	<li className="text-dark mb-3 border-bottom pb-3">
																		<div className="d-flex justify-content-between">
																			<p className="text-dark mb-0 text-end">Technologies</p>
																			<p className="text-300 mb-0 text-end">{project.tech}</p>
																		</div>
																	</li>
																</ul>
															</div>
														</div>
													</div>
												</SwiperSlide>
											))}
										</div>
									</Swiper>
									<div className="position-absolute bottom-0 end-0 gap-2 pb-7 pe-5 d-none d-md-flex">
										<div className="swiper-button-prev end-0 shadow position-relative">
											<svg xmlns="http://www.w3.org/2000/svg" width={24} height={24} viewBox="0 0 24 24" fill="none">
												<path d="M7.82843 10.9999H20V12.9999H7.82843L13.1924 18.3638L11.7782 19.778L4 11.9999L11.7782 4.22168L13.1924 5.63589L7.82843 10.9999Z" fill="white" />
											</svg>
										</div>
										<div className="swiper-button-next end-0 shadow position-relative">
											<svg xmlns="http://www.w3.org/2000/svg" width={24} height={24} viewBox="0 0 24 24" fill="none">
												<path d="M16.1716 10.9999L10.8076 5.63589L12.2218 4.22168L20 11.9999L12.2218 19.778L10.8076 18.3638L16.1716 12.9999H4V10.9999H16.1716Z" fill="#A8FF53" />
											</svg>
										</div>
									</div>
								</div>
							</div>
							<img className="position-absolute top-0 start-0 z-0" src="assets/imgs/home-page-2/projects/bg.png" alt="zelio" />
						</div>
					</div>
				</div>
			</div>
		</>
	)
}
