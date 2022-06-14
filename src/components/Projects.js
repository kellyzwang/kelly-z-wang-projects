import React from 'react';
import { Footer } from './Footer.js';
import { Button } from "react-bootstrap";

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

    const handleViewProjectClick = () => {
        window.open("https://my-diet-diary.web.app/");
    }



    return (
        <div>
            <section>
                <h1 className="page-title">Projects</h1>
                <div class="flex-container">
                    {/* Card 1 */}
                    <div class="flex-item-card">
                        <img src="img/MyDietDiary.png" alt="MyDietDiary" />
                        <div className="card-content">
                            <h3 className="project-title">My Diet Diary</h3>
                            <p>An interactive web app that helps user achieve a healthier lifestyle
                                by monitoring BMI results and tracking daily food intake.</p>
                        </div>
                        <div className="center-flex">
                            <Button
                                className="view-project-button"
                                variant="outline-secondary"
                                onClick={handleViewProjectClick}>View Project</Button>
                        </div>
                    </div>

                    {/* Card 2 */}
                    <div class="flex-item-card">
                        <img src="img/abstract2.jpg" alt="abstract art" />
                        <p>Doloremque commodi unde eaque! Et natus dolorum corrupti ut numquam.</p>
                    </div>

                    {/* Card 3 */}
                    <div class="flex-item-card">
                        <img src="img/abstract3.jpg" alt="abstract art" />
                        <p>Odio praesentium cum nemo nesciunt architecto, quam voluptate porro inventore.</p>
                    </div>

                    {/* Card 4 */}
                    <div class="flex-item-card">
                        <img src="img/abstract4.jpg" alt="abstract art" />
                        <p>Dignissimos consequuntur maxime harum debitis ratione, culpa iure pariatur quaerat?</p>
                    </div>

                    {/* Card 5 */}
                    <div class="flex-item-card">
                        <img src="img/abstract5.jpg" alt="abstract art" />
                        <p>Odit id earum commodi tempora voluptatum mollitia dolorum, perspiciatis nulla!</p>
                    </div>
                </div>
            </section>
            <Footer />
        </div>
    );
}