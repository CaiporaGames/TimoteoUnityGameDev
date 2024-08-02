export interface Post 
{
    _id: string;
    url: string;
    title: string;
    description: string;
    media: string;
  }
  
  export interface ProjectData 
  {
    [key: string]: Post[];
  }