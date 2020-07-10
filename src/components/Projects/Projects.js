import React from "react";

const Projects = props => {

  return (
    <>
      <section id="projects" className="section scrollspy">
        <h3 className="page-title white-text teal">Projects</h3>
        <div className="container">
          <div className="row">
            <div className="col s12 m6 l4">
              props.data.map((data)=> {
                return(
                  <>
                  <div className="card medium">
                <div className="card-image waves-effect waves-block waves-light">
                  <img
                    alt="Speech Recognizer"
                    src=""
                    className="activator"
                  />
                </div>
                <div className="card-content">
                  <span className="card-title activator teal-text hoverline">
                    Speech Recognizer
                    <i className="mdi-navigation-more-vert right"></i>
                  </span>
                  <p>
                    Created a Deep Neural Network based Speech Recognizer for
                    audio to text conversion.
                  </p>
                </div>
                <div className="card-reveal">
                  <span className="card-title brown-text">
                    Accomplishments
                    <i className="mdi-navigation-close right"></i>
                  </span>
                  <ul>
                    <li>
                      <strong>Python</strong>
                    </li>
                    <li>
                      <strong>Deep Learning</strong>
                    </li>
                    <li>
                      <strong>GPU/CUDA</strong>
                    </li>
                    <li>
                      <strong>Tensorflow</strong>
                    </li>
                    <li>
                      <strong>Keras</strong>
                    </li>
                  </ul>
                  <div className="card-action">
                    <a
                      aria-label="Github Repo"
                      href="https://github.com/shubhank-saxena/dnn-speech-recognizer"
                      data-position="top"
                      data-tooltip="View Source"
                      className="btn-floating btn-large waves-effect waves-light brown tooltipped"
                    >
                      <i className="fa fa-github"></i>
                    </a>
                  </div>
                </div>
              </div>
                </>
                );
              });
            </div>
            <div className="col s12 m6 l4">
              <div className="card medium">
                <div className="card-image waves-effect waves-block waves-light">
                  <img alt="Blindspot" src="" className="activator" />
                </div>
                <div className="card-content">
                  <span className="card-title activator teal-text hoverline">
                    Blindspot<i className="mdi-navigation-more-vert right"></i>
                  </span>
                  <p>
                    Mobile equivalent wearable for visually impaired having
                    features of voice navigation, scene detection, payment, etc.
                  </p>
                </div>
                <div className="card-reveal">
                  <span className="card-title brown-text">
                    Learnings<i className="mdi-navigation-close right"></i>
                  </span>
                  <ul>
                    <li>
                      <strong>Python/Flask </strong>for backend
                    </li>
                    <li>
                      <strong>RaspberryPi & Arduino</strong>
                    </li>
                    <li>
                      <strong>Alexa SDK </strong>for voice interface
                    </li>
                    <li>
                      <strong>Azure API Architecture</strong>
                    </li>
                    <li>
                      <strong>Text Processing</strong>
                    </li>
                    <li>
                      <strong>Payment Gateway</strong>
                    </li>
                    <li>
                      <strong>Computer Vision</strong>
                    </li>
                    <li>
                      <strong>Text to </strong>
                    </li>
                    <li>
                      <strong>Circuit Integration</strong>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
            <div className="col s12 m6 l4">
              <div className="card medium">
                <div className="card-image waves-effect waves-block waves-light">
                  <img alt="Amaurotic" src="" className="activator" />
                </div>
                <div className="card-content">
                  <span className="card-title activator teal-text hoverline">
                    Amaurotic<i className="mdi-navigation-more-vert right"></i>
                  </span>
                  <p>
                    Kindle-like low cost electro-mechanical book reader for
                    visually impaired people.
                  </p>
                </div>
                <div className="card-reveal">
                  <span className="card-title brown-text">
                    Learnings<i className="mdi-navigation-close right"></i>
                  </span>
                  <ul>
                    <li>
                      <strong>Python/Flask </strong>for backend
                    </li>
                    <li>
                      <strong>RaspberryPi & Arduino</strong>
                    </li>
                    <li>
                      <strong>Alexa SDK </strong>for voice interface
                    </li>
                    <li>
                      <strong>Braille Language</strong>
                    </li>
                    <li>
                      <strong>Text Processing</strong>
                    </li>
                    <li>
                      <strong>Computer Vision</strong>
                    </li>
                    <li>
                      <strong>Circuit Integration</strong>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
            <div className="col s12 m6 l4">
              <div className="card medium">
                <div className="card-image waves-effect waves-block waves-light">
                  <img alt="Auscare" src="" className="activator" />
                </div>
                <div className="card-content">
                  <span className="card-title activator teal-text hoverline">
                    AusCare<i className="mdi-navigation-more-vert right"></i>
                  </span>
                  <p>
                    A Google Glasses like Augmentation device to assist Autistic
                    kids to understand emotions and help them with constant
                    learning and recitation.
                  </p>
                </div>
                <div className="card-reveal">
                  <span className="card-title brown-text">
                    Learnings<i className="mdi-navigation-close right"></i>
                  </span>
                  <ul>
                    <li>
                      <strong>Python/Flask </strong>for backend
                    </li>
                    <li>
                      <strong>RaspberryPi & Arduino</strong>
                    </li>
                    <li>
                      <strong>Alexa SDK </strong>for voice interface
                    </li>
                    <li>
                      <strong>Mobile App </strong>for parental control
                    </li>
                    <li>
                      <strong>Language Translation </strong>
                    </li>
                    <li>
                      <strong>Text Processing</strong>
                    </li>
                    <li>
                      <strong>Computer Vision</strong>
                    </li>
                    <li>
                      <strong>Data Analytics </strong>
                    </li>
                    <li>
                      <strong>Circuit Integration</strong>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
            <div className="col s12 m6 l4">
              <div className="card medium">
                <div className="card-image waves-effect waves-block waves-light">
                  <img
                    alt="Cisco Meraki's DevNet App"
                    src=""
                    className="activator"
                  />
                </div>
                <div className="card-content">
                  <span className="card-title activator teal-text hoverline">
                    Cisco Meraki's DevNet App
                    <i className="mdi-navigation-more-vert right"></i>
                  </span>
                  <p>
                    descriptionDeveloped a Flutter based cross platform for
                    analysing and presenting the data which was given by Cisco's
                    Meraki Camera.
                  </p>
                </div>
                <div className="card-reveal">
                  <span className="card-title brown-text">
                    Learning<i className="mdi-navigation-close right"></i>
                  </span>
                  <ul>
                    <li>
                      <strong>Python/Flask </strong>for backend
                    </li>
                    <li>
                      <strong>Cisco production API</strong>
                    </li>
                    <li>
                      <strong>Alexa/Google SDK </strong>for voice interface
                    </li>
                    <li>
                      <strong>Mobile App </strong>for information
                    </li>
                    <li>
                      <strong>Language Translation </strong>
                    </li>
                    <li>
                      <strong>Twilio Messaging services</strong>
                    </li>
                    <li>
                      <strong>Data Analytics </strong>
                    </li>
                    <li>
                      <strong>Time Series Prediction(LSTM)</strong>
                    </li>
                  </ul>
                  <div className="card-action">
                    <a
                      aria-label="GitHub Repo"
                      href="https://github.com/shubhank-saxena/Cisco-SIH"
                      data-position="top"
                      data-tooltip="View Source"
                      className="btn-floating btn-large waves-effect waves-light brown tooltipped"
                    >
                      <i className="fa fa-github"></i>
                    </a>
                  </div>
                </div>
              </div>
            </div>
            <div className="col s12 m6 l4">
              <div className="card medium">
                <div className="card-image waves-effect waves-block waves-light">
                  <img alt="Fruit Classifier" src="" className="activator" />
                </div>
                <div className="card-content">
                  <span className="card-title activator teal-text hoverline">
                    Fruit Classifier
                    <i className="mdi-navigation-more-vert right"></i>
                  </span>
                  <p>
                    Collected gaseous data and olfactory chemical substrates of
                    various fruits and created multiclass classification for the
                    same.
                  </p>
                </div>
                <div className="card-reveal">
                  <span className="card-title brown-text">
                    Learning<i className="mdi-navigation-close right"></i>
                  </span>
                  <ul>
                    <li>
                      <strong>Python</strong>
                    </li>
                    <li>
                      <strong>Machine Learning</strong>
                    </li>
                    <li>
                      <strong>Arduino/Sensors</strong>
                    </li>
                    <li>
                      <strong>Data Analytics </strong>
                    </li>
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

export default Projects;
