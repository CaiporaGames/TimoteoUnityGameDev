import globalStyles from '../Styles/Global.module.scss';
import RotatingImage from '../Components/RotatingImage';
import GitHubIcon from '../Components/GitHubIcon';
import LinkedInIcon from '../Components/LinkedInIcon';
import EmailIcon from '../Components/EmailIcon';
import blurPoint from '../assets/Images/BlurPoint.png'; 
import DotsComponent from '../Components/DotsComponent';
import LineComponent from '../Components/LineComponent';

const Home: React.FC = () => 
{
  return (
  <div className={globalStyles.pageBody}>
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
    <div className={globalStyles.container}>
    
        <div className={globalStyles.middleContent}>
          <div className={globalStyles.content}>
            <div className={globalStyles.headerLogo}>
              {<img src={blurPoint} alt="Logo" />}
            </div>
            <h1 className={globalStyles.iamText}>Hi, I am</h1>
            <h1 className={globalStyles.myName}>Timóteo Cruz</h1>
            <h3 className={globalStyles.mainSetence}>A versatile Unity game developer with expertise in 2D/3D games, 
              UI, AR, multiplayer, procedural mesh... committed to best practices for clean, extensible, and reusable code.</h3>
          </div>
          <div className={globalStyles.topRight}>
            <RotatingImage />
          </div>
        </div>

      <div className={globalStyles.icons}>
        <GitHubIcon />
        <LinkedInIcon />
        <EmailIcon />
      </div>
       <div className={globalStyles.dotNLine}>
          <DotsComponent />
          <LineComponent 
                    orientation="horizontal" 
                    width="30%" 
                    height="2px" 
                    color="#fff" 
                    top="100%" 
                    left="70%"
                    marginTop='10%'
                />
       </div>
    </div>
  </div>
  );
};

export default Home;