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
                        <h1 className='light'> Hello! I'm <span>Kelly Wang.</span></h1>
                        <p>I'm passionate about turning data into
                            actionable insights to drive better decision-making
                            and creating data-driven products that improve
                            user experience.
                        </p>
                    </div>

                </div>


                <div className="text-box">
                    <h1 className='light'>Background</h1>

                    <p>I'm a senior at the <a href="https://ischool.uw.edu/" className='bold-link'>University of Washington, Seattle</a>
                        &nbsp;studying Informatics with a focus on Data Science
                        and Human-Computer Interaction, and a minor in Applied Mathematics.
                        I'll be returning to UW for grad school to study data
                        science in the <a href="https://www.washington.edu/datasciencemasters/" className='bold-link'>MSDS</a> program starting in fall 2023.</p>

                    <p>I've worked on&nbsp;
                        <a href="https://councildataproject.org/" className='bold-link'>city council meeting data</a>
                        &nbsp;through data analysis and natural language processing
                        at a research lab under the UW Information School.
                        I was also a teaching assistant for a <a href="https://myplan.uw.edu/course/#/courses/INFO330?states=N4Ig7gDgziBcLADrgJYDsAmB7MAJApigOYAWALsrAIwDsAzAKwA0yY62YACllCmSljSUATMIC%2BIMUA" className='bold-link'>database course</a>
                        &nbsp;and a <a href="https://info201.github.io/" className='bold-link'>foundational data science course</a> at the university.
                        My academic interests tend to revolve around data analytics, database management,
                        natural language processing, and human-centered data science.
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