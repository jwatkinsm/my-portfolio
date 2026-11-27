import { useState, useEffect } from 'react';
import { projects } from '../data/portfolioData';

export function ProjectGallery() {
  const [selectedCategory, setSelectedCategory] = useState('All');
  const [activeProject, setActiveProject] = useState(null);
  const [imageIndex, setImageIndex] = useState(0);

  const categories = ['All', 'Web', 'Mobile', 'Tools'];
  const filteredProjects =
    selectedCategory === 'All'
      ? projects
      : projects.filter((p) => p.category === selectedCategory);

  const openModal = (project) => {
    setActiveProject(project);
    setImageIndex(0);
  };

  const closeModal = () => setActiveProject(null);

  useEffect(() => {
    const handleKeyDown = (e) => {
      if (e.key === 'Escape') closeModal();
    };
    if (activeProject) window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [activeProject]);

  return (
    <section id="projects" className="section">
      <div className="section-header">
        <h2>Interactive Project Gallery</h2>
        <div className="filter-bar" role="group" aria-label="Filter projects by category">
          {categories.map((cat) => (
            <button
              key={cat}
              type="button"
              className={`filter-btn ${selectedCategory === cat ? 'active' : ''}`}
              onClick={() => setSelectedCategory(cat)}
            >
              {cat}
            </button>
          ))}
        </div>
      </div>

      <div className="project-grid">
        {filteredProjects.map((project) => (
          <article
            key={project.id}
            className="project-card"
            onClick={() => openModal(project)}
          >
            <img src={project.images[0]} alt={`${project.title} preview`} />
            <div className="card-body">
              <span className="badge">{project.category}</span>
              <h3>{project.title}</h3>
              <p>{project.summary}</p>
              <ul className="tech-list">
                {project.tech.map((t) => (
                  <li key={t}>{t}</li>
                ))}
              </ul>
            </div>
          </article>
        ))}
      </div>

      {activeProject && (
        <div
          className="modal-backdrop"
          role="dialog"
          aria-modal="true"
          aria-label={activeProject.title}
          onClick={closeModal}
        >
          <div className="modal-content" onClick={(e) => e.stopPropagation()}>
            <button
              type="button"
              className="modal-close"
              onClick={closeModal}
              aria-label="Close modal"
            >
              &times;
            </button>
            <h3>{activeProject.title}</h3>
            <p>{activeProject.summary}</p>

            <div className="lightbox-viewer">
              <img
                src={activeProject.images[imageIndex]}
                alt={`${activeProject.title} screenshot ${imageIndex + 1}`}
              />
              {activeProject.images.length > 1 && (
                <div className="lightbox-controls">
                  <button
                    type="button"
                    onClick={() =>
                      setImageIndex((i) =>
                        i === 0 ? activeProject.images.length - 1 : i - 1
                      )
                    }
                  >
                    Previous
                  </button>
                  <span>
                    {imageIndex + 1} / {activeProject.images.length}
                  </span>
                  <button
                    type="button"
                    onClick={() =>
                      setImageIndex((i) => (i + 1) % activeProject.images.length)
                    }
                  >
                    Next
                  </button>
                </div>
              )}
            </div>

            <a
              href={activeProject.repoUrl}
              target="_blank"
              rel="noreferrer"
              className="btn-primary"
            >
              View Source Code
            </a>
          </div>
        </div>
      )}
    </section>
  );
}
