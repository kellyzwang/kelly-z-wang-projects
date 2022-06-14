import React, { useState, useEffect } from 'react';
import { Routes, Route } from 'react-router-dom';

//import { getDatabase, ref, onValue } from 'firebase/database';
import { NavBar } from './NavBar.js';
import { Home } from './Home.js';
import { Projects } from './Projects.js';



function App(props) {

    return (
        <div>
        <NavBar />

            <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/home" element={<Home />} />
                <Route path="/projects" element={<Projects />} />
                {/*<Route exact path="*" render={() => <Home />} />*/}
            </Routes>
        </div>
    )
}

export default App;