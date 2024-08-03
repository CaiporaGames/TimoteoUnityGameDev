import React from 'react';
import { useLocation, useParams } from 'react-router-dom';
import { getProjectsByCollection } from '../DataControllers/dataController.tsx';
import projectStyles from '../Styles/Project.module.scss';
import globalStyles from '../Styles/Global.module.scss';
import textParser from '../DataControllers/textParser.tsx';
import LineComponent from '../Components/LineComponent.tsx';
import DotsComponent from '../Components/DotsComponent.tsx';

const Project: React.FC = () => 
{
  const { url } = useParams<{ url: string }>();
  if (!url) return <div>URL not found</div>;
  const location = useLocation();
  const currentPath = location.pathname;
  
  const projects = getProjectsByCollection(currentPath.split('/').slice(-2)[0]);
  console.log("id: ", projects[0]._id);
  // Find the project with the matching URL
  const project = projects.find((project) => project._id === url);
  if (!project) return <div>Project not found</div>;
  const defaultStyles = {
    bold: { fontWeight: 'bold', color: '#c202db' },
    italic: { fontStyle: 'italic', color: 'blue' },
    underline: { textDecoration: 'underline' }
  };
  return (
    <div className={projectStyles.container}>
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
          <h2>{project.title}</h2>
      <div className={projectStyles.content}>
          <img className={projectStyles.image}src={project.media} alt={project.title} />
          <div className={projectStyles.body}>
            <h4>About the project:</h4>
            <p>{textParser(project.description, defaultStyles)}</p>
            {project.url != "" ? <a href={project.url}>Play the Game</a> : <span></span>}
            
      
          </div>
      </div>
      <div className={globalStyles.dotNLine}>
          <DotsComponent />
          <LineComponent 
                    orientation="horizontal" 
                    width="30%" 
                    height="2px" 
                    color="#fff" 
                    top="110%" 
                    left="70%"
                    marginTop='10%'
                />
       </div>
    </div>
  );
};

export default Project;
