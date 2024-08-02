import LineComponent from '../Components/LineComponent';
import about from '../Styles/About.module.scss';
import blurPoint from '../assets/Images/BlurPoint.png'; 
import darkCloud from '../assets/Images/workExperience/darkCloud.png';

const positions = 
[
    { top: '300px', right: '-100px' },
    { top: '250%', left: '50%' },
    { top: '230%', right: '0%' },
    { top: '350%', left: '10px' },
];
const WorkExperience: React.FC = () => 
{
  return (
    <div className={about.container}>
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
    <div className={about.content}>
        <div className={about.image}>
            {<img src={darkCloud} alt="Logo" />}
        </div>
        <div className={about.textArea}>
        <div className={about.headerLogo} style={{ top: positions[0].top, right: positions[0].right }}>
          {<img src={blurPoint} alt="Logo" />}
        </div>
            <h3>
              DARK CLOUD CHOICE
              <h6>july 2022 - november 2023 · 1 year 5 month</h6>
            </h3>
            <div style={{lineHeight:'25px', rowGap:'5px'}}>
              <p>
              <h4>Hole: </h4>
                I played an integral role in the design and development of engaging interactive experiences. Using:
              </p>
              <ul style={{color:'white', marginLeft:'15px', listStyle:'none'}}>
                <strong>
                  <li>Unity3D with C#.</li>
                  <li>Angular with Typescript</li>
                  <li>SQLite3.</li>
                  <li>Node.js.</li>
                </strong>
              </ul>
              <p>
              <h4>Unity Tasks: </h4>
                I cover different aspects of the development cycle, from
              ideation to implementation and optimization. In the gaming world, my specialization in Unity3D and C#
              involved creating:
              </p>
              <ul style={{color:'white', marginLeft:'15px', listStyle:'none', lineHeight:'25px'}}>
                <strong>
                  <li>Game mechanics.</li>
                  <li>Character animations.</li>
                  <li>Asset management.</li>
                  <li>integration of multimedia, ex: sprites and audio.</li>
                </strong>
              </ul>
              <p>  
              <h4>Angular Tasks: </h4>
                In the applications domain, the combination of Angular, TypeScript and Node.js indicated
              involvement in the development of robust web applications, from interactive interfaces to the
              implementation of functionalities in the back-end.
              </p>
                <p> 
                <h4>Mentoring: </h4>
                  I am also was a mentor to interns, I took on the
                crucial responsibility of guiding and supporting the next generation of talent in the industry, sharing
                technical knowledge, providing constructive feedback and fostering professional growth.
                </p>
            </div>
        </div>
    </div>
   

  {/*   <div className={about.content}>
        
        <div className={about.textArea}>
        <div className={about.headerLogo} style={{ top: positions[1].top, right: positions[1].left }}>
          {<img src={blurPoint} alt="Logo" />}
        </div>
            <h3>
              DARK CLOUD CHOICE
              <h4>september 2021 - dezember 2021 · 4 meses</h4>
            </h3>
            <div style={{lineHeight:'25px', rowGap:'5px'}}>
              <p>
              <h4>Hole: </h4>
              I taught other students how to use Unity. I created the user interface, game animations and sprites. I
              developed the game's mechanics and levels, later uploading it to Simmer.io. I held meetings to discuss the
              game's plot.
              Skills: Design standards, meeting with the game owner, teaching other students, creating game mechanics,
              graphic design of the game, and publishing the game.
              </p>
              <ul style={{color:'white', marginLeft:'15px', listStyle:'none'}}>
                <strong>
                  <li>Unity3D with C#.</li>
                  <li>Angular with Typescript</li>
                  <li>SQLite3.</li>
                  <li>Node.js.</li>
                </strong>
              </ul>
              <p>
              <h4>Unity Tasks: </h4>
                I cover different aspects of the development cycle, from
              ideation to implementation and optimization. In the gaming world, my specialization in Unity3D and C#
              involved creating:
              </p>
              <ul style={{color:'white', marginLeft:'15px', listStyle:'none', lineHeight:'25px'}}>
                <strong>
                  <li>Game mechanics.</li>
                  <li>Character animations.</li>
                  <li>Asset management.</li>
                  <li>integration of multimedia, ex: sprites and audio.</li>
                </strong>
              </ul>
              <p>  
              <h4>Angular Tasks: </h4>
                In the applications domain, the combination of Angular, TypeScript and Node.js indicated
              involvement in the development of robust web applications, from interactive interfaces to the
              implementation of functionalities in the back-end.
              </p>
                <p> 
                <h4>Mentoring: </h4>
                  I am also was a mentor to interns, I took on the
                crucial responsibility of guiding and supporting the next generation of talent in the industry, sharing
                technical knowledge, providing constructive feedback and fostering professional growth.
                </p>
            </div>
        </div>
        <div className={workexperienceStyles.image}>
            {<img src={ufs} alt="Logo" />}
        </div>
    </div>
          
           <div className={globalStyles.dotNLine}>
             <DotsComponent />
             <LineComponent 
                       orientation="horizontal" 
                       width="30%" 
                       height="2px" 
                       color="#fff" 
                       top="470%" 
                       left="70%"
                   />
          </div> */}
     </div>
  );
};

export default WorkExperience;