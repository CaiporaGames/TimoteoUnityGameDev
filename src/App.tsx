import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Header from './Components/Header'; 
import AboutPage from './Pages/About';
import HomePage from './Pages/Home'; 
import EducationPage from './Pages/Education'; 

const App: React.FC = () => {
    return (
        <Router>
            <Header />
            <main>
                <Routes>
                    <Route path="/" element={<HomePage />}></Route>
                    <Route path="/about" element={<AboutPage />}></Route>
                    <Route path="/education" element={<EducationPage />}></Route>
                </Routes>
            </main>
        </Router>
    );
};

export default App;
