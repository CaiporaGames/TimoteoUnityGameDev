import React from 'react';
import { useParams } from 'react-router-dom';
import Card from '../Components/Card';
import { getProjectsByCollection } from '../DataControllers/dataController.tsx';
import { Post } from '../Interfaces/Post';
import projects from '../Styles/Projects.module.scss';

const ProjectsCollection: React.FC = () => 
{
  const { collectionName } = useParams<{ collectionName: string }>();
  
  if (!collectionName) return <div>Collection not found</div>;

  const projectList: Post[] = getProjectsByCollection(collectionName);

  return (
    <div className={projects.container}>
      {projectList.map((project) => (
        <Card
          _id={project._id}
          key={project._id}
          media={project.media}
          title={project.title}
          description={''}
          link={project.url}
          imagePosition="left"
        />
      ))}
    </div>
  );
};

export default ProjectsCollection;
