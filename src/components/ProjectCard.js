import React, { useState } from 'react';
import { Button } from "react-bootstrap";


export function ProjectCard(props) {
    const homepagePath = "https://kellyzwang.github.io/";

    const image_path = homepagePath + props.img_path;

    return (
        <div className="flex-item-card">
            <img src={image_path} alt={props.img_alt} />
            <div className="card-content">
                <h3 className="project-title">{props.title}</h3>
                <p>{props.description}</p>
            </div>
            <div className="center-flex">
                <Button
                    className="view-project-button"
                    variant="outline-secondary"
                    onClick={() => {
                        window.open(props.link_to_project)
                    }}>View Project</Button>
            </div>
        </div>

    )
}

