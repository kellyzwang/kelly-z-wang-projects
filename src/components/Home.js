import React from 'react';
import { Footer } from './Footer.js';

export function Home() {
    return (
        <div>
            <section>
                <div className='wrapper'>

                    <div className='left-column'>
                        <img src="https://kellyzwang.github.io/kelly-z-wang-projects/img/kelly.jpg" alt="kelly"
                            width="300" height="300"></img>
                    </div>
                    <div className='right-column'>
                        <h1> Hello! I'm Kelly Wang.</h1>
                        <p>I'm passionate about turning data into
                            actionable insights to drive better decision-making
                            and creating data-driven products that improve
                            user experience.
                        </p>
                    </div>

                </div>


                <div className="text-box">
                    <h1>Background</h1>

                    <p>I'm a senior at the University of Washington, Seattle
                        studying Informatics with a focus on Data Science
                        and Human-Computer Interaction, minoring in Applied Math. I'll be going back to UW for grad school to study data science in the MSDS program starting in fall 2023.</p>

                    <p>I've worked on analyzing council meeting data at a research lab under the UW Information School.
                        I was also a teaching assistant for a database course and a foundational data science course at the university (INFO 330, INFO 201).
                    </p>
                </div>


                {/*
                <div className="text-box">
                    <h1>Previously</h1>
                    <p></p>
                    <p>UW INFORMATION SCHOOL</p> <ul>
                        <li>Databases and Data Modeling Teaching Assistant</li>
                        <li>Foundational Skills for Data Science Teaching Assistant</li>
                    </ul>
                </div>
    */}
            </section>
            <Footer />
        </div>
    );
}