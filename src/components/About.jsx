import { useEffect, useRef } from "react";
import "./About.css";

function About() {
  const sectionRef = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("active");
          }
        });
      },
      { threshold: 0.2 },
    );

    const elements = sectionRef.current.querySelectorAll(".reveal");
    elements.forEach((el) => observer.observe(el));

    return () => observer.disconnect();
  }, []);

  return (
    <section id="about" className="about" ref={sectionRef}>
      <div className="container">
        <div className="section-header reveal">
          <span className="section-tag">Get to know me</span>
          <h2 className="section-title">About Me</h2>
          <div className="section-divider"></div>
        </div>

        <div className="about-content">
          <div className="about-text reveal">
            <p className="about-paragraph">
              Hello! I'm{" "}
              <span className="highlight">Abdullah M. Abu Shamla</span>, a
              passionate React.js Front-End Developer dedicated to building
              exceptional digital experiences that live on the web.
            </p>

            <p className="about-paragraph">
              My journey in web development began with a curiosity about how
              websites work, which quickly evolved into a deep passion for
              creating intuitive and visually appealing user interfaces. I
              specialize in translating designs into clean, efficient, and
              maintainable code.
            </p>

            <p className="about-paragraph">
              I focus on writing accessible, human-friendly code and deeply care
              about user experience, performance, and attention to detail. My
              goal is to create products that not only look great but also
              provide seamless functionality across all devices.
            </p>

            <p className="about-paragraph">
              When I'm not coding, you'll find me exploring new technologies,
              contributing to open-source projects, or enjoying a good cup of
              coffee while reading about the latest trends in front-end
              development.
            </p>
          </div>

          <div className="about-stats reveal">
            <div className="stat-card">
              <div className="stat-icon">🎯</div>
              <div className="stat-number">4+</div>
              <div className="stat-label">Years Experience</div>
            </div>

            <div className="stat-card">
              <div className="stat-icon">💼</div>
              <div className="stat-number">20+</div>
              <div className="stat-label">Projects Completed</div>
            </div>

            <div className="stat-card">
              <div className="stat-icon">⚡</div>
              <div className="stat-number">100%</div>
              <div className="stat-label">Client Satisfaction</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default About;
