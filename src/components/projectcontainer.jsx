
import { useState } from "react";

function ProjectContainer() {
  const [projects, setProjects] = useState([]);
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const [searchTerm, setSearchTerm] = useState("");

  function handleSubmit(e) {
    e.preventDefault();

    if (!title.trim() || !description.trim()) {
      return;
    }

    const newProject = {
      id: Date.now(),
      title: title.trim(),
      description: description.trim()
    };

    setProjects([...projects, newProject]);
    setTitle("");
    setDescription("");
  }

  const filteredProjects = projects.filter((project) =>
    project.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
    project.description.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <section className="project-container" id="projects">
      <div className="section-heading">
        <p className="section-tag">MY WORK</p>
        <h2>My Projects</h2>
       
      </div>

      <form className="project-form" id="add-project" onSubmit={handleSubmit}>
        <h3>Add a New Project</h3>

        <input
          type="text"
          placeholder="Project title"
          value={title}
          onChange={(e) => setTitle(e.target.value)}
          required
        />

        <textarea
          placeholder="Describe your project..."
          value={description}
          onChange={(e) => setDescription(e.target.value)}
          required
        />

        <button type="submit">+ Add Project</button>
      </form>

      <div className="projects-header">
        <h3>All Projects</h3>

        <input
          type="search"
          className="search-input"
          placeholder="Search projects..."
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
        />
      </div>

      <div className="project-grid">
        {filteredProjects.length > 0 ? (
          filteredProjects.map((project) => (
            <article className="project-card" key={project.id}>
              <div className="project-icon">✦</div>
              <h3>{project.title}</h3>
              <p>{project.description}</p>
            </article>
          ))
        ) : (
          <p className="empty-message">
            {projects.length === 0
              ? "No projects yet. Add your first project above!"
              : "No projects match your search."}
          </p>
        )}
      </div>
    </section>
  );
}

export default ProjectContainer;
