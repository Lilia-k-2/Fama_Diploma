import React from 'react'
import './App.css';
import Navbar from './components/navbar/Navbar';
import About from './components/about/About'
import Footer from './components/footer/Footer';
import Questions from './screens/questions/Questions';
import { Routes, Route } from "react-router-dom";


// const voteStartHandler = () => {
//   setStep(2);
//   interval = setInterval(() => {
//     setTime(prevTime => prevTime + 1);
//   }, 1000);
// }

function App() {
  return (
    <div>
      <Navbar />
      <Routes>
        <Route path="/" element={<About />} />
        <Route path="questions" element={<Questions />} />
      </Routes>
      <Footer />
      
    </div>
  );
}

export default App;
