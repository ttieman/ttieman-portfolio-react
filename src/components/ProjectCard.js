import React from "react";
import { GoMarkGithub } from "react-icons/go";
import { BiLinkExternal } from "react-icons/bi";
import { Container, Row, Col } from "react-bootstrap";
import "../styles/ProjectCard.css";

const ProjectCard = (props) => {
    return (
        <div className="card project my-4">
            <img src={props.image} className="card-img-top project-image" alt={props.name} />
            <div className="card-body">
                <h5 className="card-title project-title">{props.name}</h5>
                <p className="card-text project-description">{props.description}</p>
                <div className="icon-button-container">
                    <a href={props.deployed} className="btn btn-primary card-button"><BiLinkExternal className="button-icon"/></a>
                    <a href={props.github} className="btn btn-primary card-button"><GoMarkGithub className="button-icon"/></a>
                </div>
            </div>
        </div>

    )
}

export default ProjectCard;