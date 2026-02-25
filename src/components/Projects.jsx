import { useEffect, useRef } from "react";
import "./Projects.css";

function Projects() {
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
      { threshold: 0.1 },
    );

    const elements = sectionRef.current.querySelectorAll(".reveal");
    elements.forEach((el) => observer.observe(el));

    return () => observer.disconnect();
  }, []);

  const projects = [
    {
      id: 1,
      title: "Fashion Website",
      description:
        "A modern, fully responsive e-commerce platform built with React.js featuring product catalog, shopping cart, and checkout flow. Includes advanced filtering, search functionality, and elegant UI animations.",
      tags: ["React.js", "JavaScript", "CSS3", "Responsive Design"],
      gradient: "linear-gradient(135deg, #8B1538, #6B0F2A)",
      icon: "🛍️",
      link: "https://github.com/Abdullah-m-sh100/FASHION",
    },
    {
      id: 2,
      title: "Coffee Shop Landing Page",
      description:
        "An immersive single-page website for a premium coffee brand with smooth scroll animations, interactive menu sections, and an elegant booking system. Features stunning visuals and micro-interactions.",
      tags: ["React.js", "CSS Animations", "UI/UX", "JavaScript"],
      gradient: "linear-gradient(135deg, #A61C3D, #8B1538)",
      icon: "☕",
      link: "https://github.com/Abdullah-m-sh100/Koppee-Coffee",
    },
    {
      id: 3,
      title: "Admin Dashboard UI",
      description:
        "A comprehensive admin dashboard with data visualization, real-time updates, and intuitive navigation. Includes charts, tables, user management, and customizable widgets for data monitoring.",
      tags: ["React.js", "Data Visualization", "Dashboard", "JavaScript"],
      gradient: "linear-gradient(135deg, #C97082, #A61C3D)",
      icon: "📊",
      link: "",
    },
  ];

  return (
    <section id="projects" className="projects" ref={sectionRef}>
      <div className="container">
        <div className="section-header reveal">
          <span className="section-tag">My Work</span>
          <h2 className="section-title">Featured Projects</h2>
          <div className="section-divider"></div>
          <p className="section-description">
            A showcase of recent projects demonstrating my expertise in React.js
            development and modern web design
          </p>
        </div>

        <div className="projects-grid">
          {projects.map((project, index) => (
            <div
              key={project.id}
              className="project-card reveal"
              style={{ animationDelay: `${index * 0.2}s` }}
            >
              <div className="project-card-inner">
                <div
                  className="project-header"
                  style={{ background: project.gradient }}
                >
                  <div className="project-icon">{project.icon}</div>
                  <div className="project-number">0{project.id}</div>
                </div>

                <div className="project-content">
                  <h3 className="project-title">{project.title}</h3>
                  <p className="project-description">{project.description}</p>

                  <div className="project-tags">
                    {project.tags.map((tag, idx) => (
                      <span key={idx} className="project-tag">
                        {tag}
                      </span>
                    ))}
                  </div>
                </div>

                <div className="project-footer">
                  <a href={project.link} target="_blank">
                    <button className="project-link">
                      <span>View Project</span>
                      <svg
                        width="16"
                        height="16"
                        viewBox="0 0 16 16"
                        fill="none"
                      >
                        <path
                          d="M1 8h14M8 1l7 7-7 7"
                          stroke="currentColor"
                          strokeWidth="2"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                        />
                      </svg>
                    </button>
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Projects;
