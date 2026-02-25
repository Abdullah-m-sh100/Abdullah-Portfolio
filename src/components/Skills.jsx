import { useEffect, useRef } from "react";
import "./Skills.css";

function Skills() {
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

  const skills = [
    {
      category: "Frontend Development",
      items: [
        { name: "React.js", level: 95, icon: "⚛️" },
        { name: "JavaScript (ES6+)", level: 90, icon: "🟨" },
        { name: "HTML5", level: 95, icon: "🔶" },
        { name: "CSS3", level: 90, icon: "🎨" },
      ],
    },
    {
      category: "Tools & Technologies",
      items: [
        { name: "Git & GitHub", level: 95, icon: "🔧" },
        { name: "Responsive Design", level: 99, icon: "📱" },
        { name: "Web Performance", level: 90, icon: "⚡" },
        { name: "RESTful APIs", level: 85, icon: "🔗" },
      ],
    },
  ];

  return (
    <section id="skills" className="skills" ref={sectionRef}>
      <div className="container">
        <div className="section-header reveal">
          <span className="section-tag">What I Do</span>
          <h2 className="section-title">Skills & Expertise</h2>
          <div className="section-divider"></div>
        </div>

        <div className="skills-content">
          {skills.map((skillGroup, index) => (
            <div key={index} className="skill-group reveal">
              <h3 className="skill-category">{skillGroup.category}</h3>

              <div className="skill-items">
                {skillGroup.items.map((skill, idx) => (
                  <div key={idx} className="skill-item">
                    <div className="skill-header">
                      <div className="skill-name">
                        <span className="skill-icon">{skill.icon}</span>
                        <span>{skill.name}</span>
                      </div>
                      <span className="skill-percentage">{skill.level}%</span>
                    </div>

                    <div className="skill-bar">
                      <div
                        className="skill-progress"
                        style={{ "--skill-level": `${skill.level}%` }}
                      ></div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>

        <div className="additional-skills reveal">
          <h3 className="additional-title">Additional Competencies</h3>
          <div className="competencies-grid">
            <div className="competency-badge">
              <span className="competency-icon">✨</span>
              <span>UI/UX Design Principles</span>
            </div>
            <div className="competency-badge">
              <span className="competency-icon">♿</span>
              <span>Web Accessibility (WCAG)</span>
            </div>
            <div className="competency-badge">
              <span className="competency-icon">🚀</span>
              <span>Performance Optimization</span>
            </div>
            <div className="competency-badge">
              <span className="competency-icon">📦</span>
              <span>Package Management (npm)</span>
            </div>
            <div className="competency-badge">
              <span className="competency-icon">🔍</span>
              <span>SEO Best Practices</span>
            </div>
            <div className="competency-badge">
              <span className="competency-icon">🎯</span>
              <span>Cross-Browser Testing</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Skills;
