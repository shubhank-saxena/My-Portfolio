import React from "react";

const Experience = () => {
  return (
    <section id="experience" className="section scrollspy">
      <h3 className="page-title white-text teal">Experience</h3>
      <div className="container">
        <div className="card">
          <div className="card-content">
            <div className="row">
              <div className="col s12 m2">
                <a href="https://kernel.community/en/start/">
                  <img
                    alt="Gitcoing Logo"
                    src="https://user-images.githubusercontent.com/23297747/40148910-112c56d4-5936-11e8-95df-aa9796b33bf3.png"
                    className="responsive-img center-block"
                  />
                </a>
              </div>
              <div className="col s12 m10">
                <p>
                  <span className="card-title">
                    <a
                      href="https://kernel.community/en/start/"
                      className="teal-text hoverline"
                    >
                      Gitcoin Kernel Block IV
                    </a>
                  </span>
                </p>
              </div>
            </div>
            <div className="role brown-text">Kernel Fellow</div>
            <p>
              <em className="grey-text">
                Kernel Fellow at Kernel Block for Web3 Technologies
              </em>
            </p>
          </div>
          <div className="card-action">
            <span>September 2021 - Ongoing | Kota, IN (Remote)</span>
          </div>
        </div>
        <div className="card">
          <div className="card-content">
            <div className="row">
              <div className="col s12 m2">
                <a href="https://mentorship.lfx.linuxfoundation.org/project/d2af8346-fdd2-4f27-8c82-96e4d4ccfcdc">
                  <img
                    alt="LFX Logo"
                    src="https://images.credly.com/images/e6066b96-c59d-49b6-87cc-d8873022e84f/blob.png"
                    className="responsive-img center-block"
                  />
                </a>
              </div>
              <div className="col s12 m10">
                <p>
                  <span className="card-title">
                    <a
                      href="https://mentorship.lfx.linuxfoundation.org/project/d2af8346-fdd2-4f27-8c82-96e4d4ccfcdc"
                      className="teal-text hoverline"
                    >
                      LF Networking
                    </a>
                  </span>
                </p>
              </div>
            </div>
            <div className="role brown-text">Open Source Contributor</div>
            <p>
              <em className="grey-text">
                Part Time Contribution to Anuket project for Integrating
                ViNePerf for Openstack and K8s Dataplane
              </em>
            </p>
          </div>
          <div className="card-action">
            <span>June 2021 - Ongoing | Kota, IN (Remote)</span>
          </div>
        </div>
        <div className="card">
          <div className="card-content">
            <div className="row">
              <div className="col s12 m2">
                <a href="https://summerofcode.withgoogle.com/projects/#4980672680165376">
                  <img
                    alt="GFOSS Logo"
                    src="https://avatars.githubusercontent.com/u/2427173?s=200&v=4"
                    className="responsive-img center-block"
                  />
                </a>
              </div>
              <div className="col s12 m10">
                <p>
                  <span className="card-title">
                    <a
                      href="https://summerofcode.withgoogle.com/projects/#4980672680165376"
                      className="teal-text hoverline"
                    >
                      Google Summer of Code'21
                    </a>
                  </span>
                </p>
              </div>
            </div>
            <div className="role brown-text">Open Source Contributor</div>
            <p>
              <em className="grey-text">
                Part Time Contribution to MediaCMS project under Google Summer
                of Code 2021 for GFOSS Open Technology Alliance.
              </em>
              <ul>
                <li>
                  Segregation of production and development environments, thus
                  allowing for better local development.
                </li>
                <li>Integrated CI checks on code quality and unit tests.</li>
                <li>
                  Added internationalization support for people of various
                  geographies.
                </li>
                <li>
                  Creation of CLI based tool to interact with API endpoints of
                  the instance.
                </li>
              </ul>
              <br />
              <em className="grey-text">
                Final Report Submitted -{" "}
                <a href="https://github.com/shubhank-saxena/GSoC-Final-Report/blob/master/README.md">
                  Link
                </a>{" "}
              </em>
            </p>
          </div>
          <div className="card-action">
            <span>June 2021 - August 2021 | Kota, IN (Remote)</span>
          </div>
        </div>
        <div className="card">
          <div className="card-content">
            <div className="row">
              <div className="col s12 m2">
                <a href="https://habbit.co.in/">
                  <img
                    alt="Habbit Logo"
                    src="data:image/png;base64,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"
                    className="responsive-img center-block"
                  />
                </a>
              </div>
              <div className="col s12 m10">
                <p>
                  <span className="card-title">
                    <a
                      href="https://habbit.co.in"
                      className="teal-text hoverline"
                    >
                      Habbit
                    </a>
                  </span>
                </p>
              </div>
            </div>
            <div className="role brown-text">Full Stack Intern</div>
            <p>
              <em className="grey-text">
                Full Stack development - Django, React, React Native, Docker,
                AWS
              </em>
              <ul>
                <li>
                  Worked on Django backend to imrpove and re-factor payment
                  integrations, mail server sync.
                </li>
                <li>
                  Worked on refactoring local development docker services.
                </li>
                <li>
                  Worked on user management models and management (django){" "}
                </li>
              </ul>
            </p>
          </div>
          <div className="card-action">
            <span>April 2021 - June 2021 | Kota, IN (Remote)</span>
          </div>
        </div>
        <div className="card">
          <div className="card-content">
            <div className="row">
              <div className="col s12 m2">
                <a href="https://home.iitd.ac.in/">
                  <img
                    alt="IITD Logo"
                    src="https://www.latestlaws.com/media/2020/05/1590760739.png"
                    className="responsive-img center-block"
                  />
                </a>
              </div>
              <div className="col s12 m10">
                <p>
                  <span className="card-title">
                    <a
                      href="https://home.iitd.ac.in/"
                      className="teal-text hoverline"
                    >
                      Indian Institute of Technology, Delhi
                    </a>
                  </span>
                </p>
              </div>
            </div>
            <div className="role brown-text">Research Intern</div>
            <p>
              <em className="grey-text">
                Research Internship under Dr.Tapan Kumar Gandhi
              </em>
              <ul>
                <li>
                  {" "}
                  Worked on wearable jacket acting as an assistive component for
                  Autistic people{" "}
                </li>
                <li>
                  {" "}
                  Worked on capturing bio-signals and their analysis and
                  transformations{" "}
                </li>
                <li>
                  {" "}
                  Worked on training machine learning models for various signals
                  and parameters{" "}
                </li>
              </ul>
            </p>
          </div>
          <div className="card-action">
            <span>January 2021 - June 2021| Kota, IN (Remote)</span>
          </div>
        </div>
        <div className="card">
          <div className="card-content">
            <div className="row">
              <div className="col s12 m2">
                <a href="https://fellowship.mlh.io/">
                  <img
                    alt="MLH Logo"
                    src="https://mlh.io/assets/logos/mlh-facebook-ae6144c0a3605f15992ee2970616db8d.jpg"
                    className="responsive-img center-block"
                  />
                </a>
              </div>
              <div className="col s12 m10">
                <p>
                  <span className="card-title">
                    <a
                      href="https://fellowship.mlh.io/"
                      className="teal-text hoverline"
                    >
                      Major League Hacking
                    </a>
                  </span>
                </p>
              </div>
            </div>
            <div className="role brown-text">Fellowship</div>
            <p>
              <em className="grey-text">
                OpenSource Contributor in MLH Fellowship
              </em>
            </p>
            <ul>
              <li>Contributed to Julia Language</li>
              <li>
                Created julia package named WellIO.jl which is useful for
                exploration and processing of ASCII LAS (Oil Well Drilling
                Data)files.
              </li>
            </ul>
          </div>
          <div className="card-action">
            <span>Oct 2020 - Dec 2020 | Kota, IN (Remote)</span>
          </div>
        </div>
        <div className="card">
          <div className="card-content">
            <div className="row">
              <div className="col s12 m2">
                <a href="https://www.iiita.ac.in/">
                  <img
                    alt="IIIT Allahabad"
                    src="https://upload.wikimedia.org/wikipedia/en/thumb/2/2e/Indian_Institute_of_Information_Technology%2C_Allahabad_Logo.png/220px-Indian_Institute_of_Information_Technology%2C_Allahabad_Logo.png"
                    className="responsive-img center-block"
                  />
                </a>
              </div>
              <div className="col s12 m10">
                <p>
                  <span className="card-title">
                    <a
                      href="https://www.iiita.ac.in/"
                      className="teal-text hoverline"
                    >
                      IIIT Allahabad
                    </a>
                  </span>
                </p>
              </div>
            </div>
            <div className="role brown-text">Research Intern</div>
            <p>
              <em className="grey-text">
                Research Intern in Center of Cognitive Computing under
                Dr.Pritish Varadwaj
              </em>
            </p>
            <ul>
              <li>
                Development of fruit ripeness multi-class classification system,
                which included the collection of data as well as it's training.
                The data collection was non-invasive in nature.
              </li>
              <li>
                Collected and curated biological dataset showing relation
                between various chemical compounds and their percieced smell.
              </li>
            </ul>
          </div>
          <div className="card-action">
            <span>May 2019 - July 2019 | Allahabad, IN</span>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Experience;
