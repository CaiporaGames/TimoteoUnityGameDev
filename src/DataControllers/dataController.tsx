import data from '../assets/data.json';
import { Post, ProjectData } from '../Interfaces/Post';

const projectData: ProjectData = data;

export const getProjectsByCollection = (collection: string): Post[] =>
{
  return projectData[collection] || [];
};
