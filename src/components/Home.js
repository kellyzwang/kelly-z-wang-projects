import React from 'react';
import { Footer } from './Footer.js';

export function Home() {
    return (
        <div>
            <section>
                <div className='wrapper'>
                <div className='left-column'>
                    <h1>Hello! I'm Kelly.</h1>
                    <p>I am a senior at the University of Washington,
                        studying Informatics with a focus on Data Science
                        and Human-Computer Interaction, minoring in applied
                        math. I'm passionate about turning data into
                        actionable insights to drive better decision-making
                        and creating data-driven products that improve
                        the user experience.
                    </p>
                </div>

                <div className='right-column'>
                    <img href="https://kellyzwang.github.io/kelly-z-wang-projects/img/kelly.jpg" alt="kelly"></img>
                </div>
                </div>

            </section>
            <Footer />
        </div>
    );
}