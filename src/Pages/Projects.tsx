// src/pages/Projects.tsx
import React from 'react';
import Card from '../Components/Card';
import projects from '../Styles/Projects.module.scss';
import ai from '../assets/Images/ai.jpg';
import ar from '../assets/Images/AR.jpg';
import ui from '../assets/Images/UI.jpg';
import editorTools from '../assets/Images/editorTools.jpeg';
import shader from '../assets/Images/shader.jpg';
import multiplayer from '../assets/Images/multiplayer.jpg';
import LineComponent from '../Components/LineComponent';

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
        link="UIProjects"
        imagePosition="right"
      />
      <Card
        media={ar}
        title="AR projects"
        link="ARProjects"
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
        link="ShaderProjects"
        imagePosition="left"
      />
       <Card
        media={editorTools}
        title="Editor Tools"
        link="EditorToolsProjects"
        imagePosition="right"
      />
    </div>
  );
};

export default Projects;
