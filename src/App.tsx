import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Header from './Components/Header'; // Adjust path as necessary
import AboutPage from './Pages/About'; // Adjust path as necessary
import HomePage from './Pages/Home'; // Your Home page component

const App: React.FC = () => {
    return (
        <Router>
            <Header />
            <main>
                <Routes>
                    <Route path="/" element={<HomePage />}></Route>
                    <Route path="/about" element={<AboutPage />}></Route>
                </Routes>
            </main>
        </Router>
    );
};

export default App;
