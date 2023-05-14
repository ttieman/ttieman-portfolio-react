import React from "react";
import "../styles/ProjectCard.css";

const ProjectCard = (props) => {
    return (
        <div className="card project my-4">
            <img src={props.image} className="card-img-top project-image" alt={props.name} />
            <div className="card-body">
                <h5 className="card-title project-title">{props.name}</h5>
                <p className="card-text project-description">{props.description}</p>
                <a href={props.deployed} className="btn btn-primary">Deployed</a>
                <a href={props.github} className="btn btn-primary">Github</a>
            </div>
        </div>

    )
}

export default ProjectCard;