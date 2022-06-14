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
                <Route path="*" element={<Home />} />
                {/*<Route path="about" element={<AboutUs />} />
                <Route path="bmicalculator" element={<BMICalculator />} />
                <Route path="makeplan" element={<MakeMyDietPlan foodData={combinedFoodData}/>} />
                <Route path="viewplan" element={<ViewMyDietPlan foodData={combinedFoodData}/>} />
                <Route path="add-food-to-database" element={<AddFoodToDatabase foodData={combinedFoodData} />} />
    <Route path='*' element={<Home foodData={props.foodData} />} />*/}
            </Routes>
        </div>
    )
}

export default App;