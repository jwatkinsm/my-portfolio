import { ProjectGallery } from './components/ProjectGallery';
import { achievements } from './data/portfolioData';

export default function App() {
  return (
    <div>
      <nav className="navbar">
        <span className="logo">Josh Watkins Dev Portfolio</span>
        <div className="nav-links">
          <a href="#about">About</a>
          <a href="#projects">Projects</a>
          <a href="#achievements">Achievements</a>
        </div>
      </nav>

      <header className="hero">
        <h1>Joshua Watkins Developer</h1>
        <p>
          Building responsive web applications, secure mobile tools, and clean user
          interfaces.
        </p>
      </header>

      <main>
        <section id="about" className="section about-section">
          <div className="about-grid">
            <div className="about-content">
              <h2>About Me</h2>
              <p>
                I'm Joshua Watkins, a developer focused on creating accessible,
                responsive applications that solve practical problems. My work spans
                web development, mobile tools, and secure digital experiences.
              </p>
              <p>
                I enjoy turning ideas into polished interfaces with maintainable code,
                thoughtful interactions, and attention to the needs of real users.
              </p>
            </div>

            <aside className="skills-card" aria-labelledby="skills-heading">
              <h2 id="skills-heading">Software Skills</h2>
              <ul className="skills-list">
                <li>JavaScript</li>
                <li>TypeScript</li>
                <li>React</li>
                <li>Node.js</li>
                <li>HTML &amp; CSS</li>
                <li>Kotlin</li>
                <li>Jetpack Compose</li>
                <li>Git &amp; GitHub</li>
              </ul>
            </aside>
          </div>
        </section>

        <ProjectGallery />

        <section id="achievements" className="section">
          <h2>Achievements & Milestones</h2>
          <div className="achievements-list">
            {achievements.map((item) => (
              <div key={item.id} className="achievement-item">
                <span className="year">{item.year}</span>
                <div>
                  <h3>{item.title}</h3>
                  <p>{item.detail}</p>
                </div>
              </div>
            ))}
          </div>
        </section>
      </main>
    </div>
  );
}
