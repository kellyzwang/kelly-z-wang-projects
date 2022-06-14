import React, { useState } from 'react';
import { Footer } from './Footer.js';
import { ProjectCard } from './ProjectCard.js'
import { Button } from "react-bootstrap";
import PROJECTS from '../data/projects.json';
/*
EXAMPLE_PROJECT_DATA = [{
      "title": "My Diet Diary",
      "description": "An interactive web app that helps user achieve a healthier lifestyle by monitoring BMI results and tracking daily food intake.",
      "tags": ["REACT", "HTML", "CSS", "JAVASCRIPT", "FIREBASE"],
      "img_path": "img/MyDietDiary.png",
      "img_alt": "MyDietDiary",
      "link_to_project": "https://my-diet-diary.web.app/"
    },
    {
      "title": "BTS Song Recommendation ",
      "description": "A website that helps ARMYs choose which BTS songs to listen to by selecting mood categories, and get BTS song recommendations.",
      "tags": ["HTML", "CSS", "JAVASCRIPT", "PYTHON"],
      "img_path": "img/BTSSongRecommendation.png",
      "img_alt": "BTS Song Recommendation Project",
      "link_to_project": "https://dorissssy.github.io/Info498A_Final_Project/"
    }]
*/


export function Projects() {


    // state variable to track filter category, set filter category to empty string
    const [selectedFilterCategory, setSelectedFilterCategory] = useState("");


    const allUniqueTags = ["REACT", "HTML", "CSS", "FIREBASE", "JAVASCRIPT", "PYTHON", "R", "R SHINY", "FIGMA", "SQL", "TABLEAU"]
    const optionElems = allUniqueTags.map((category) => {
        return <option key={category} value={category}>{category}</option>;
    })


    const handleSelectFilterChange = function (event) {
        const selectedValue = event.target.value;
        setSelectedFilterCategory(selectedValue);
    }


    const displayedData = PROJECTS.filter((item) => {
        let result = false;
        if (selectedFilterCategory == "") {
            result = true;
        } else if (item.tags.includes(selectedFilterCategory)) {
            result = true;
        }
        return result;
    });



    const cardElems = displayedData.map((item) => {
        return <ProjectCard key={item.title}
                            title={item.title} 
                            description={item.description} 
                            img_path={item.img_path}
                            img_alt={item.img_alt}
                            link_to_project={item.link_to_project} />
    })


    return (
        <div>
            <section>
                <div className="page-title">
                    <h1>Projects</h1>
                    <p>A glimpse of the projects I've been working on</p>
                </div>
                <div className="center-filter">
                <label htmlFor="filter" className="margin-right">Filter:</label>
               
                <select className="form-control mr-sm-2" id="filter_category" name="filter_category"
                    value={selectedFilterCategory}
                    onChange={handleSelectFilterChange}>
                    <option value="">All</option>
                    {optionElems}
                </select>
                </div>

                <div className="flex-container">
                    {cardElems}
                </div>
            </section>
            <Footer />
        </div>
    );
}