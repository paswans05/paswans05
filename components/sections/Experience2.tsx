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
                  <span className="text-linear-4 d-flex align-items-center">
                    {" "}
                    Expericence{" "}
                  </span>
                </div>
                <h3>
                  +4
                  <span className="text-300">years of </span>
                  passion
                  <span className="text-300">
                    for <br />
                    programming techniques
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
                            <h5 className="mb-1">MiClient</h5>
                            <span className="text-300">2022 - Present</span>
                          </div>
                        </div>
                      </Link>
                    
                    </div>
                  </div>
                  <div className="col-lg-8 ps-lg-5 mt-5 mt-lg-0">
                    <h6 className="text-linear-4">
                      Software Engineer - MiClient Pvt Ltd
                    </h6>
                    <ul className="mt-4">
                      <li className="text-dark mb-3">
                        Contributed to development of MiClient's flagship sales
                        CRM SaaS platform as part of core team.
                      </li>
                      <li className="text-dark mb-3">
                        Led migration from Laravel (PHP) to React.js ensuring
                        enhanced interface responsiveness with daily click rate
                        exceeding 5,000.
                      </li>
                      <li className="text-dark mb-3">
                        Integrated Outlook and Gmail mailers, enabling users to
                        send and track over 1,500 emails daily, boosting client
                        communication efficiency.
                      </li>
                      <li className="text-dark mb-3">
                        Developed dynamic admin panel with real-time tracking,
                        reducing reporting time by 40% and increasing data
                        accuracy.
                      </li>
                      <li className="text-dark mb-3">
                        Built real-time chat application using Socket.io,
                        facilitating seamless internal and client communication,
                        cutting proposal acceptance time by 35%.
                      </li>
                      <li className="text-dark mb-3">
                        Optimized backend code to enhance API response time by
                        60%, improving system performance and scalability.
                      </li>
                      <li className="text-dark mb-3">
                        Spearheaded integration of MiClient CRM/CPQ platform
                        with Microsoft Teams, including bots and custom features
                        for enhanced collaboration.
                      </li>
                    </ul>
                    <div className="d-flex flex-wrap align-items-center gap-3 mt-4">
                      <span className="text-300 border border-1 px-3 py-1">
                        React.js
                      </span>
                      <span className="text-300 border border-1 px-3 py-1">
                        Laravel
                      </span>
                      <span className="text-300 border border-1 px-3 py-1">
                        Node.js
                      </span>
                      <span className="text-300 border border-1 px-3 py-1">
                        PHP
                      </span>
                      <span className="text-300 border border-1 px-3 py-1">
                        MySQL
                      </span>
                    </div>
                  </div>
                </div>

                <div className="row mt-5 pt-5 border-top border-1">
                  <div className="col-lg-4">
                    <div className="d-flex flex-column gap-2">
                      <div className="technology border border-1 rounded-3 p-3">
                        <div className="d-flex align-items-center gap-2">
                          <img
                            src="assets/imgs/home-page-2/experience/neepanlok.svg"
                            alt="zelio"
                          />
                          <div className="d-flex flex-column ms-2">
                            <h5 className="mb-1">Neepanalok Infotech</h5>
                            <span className="text-300">01/2021 - 02/2022</span>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="col-lg-8 ps-lg-5 mt-5 mt-lg-0">
                    <h6 className="text-linear-4">Software Engineer</h6>
                    <ul className="mt-4">
                      <li className="text-dark mb-3">
                        Conducted comprehensive code reviews to enhance code
                        quality.
                      </li>
                      <li className="text-dark mb-3">
                        Designed and executed unit tests, and performed system
                        testing to ensure high software quality.
                      </li>
                      <li className="text-dark mb-3">
                        Troubleshot and resolved software issues, ensuring
                        seamless application performance.
                      </li>
                      <li className="text-dark mb-3">
                        Contributed to the continuous improvement of software
                        development processes and best practices.
                      </li>
                      <li className="text-dark mb-3">
                        Deployed applications on server machines with AWS or
                        Azure.
                      </li>
                      <li className="text-dark mb-3">
                        Integrated third-party APIs and services to enhance
                        software functionality and interoperability.
                      </li>
                    </ul>
                    <div className="d-flex flex-wrap align-items-center gap-3 mt-4">
                      <span className="text-300 border border-1 px-3 py-1">
                        PHP
                      </span>
                      <span className="text-300 border border-1 px-3 py-1">
                        JavaScript
                      </span>
                      <span className="text-300 border border-1 px-3 py-1">
                        MySQL
                      </span>
                      <span className="text-300 border border-1 px-3 py-1">
                        AWS
                      </span>
                      <span className="text-300 border border-1 px-3 py-1">
                        Azure
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
