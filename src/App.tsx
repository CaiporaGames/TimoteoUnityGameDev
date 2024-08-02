import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Header from './Components/Header'; 
import AboutPage from './Pages/About';
import HomePage from './Pages/Home'; 
import EducationPage from './Pages/Education'; 
import ProjectsPage from './Pages/Projects'; 
import ProjectPage from './Pages/Project'; 
import WorkExperience from './Pages/WorkExperience';
import ProjectsCollection from './Pages/ProjectsCollection';

const App: React.FC = () => {
    return (
        <Router>
            <Header />
            <main>
                <Routes>
                    <Route path="/" element={<HomePage />}/>
                    <Route path="/about" element={<AboutPage />}/>
                    
                    <Route path="/projects" element={<ProjectsPage />}/>
                    <Route path="/projects/:collectionName" element={<ProjectsCollection />} />
                    <Route path="/projects/:collectionName/:url" element={<ProjectPage />} />

                    <Route path="/workExperience" element={< WorkExperience/>}/>
                    <Route path="/education" element={< EducationPage/>}/>
                </Routes>
            </main>
        </Router>
    );
};

export default App;
