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
                <Route exact path="/" render={() => <Home />} />
                <Route exact path="/home" render={() => <Home />} />
                <Route exact path="/projects" render={() => <Home />} />
                {/*<Route exact path="*" render={() => <Home />} />*/}
            </Routes>
        </div>
    )
}

export default App;