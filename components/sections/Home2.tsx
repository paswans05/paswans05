
import Link from 'next/link'
import Marquee from 'react-fast-marquee'

export default function Home2() {
	return (
		<>

			<section id="about" className="section-hero-2 position-relative pt-130 pb-3">
				<div className="container hero-2">
					<div className="border border-1 rounded-3">
						<div className="box-linear-animation position-relative z-1">
							<div className="row align-items-end py-60">
								<div className="col-lg-5 ps-lg-5 text-lg-start text-center">
									<div className="position-relative mb-lg-0 mb-5">
										<img src="assets/imgs/home-page-2/hero-1/people.png" alt="zelio" />
										<div className="position-absolute end-0 top-100 translate-middle-y icon-decorate">
											<img src="assets/imgs/home-page-2/hero-1/icon.svg" alt="zelio" />
										</div>
									</div>
								</div>
								<div className="col-lg-6 mx-lg-auto col-md-12">
									<div className="p-lg-0 p-md-8 p-3">
										<div className="text-secondary-2 d-flex align-items-center">
											&lt;span&gt;
											<div className="text-dark">
												<div className="typewriter">
													<h1 className="fs-6 fw-medium">Hey, I’m Sanjay Paswan</h1>
												</div>
											</div>
											&lt;/span&gt;
										</div>
										<h1 className="fs-50 my-3">Frontend Engineer | React &amp; Next.js Developer | Product Builder<span className="flicker">_</span></h1>
										<p className="mb-3 text-secondary-2">&lt;p&gt;<span className="text-dark">Frontend Engineer with 4+ years of experience building scalable web applications, SaaS platforms, mobile apps, and startup products. Passionate about React, Next.js, TypeScript, Flutter, Laravel, and creating products that solve real-world problems.</span>&lt;/p&gt;</p>
										<p className="mb-6 text-secondary-2">&lt;about&gt;<span className="text-dark">I&apos;m a Frontend Engineer with over 4 years of experience building modern web applications, SaaS products, and mobile solutions. I specialize in React, Next.js, TypeScript, Laravel, Flutter, and creating user-focused digital experiences. I enjoy transforming ideas into scalable, production-ready applications.</span>&lt;/about&gt;</p>
										<div className="row">
											<div className="col-7">
												{/* Carausel Scroll */}
												<Marquee className="carouselTicker carouselTicker-left position-relative z-1 mt-lg-0 mt-8">
													<ul className="carouselTicker__list ">
														<li className="carouselTicker__item">
															<Link href="#" className="brand-logo icon_60 icon-shape rounded-3">
																<img src="assets/imgs/home-page-2/hero-1/icon-1.svg" alt="brand" />
															</Link>
														</li>
														<li className="carouselTicker__item">
															<Link href="#" className="brand-logo icon_60 icon-shape rounded-3">
																<img src="assets/imgs/home-page-2/hero-1/icon-2.svg" alt="brand" />
															</Link>
														</li>
														<li className="carouselTicker__item">
															<Link href="#" className="brand-logo icon_60 icon-shape rounded-3">
																<img src="assets/imgs/home-page-2/hero-1/icon-3.svg" alt="brand" />
															</Link>
														</li>
														<li className="carouselTicker__item">
															<Link href="#" className="brand-logo icon_60 icon-shape rounded-3">
																<img src="assets/imgs/home-page-2/hero-1/icon-4.svg" alt="brand" />
															</Link>
														</li>
														<li className="carouselTicker__item">
															<Link href="#" className="brand-logo icon_60 icon-shape rounded-3">
																<img src="assets/imgs/home-page-2/hero-1/icon-5.svg" alt="brand" />
															</Link>
														</li>
													</ul>
												</Marquee>
											</div>
											<div className="col-5 d-flex align-items-end">
												<span className="fs-6 text-300 mb-2">...and more</span>
											</div>
										</div>
										<div className="d-flex flex-wrap gap-3 mt-4">
											<Link href="/#projects" className="btn btn-primary-2 rounded-2">
												View Projects
												<i className="ri-arrow-right-up-line" />
											</Link>
											<Link href="/assets/resume.pdf" className="btn text-300 border border-1 rounded-2" target="_blank">
												<i className="ri-download-line text-primary-2" />
												Download Resume
											</Link>
											<Link href="/#contact" className="btn btn-outline-secondary rounded-2">
												Contact Me
												<i className="ri-arrow-right-up-line" />
											</Link>
										</div>
									</div>
								</div>
							</div>
						</div>
					</div>
				</div>
				<div className="background position-absolute top-0 start-0 w-100 h-100">
					<img className="bg-w" src="assets/imgs/home-page-2/hero-1/bg.png" alt="zelio" />
					<img className="bg-d" src="assets/imgs/home-page-2/hero-1/bg-dark.png" alt="zelio" />
				</div>
			</section>

		</>
	)
}
