import React from "react";

const Awards = () => {
  return (
    <>
      <section id="awards" className="section scrollspy">
        <h3 className="page-title white-text teal">Awards</h3>
        <div className="container">
          <div className="row">
            <div className="col s12 m6">
              <div className="card">
                <div className="card-content">
                  <p>
                    <span className="card-title">
                      <a
                        href="http://startupinstitute.com"
                        className="teal-text hoverline"
                      >
                        Lorem Ipsem
                      </a>
                    </span>
                  </p>
                  <p className="brown-text">Lorem Ipsem Dolorum</p>
                  <ul>
                    <li>hehehehhehe</li>
                  </ul>
                </div>
              </div>
            </div>
            <div className="col s12 m6">
              <div className="card">
                <div className="card-content">
                  <p>
                    <span className="card-title">
                      <a
                        href="https://wespire.com"
                        className="teal-text hoverline"
                      >
                        Lorem Ipsum
                      </a>
                    </span>
                  </p>
                  <p className="brown-text">Lorem</p>
                  <ul>
                    <li>Quarterly award.</li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Awards;
