import "styles/Projects.css";
import { projects } from "../constants/projects"; 

const ProjectCard = ({ project }) => {
  return (
    <div className="col-lg-5 mx-auto mb-4">
      <div className="card">
        <img className="card-img-top" src={`assets/images/${project.imageName}`} alt={project.imageName} />
        <div className="card-body">
          <h4 className="card-title">{project.title}</h4>
          <p className="card-text">{project.description}</p>
        </div>
        <div className="card-footer">
          <a href={project.link} className="btn btn-success stretched-link">Find Out More!</a>
        </div>
      </div>
    </div>   
  );
}

const Projects = () => {
  return ( 
    <div className="Projects">
      <div className="row justify-content-between text-center mt-8">
        {projects.map((project, index) => (
          <ProjectCard 
            key={`project-${index}`}
            project={project}/>
        ))}
      </div>
    </div>
   );
}
 
export default Projects;