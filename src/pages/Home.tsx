import "./Home.css";
import { useEffect, useState } from "react";
import { useMediaQuery } from "react-responsive";

interface Skill {
  id: string;
  name: string;
  icon: string;
}

interface Project {
  id: string;
  name: string;
  link: string;
  thumbnail: string;
  description: string;
  skills: Skill[];
}

const Home = () => {
  const [skills, setSkills] = useState<Skill[]>([]);
  const [projects, setProjects] = useState<Project[]>([]);

  useEffect(() => {
    fetch("https://singular-crepe-791950.netlify.app/api/skills", {
      headers: { "Content-Type": "application/json" },
    })
      .then((res) => res.json())
      .then((data) => {
        setSkills(data);
      })
      .catch((err) => console.log(err));

    fetch("https://singular-crepe-791950.netlify.app/api/projects", {
      headers: { "Content-Type": "application/json" },
    })
      .then((res) => res.json())
      .then((data) => {
        setProjects(data);
      })
      .catch((err) => console.log(err));
  }, []);

  const isTablet = useMediaQuery({ minWidth: 385, maxWidth: 864 });
  const skillsPerRow = isTablet ? 10 : 12;

  const chunkArray = <T,>(arr: T[], chunkSize: number): T[][] => {
    const chunks: T[][] = [];

    for (let i = 0; i < arr.length; i += chunkSize) {
      chunks.push(arr.slice(i, i + chunkSize));
    }

    return chunks;
  };

  return (
    <>
      <section id="about">
        <img id="yik-kan-sze-icon" src="yik-kan-sze.png" alt="Yik Kan Sze" />
        <p>
          Hello, I'm <strong>Yik Kan Sze</strong> from <em>Hong Kong</em>. I've
          finished my
          <strong>Bachelor of Engineering in Computer Engineering</strong>
          from <em>The University of Hong Kong</em> in 2023. And after that,
          I've been working as a <strong>Full Stack Developer</strong> for
          <strong>one year</strong>. Currently, I'm pursuing further study in
          <strong>Web Development</strong> from <em>Humber College</em> in
          Canada.
        </p>
      </section>
      <section id="experience">
        <h2>Experience</h2>
        <div id="experience-records">
          <div className="experience-record-type">
            <h3>Education</h3>
          </div>
          <div></div>
          <div className="experience-record-year">
            <p>2024 — Present</p>
          </div>
          <div></div>
          <div className="experience-record-detail">
            <p>
              <strong>Graduate Certificate in Web Development</strong>
            </p>
            <p>
              <em>Humber College</em>
            </p>
          </div>
          <div></div>
          <div className="experience-record-year">
            <p>2019 — 2023</p>
          </div>
          <div></div>
          <div className="experience-record-detail">
            <p>
              <strong>
                Bachelor of Engineering <span>(BEng)</span> in Computer
                Engineering
              </strong>
            </p>
            <p>
              <em>The University of Hong Kong</em>
            </p>
            <p>Second Class Honours (Division One)</p>
          </div>
          <div></div>
          <div className="experience-record-type">
            <h3>Work</h3>
          </div>
          <div></div>
          <div className="experience-record-year">
            <p>2023 — 2024</p>
          </div>
          <div></div>
          <div className="experience-record-detail">
            <p>
              <strong>Software Engineer</strong>
            </p>
            <p>
              <em>Nefertiti Ltd, Hong Kong SAR</em>
            </p>
          </div>
          <div></div>
          <div className="experience-record-year">
            <p>2022 — 2022</p>
          </div>
          <div></div>
          <div className="experience-record-detail">
            <p>
              <strong>Full Stack Engineer (Internship)</strong>
            </p>
            <p>
              <em>Lecopt Technology Ltd, Hong Kong SAR</em>
            </p>
          </div>
          <div></div>
          <div className="experience-record-type">
            <h3>Skills</h3>
          </div>
          {skills.length > 0 ? (
            <div className="skill-icons">
              {chunkArray<Skill>(skills, skillsPerRow).map((row, i) => (
                <div key={i} className="skill-icon-row">
                  {row.map((skill, j) => (
                    <img
                      key={j}
                      src={"https://skillicons.dev/icons?i=" + skill.icon}
                      height="100%"
                      alt={skill.name}
                    />
                  ))}
                </div>
              ))}
            </div>
          ) : (
            <div className="skill-icons">
              <p>To be added</p>
            </div>
          )}
        </div>
      </section>
      <section id="projects">
        <h2>Projects</h2>
        {projects.length > 0 ? (
          projects.map((project, i) => (
            <div key={i} className="project">
              <a href={project.link} target="_blank">
                <h3>{project.name}</h3>
              </a>
              {project.skills.length > 0 && (
                <div className="skill-icons">
                  {chunkArray<Skill>(project.skills, skillsPerRow).map(
                    (row, i) => (
                      <div key={i} className="skill-icon-row">
                        {row.map((skill, j) => (
                          <img
                            key={j}
                            src={"https://skillicons.dev/icons?i=" + skill.icon}
                            height="100%"
                            alt={skill.name}
                          />
                        ))}
                      </div>
                    )
                  )}
                </div>
              )}
              <p>{project.description}</p>
              <a href={project.link} target="_blank">
                <img src={project.thumbnail} alt={project.name}></img>
              </a>
            </div>
          ))
        ) : (
          <p>To be added</p>
        )}
      </section>
      <section id="contact">
        <h2>Contact</h2>
        <form id="contact-form">
          <div id="contact-name">
            <input
              id="contact-first-name"
              name="contact-first-name"
              type="text"
              placeholder="First Name"
            />
            <input
              id="contact-last-name"
              name="contact-last-name"
              type="text"
              placeholder="Last Name"
            />
          </div>
          <input
            id="contact-email"
            name="contact-email"
            type="text"
            placeholder="Email"
          />
          <textarea
            id="contact-message"
            name="contact-message"
            placeholder="Message"
          ></textarea>
          <button id="contact-submit" name="contact-submit" type="submit">
            Submit
          </button>
        </form>
        <div id="socials">
          <a href="https://github.com/ken-yksze" target="_blank">
            <img src="github-logo-svgrepo-com.svg" alt="GitHub" />
          </a>
          <a href="https://www.linkedin.com/in/ken-sze/" target="_blank">
            <img src="linkedin-svgrepo-com.svg" alt="LinkedIn" />
          </a>
          <a href="mailto:ken.yksze@gmail.com">
            <img src="email.svg" alt="Email" />
          </a>
        </div>
      </section>
    </>
  );
};

export default Home;
