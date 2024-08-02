import React from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
import cardStyles from '../Styles/Card.module.scss';

interface CardProps 
{
  _id?:string;
  title?:string;
  media: string;
  description?: string;
  link: string;
  imagePosition: 'left' | 'right';
}

const Card: React.FC<CardProps> = ({ title, media, description, _id, link, imagePosition }) => 
{
  const navigate = useNavigate();
  const location = useLocation();
  const currentPath = location.pathname;
  const handleClick = () => 
{
    navigate(`${currentPath}/${_id == undefined ? link : _id}`);
};
  return (
    <div onClick={handleClick} className={cardStyles.card}>
      <img className={cardStyles.cardImage} src={media} alt={description} style={{ float: imagePosition }} />
      <p className={cardStyles.cardDescription}>{title}</p>
    </div>
  );
};

export default Card;
