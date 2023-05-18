import React from "react";
import ProjectCard from "./ProjectCard";
import projects from "../data/projects.json";
import "../styles/Portfolio.css";

const Portfolio = () => {
    return (
        <section>
            <div className="content-container">
            <h1 className="title">Portfolio</h1>
                
            <hr className="line"></hr>
           <article className="project-container">
            {projects.map((project, index) => (
                <ProjectCard
                key={index}
                name={project.name}
                image={project.image}
                description={project.description}
                deployed={project.deployed}
                github={project.github}
                />
                ))
                
            }

           </article>
            </div>
        </section>
    )

}

export default Portfolio;