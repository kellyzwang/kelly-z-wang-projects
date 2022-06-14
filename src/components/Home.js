import React from 'react';
import { Footer } from './Footer.js';


export function Home() {
    return (
        <div>
            <section>
                <div className="flex-container-home">
                    <div className="flex-item-card-home">
                        <h1>Hello! I'm Kelly.</h1>
                        <p>I am an Informatics - Data Science student at the University of Washington Seattle. 
                            I have work experience in teaching R programming language and project experience 
                            in data visualization, data analysis, web scraping, software development, product 
                            design, as well as database design and management.</p>
                    </div>
                </div>
            </section>
            <Footer />
        </div>
    );
}