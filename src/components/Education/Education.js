import React from "react";

const Education = () => {
  return (
    <>
      <section id="education" class="section scrollspy">
        <h3 class="page-title white-text teal">Education</h3>
        <div class="container">
          <div class="row">
            <div class="col s12 m6">
              <div class="card">
                <div class="card-content">
                  <p>
                    <span class="card-title">
                      <a href="http://thapar.edu" class="teal-text hoverline">
                        Thapar Institute of Engineering and Technology
                      </a>
                    </span>
                  </p>
                  <p class="brown-text">Patiala, Punjab, IN</p>
                  <ul>
                    <li>
                      B.E. in Electronics and Communication Engineering
                      (2017-2021)
                    </li>
                    <li>GPA - 6.5 (Scale of 10)</li>
                  </ul>
                </div>
              </div>
            </div>
            <div class="col s12 m6">
              <div class="card">
                <div class="card-content">
                  <p>
                    <span class="card-title">
                      <a
                        href="https://jaipuria.edu.in/ghaziabadschool/"
                        class="teal-text hoverline"
                      >
                        Seth Anandram Jaipuria School
                      </a>
                    </span>
                  </p>
                  <p class="brown-text">Ghaziabad, Uttar Pradesh, IN</p>
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
