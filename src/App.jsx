import * as React from 'react';
import {Routes, Route} from "react-router-dom";
import LandingScreen from './LandingScreen/landingScreen';
import Home from './LandingScreen/home';

export default function App() {
  return(
    <Routes>
    {/* <Route path="/login" element={<LandingScreen/>}/> */}
    <Route path="/" element={<LandingScreen/>}/>
    <Route path="/:link" element={<Home/>}/>
  </Routes>
  )
  
}