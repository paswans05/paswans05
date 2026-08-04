import Link from "next/link";

export default function Experience2() {
  return (
    <>
      <section id="portfolio" className="section-experience pt-5">
        <div className="container">
          <div className="rounded-3 border border-1 position-relative overflow-hidden">
            <div className="box-linear-animation position-relative z-1">
              <div className="p-lg-8 p-md-6 p-3 position-relative z-1">
                <div className="d-flex align-items-center">
                  <svg
                    className="text-primary-2 me-2"
                    xmlns="http://www.w3.org/2000/svg"
                    width={5}
                    height={6}
                    viewBox="0 0 5 6"
                    fill="none"
                  >
                    <circle cx="2.5" cy={3} r="2.5" fill="#A8FF53" />
                  </svg>
                  <span className="text-linear-4 d-flex align-items-center">Experience</span>
                </div>
                <h3>
                  Frontend Engineer
                  <span className="text-300">
                    {" "}
                    at <br />
                    MiClient Pvt Ltd
                  </span>
                </h3>
                <div className="row mt-5">
                  <div className="col-lg-4">
                    <div className="d-flex flex-column gap-2">
                      <Link
                        href="#"
                        className="technology border border-1 rounded-3 p-3"
                      >
                        <div className="d-flex align-items-center gap-2">
                          <img
                            src="assets/imgs/home-page-2/experience/miclient.svg"
                            alt="zelio"
                          />
                          <div className="d-flex flex-column ms-2">
                            <h5 className="mb-1">MiClient Pvt Ltd</h5>
                            <span className="text-300">2022 – Present</span>
                          </div>
                        </div>
                      </Link>
                    </div>
                  </div>
                  <div className="col-lg-8 ps-lg-5 mt-5 mt-lg-0">
                    <h6 className="text-linear-4">Frontend Engineer</h6>
                    <ul className="mt-4">
                      <li className="text-dark mb-3">
                        Developed modern React and Next.js applications.
                      </li>
                      <li className="text-dark mb-3">
                        Built reusable UI components.
                      </li>
                      <li className="text-dark mb-3">
                        Integrated REST APIs.
                      </li>
                      <li className="text-dark mb-3">
                        Worked with Laravel backend.
                      </li>
                      <li className="text-dark mb-3">
                        Optimized application performance.
                      </li>
                      <li className="text-dark mb-3">
                        Collaborated with cross-functional teams.
                      </li>
                    </ul>
                    <div className="d-flex flex-wrap align-items-center gap-3 mt-4">
                      <span className="text-300 border border-1 px-3 py-1">
                        React.js
                      </span>
                      <span className="text-300 border border-1 px-3 py-1">
                        Next.js
                      </span>
                      <span className="text-300 border border-1 px-3 py-1">
                        TypeScript
                      </span>
                      <span className="text-300 border border-1 px-3 py-1">
                        REST APIs
                      </span>
                      <span className="text-300 border border-1 px-3 py-1">
                        Laravel
                      </span>
                    </div>
                  </div>
                </div>
              </div>
              <img
                className="position-absolute top-0 start-0 z-0"
                src="assets/imgs/home-page-2/services/bg.png"
                alt="zelio"
              />
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
