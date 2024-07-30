import React from 'react';
import rotating from '../Styles/RotatingImage.module.scss'
import circle from '../assets/Images/circle.png';
import rotatingImage from '../assets/Images/me3.png';

const RotatingImage: React.FC = () => 
{
  return (
    <div className={rotating.rotatingImage}>
      <img src={circle} alt="Base Image" className={rotating.baseImage}/>
      <img src={rotatingImage} alt="Rotating Image" className={rotating.rotatingCircle}/>
    </div>
  );
};

export default RotatingImage;
