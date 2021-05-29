import React from "react";

const About = () => {
  return (
    <section id="about" className="section scrollspy">
      <h3 className="page-title white-text teal">About</h3>
      <div className="container flow-text">
        <blockquote>
          <h2>
            Mission-driven full stack developer and Deep Learning
            Practitioner with a passion for thoughtful Product Design,
            collaboration, and teaching.
          </h2>
        </blockquote>
        <p>
          I’ve always sought out opportunities and challenges that are
          meaningful to me. Although my academic path has taken many twists and
          turns, I've never stopped engaging my passion to help others and solve
          problems.
        </p>
        <p>
          As a Web and AI developer, I enjoy using my obsessive attention to
          detail, my unequivocal love for making things, and my mission-driven
          work ethic to literally change the world. That's why I’m excited to
          make dent in this universe!
        </p>
        <p>
          <strong>Current Focus</strong>:&nbsp;
          <a
            aria-label="GSoC'21"
            href="https://summerofcode.withgoogle.com/projects/#4980672680165376"
          >
            GSoC'21
          </a>
          &nbsp;//&nbsp;
          <a
            aria-label="LFN Mentorship"
            href="https://mentorship.lfx.linuxfoundation.org/project/d2af8346-fdd2-4f27-8c82-96e4d4ccfcdc"
          >
            LFN Mentorship
          </a>
        </p>
      </div>
    </section>
  );
};

export default About;
