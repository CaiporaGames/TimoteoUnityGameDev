// src/pages/Projects.tsx
import React from 'react';
import Card from '../Components/Card';
import projects from '../Styles/Projects.module.scss';
import globalStyles from '../Styles/Global.module.scss';
import ai from '../assets/Images/ai.jpg';
import ar from '../assets/Images/AR.jpg';
import ui from '../assets/Images/UI.jpg';
import shader from '../assets/Images/shader.jpg';
import multiplayer from '../assets/Images/multiplayer.jpg';
import LineComponent from '../Components/LineComponent';
import DotsComponent from '../Components/DotsComponent';

const Projects: React.FC = () => 
{
  return (
    <div className={projects.container}>
       <LineComponent 
                    orientation="horizontal" 
                    width="30%" 
                    height="3px" 
                    color="#fff" 
                    top="25%" 
                    left="0%"
                    marginTop='0%'
                    zIndex='10'
                />
      <Card
        media={ai}
        title="AI projects"
        link="AIProjects"
        imagePosition="left"
      />
      <Card
        media={ui}
        title="UI projects"
        link="UIprojects"
        imagePosition="right"
      />
      <Card
        media={ar}
        title="AR projects"
        link="ARprojects"
        imagePosition="left"
      />
      <Card
        media={multiplayer}
        title="Multiplayer projects"
        link="Multiplayerprojects"
        imagePosition="right"
      />
      <Card
        media={shader}
        title="Shaders projects"
        link="Shadersprojects"
        imagePosition="left"
      />
    </div>
  );
};

export default Projects;
