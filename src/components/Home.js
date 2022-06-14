import React from 'react';
import { Footer } from './Footer.js';


export function Home() {
    return (
        <div>
            <section>
                <div className="flex-container-home">
                    <div className="flex-item-card-home">
                        <h1>Hello! I'm Kelly.</h1>
                        <p>I'm an Informatics - Data Science student at the University of Washington Seattle.</p>
                    </div>
                </div>
            </section>
            <Footer />
        </div>
    );
}