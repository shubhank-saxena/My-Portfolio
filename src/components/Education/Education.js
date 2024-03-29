import React from "react";

const Education = () => {
  return (
    <>
      <section id="education" className="section scrollspy">
        <h3 className="page-title white-text teal">Education</h3>
        <div className="container">
          <div className="row">
            <div className="col s12 m6">
              <div className="card">
                <div className="card-content">
                  <p>
                    <span className="card-title">
                      <a
                        href="http://thapar.edu"
                        className="teal-text hoverline"
                      >
                        Thapar Institute of Engineering and Technology
                      </a>
                    </span>
                  </p>
                  <p className="brown-text">Patiala, Punjab, IN</p>
                  <ul>
                    <li>
                      B.E. in Electronics and Communication Engineering
                      (2017-2021)
                    </li>
                    <li>GPA - 7.62 (Scale of 10)</li>
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
                        href="https://jaipuria.edu.in/ghaziabadschool/"
                        className="teal-text hoverline"
                      >
                        Seth Anandram Jaipuria School
                      </a>
                    </span>
                  </p>
                  <p className="brown-text">Ghaziabad, Uttar Pradesh, IN</p>
                  <ul>
                    <li>High School</li>
                    <li>Percentage - 92%</li>
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

export default Education;
