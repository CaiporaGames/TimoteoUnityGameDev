import DotsComponent from '../Components/DotsComponent';
import LineComponent from '../Components/LineComponent';
import about from '../Styles/About.module.scss';
import globalStyles from '../Styles/Global.module.scss';
import workexperienceStyles from '../Styles/workExperience.module.scss';
import blurPoint from '../assets/Images/BlurPoint.png'; 
import darkCloud from '../assets/Images/workExperience/darkCloud.png';
import ufs from '../assets/Images/workExperience/ufs.jpg';
import ma9 from '../assets/Images/workExperience/ma9.png';
import ghc from '../assets/Images/workExperience/ghc.png';
import unity from '../assets/Images/workExperience/unity.png';

const positions = 
[
    { top: '300px', right: '-100px' },
    { top: '250%', left: '50%' },
    { top: '530%', right: '0%' },
    { top: '550%', left: '50px' },
    { top: '950%', right: '0px' },
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

     {/* Freelancing */}
     <div className={about.content}>
        
        <div className={about.textArea}>
        <div className={about.headerLogo} style={{ top: positions[0].top, right: positions[0].left }}>
          {<img src={blurPoint} alt="Logo" />}
        </div>
            <h3>
            FREELANCING
              <h4>Currently</h4>
            </h3>
            <div style={{lineHeight:'25px', rowGap:'5px'}}>
              <p>
              <h4>Role: </h4>
              Now I am working as a freelancer using Unity engine creating: 
              </p>
              <ul style={{color:'white', marginLeft:'15px', listStyle:'none'}}>
                <strong>
                  <li>Unity Shaders.</li>
                  <li>Unity Editor Tools.</li>
                  <li>Unity Tools.</li>
                  <li>Unity UI's.</li>
                  <li>Unity AI's.</li>
                  <li>Unity Procedural Mesh Generation.</li>
                  <li>Unity DOTS.</li>
                  <li>Unity Multiplayer.</li>
                  <li>And Much More...</li>
                </strong>
              </ul>
              <p>
              <h4>Unity Tasks: </h4>
                My responsibilities includ:
              </p>
              <ul style={{color:'white', marginLeft:'15px', listStyle:'none', lineHeight:'25px'}}>
                <strong>
                  <li>Creating documentation for the tools.</li>
                  <li>Creating game UI's.</li>
                  <li>Making performance optimization decisions.</li>
                  <li>Bugs fixing.</li>
                  <li>and more...</li>
                </strong>
              </ul>
            </div>
        </div>
        <div className={workexperienceStyles.image}>
            {<img src={unity} alt="Logo" />}
        </div>
    </div>
   


    {/* Dark Cloud */}
    <div className={about.content}>
        <div className={about.image}>
            {<img src={darkCloud} alt="Logo" />}
        </div>
        <div className={about.textArea}>
        <div className={about.headerLogo} style={{ top: positions[1].top, right: positions[1].right }}>
          {<img src={blurPoint} alt="Logo" />}
        </div>
            <h3>
              DARK CLOUD CHOICE
              <h6>july 2022 - november 2023 · 1 year 5 month</h6>
            </h3>
            <div style={{lineHeight:'25px', rowGap:'5px'}}>
              <p>
              <h4>Role: </h4>
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
                  <li>Integration of multimedia, ex: sprites and audio.</li>
                  <li>Creating game documentation.</li>
                  <li>Assisting other programmers with bug fixing.</li>
                  <li>Making performance optimization decisions for UI's and JSON data.</li>
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

    {/* GHC */}
    <div className={about.content}>
        
        <div className={about.textArea}>
        <div className={about.headerLogo} style={{ top: positions[2].top, right: positions[2].left }}>
          {<img src={blurPoint} alt="Logo" />}
        </div>
            <h3>
            GHC Invest
              <h4>april 2022 - june 202 · 3 meses</h4>
            </h3>
            <div style={{lineHeight:'25px', rowGap:'5px'}}>
              <p>
              <h4>Role: </h4>
              I contributed to a metaverse game where users can sell NFTs, play internal games, and buy billboards in the city. I used the tools:
              </p>
              <ul style={{color:'white', marginLeft:'15px', listStyle:'none'}}>
                <strong>
                  <li>Unity3D with C#.</li>
                  <li>Node.js</li>
                  <li>MongoDB.</li>
                </strong>
              </ul>
              <p>
              <h4>Unity Tasks: </h4>
                My responsibilities includ:
              </p>
              <ul style={{color:'white', marginLeft:'15px', listStyle:'none', lineHeight:'25px'}}>
                <strong>
                  <li>Creating game documentation for artists have a common ground.</li>
                  <li>Creating game documentation for other gamedevelopers.</li>
                  <li>Developing the movement system using Unity inverse kinematics system.</li>
                  <li>Making performance optimization decisions for big worlds.</li>
                  <li>Creating a dialogue system.</li>
                  <li>Assisting other programmers with bug fixing.</li>
                  <li>Creating the backend with Node.js and MongoDB</li>
                </strong>
              </ul>
              <p>  
              <h4>Design Tasks: </h4>
                Putting it all together inside the levels following the game narrative and specifications developed by the 
                team as follows:
                <ul style={{color:'white', marginLeft:'15px', listStyle:'none', lineHeight:'25px'}}>
                  <strong>
                    <li>Create all drawing and animations.</li>
                    <li>Create particle effects.</li>
                    <li>Level Design.</li>
                    <li>Upload audios.</li>
                    <li>Create subtitles.</li>
                  </strong>
                </ul>
                
              </p>
                <p> 
                <h4>Mentoring: </h4>
                This includes teaching other students how to use Unity and guiding 
                them through various aspects of game development as:
                <ul style={{color:'white', marginLeft:'15px', listStyle:'none', lineHeight:'25px'}}>
                  <strong>
                    <li>Level Design.</li>
                    <li>Game Mechanics.</li>
                    <li>Unity Best Practices over optimization.</li>
                  </strong>
                </ul>
                </p>
            </div>
        </div>
        <div className={workexperienceStyles.image}>
            {<img src={ghc} alt="Logo" />}
        </div>
    </div>
   
   {/* UFS */}

    <div className={about.content}>
        
        <div className={about.textArea}>
        <div className={about.headerLogo} style={{ top: positions[3].top, right: positions[3].left }}>
          {<img src={blurPoint} alt="Logo" />}
        </div>
            <h3>
            FEDERAL UNIVERSITY OF SERGIPE 
              <h4>september 2021 - dezember 2021 · 4 meses</h4>
            </h3>
            <div style={{lineHeight:'25px', rowGap:'5px'}}>
              <p>
              <h4>Role: </h4>
                I've played several roles in this project, since game design till teaching other students about 
                Unity technical part.
                Also discussing activaly with the team about the steps necessary to finish the game in the short time we had.
                In this project I used the tools:
              </p>
              <ul style={{color:'white', marginLeft:'15px', listStyle:'none'}}>
                <strong>
                  <li>Unity3D with C#.</li>
                  <li>Krita</li>
                  <li>Audacty.</li>
                </strong>
              </ul>
              <p>
              <h4>Unity Tasks: </h4>
                I cover different aspects of the development cycle, from
              ideation to implementation:
              </p>
              <ul style={{color:'white', marginLeft:'15px', listStyle:'none', lineHeight:'25px'}}>
                <strong>
                  <li>Game mechanics.</li>
                  <li>Level Design.</li>
                  <li>Audio Management.</li>
                  <li>Mentoring Students.</li>
                  <li>Creating all the 2D assets.</li>
                  <li>Creating Animations.</li>
                </strong>
              </ul>
              <p>  
              <h4>Design Tasks: </h4>
                Putting it all together inside the levels following the game narrative and specifications developed by the 
                team as follows:
                <ul style={{color:'white', marginLeft:'15px', listStyle:'none', lineHeight:'25px'}}>
                  <strong>
                    <li>Create all drawing and animations.</li>
                    <li>Create particle effects.</li>
                    <li>Level Design.</li>
                    <li>Upload audios.</li>
                    <li>Create subtitles.</li>
                  </strong>
                </ul>
                
              </p>
                <p> 
                <h4>Mentoring: </h4>
                This includes teaching other students how to use Unity and guiding 
                them through various aspects of game development as:
                <ul style={{color:'white', marginLeft:'15px', listStyle:'none', lineHeight:'25px'}}>
                  <strong>
                    <li>Level Design.</li>
                    <li>Game Mechanics.</li>
                    <li>Unity Best Practices over optimization.</li>
                  </strong>
                </ul>
                </p>
            </div>
        </div>
        <div className={workexperienceStyles.image}>
            {<img src={ufs} alt="Logo" />}
        </div>
    </div>


     {/* MA9 */}
     <div className={about.content}>
     <div className={workexperienceStyles.image}>
            {<img src={ma9} alt="Logo" />}
        </div>
        <div className={about.textArea}>
        <div className={about.headerLogo} style={{ top: positions[4].top, right: positions[4].right }}>
          {<img src={blurPoint} alt="Logo" />}
        </div>
            <h3>
            MA9 SOLUTION GROUP  
              <h4>august 2020 - may 2021 · 10 meses</h4>
            </h3>
            <div style={{lineHeight:'25px', rowGap:'5px'}}>
              <p>
              <h4>Role: </h4>
              I was an Angular trainee where I studied:
              
              <ul style={{color:'white', marginLeft:'15px', listStyle:'none'}}>
                <strong>
                  <li>HTML.</li>
                  <li>CSS</li>
                  <li>Typescript.</li>
                  <li>Angular.</li>
                </strong>
              </ul>
              During this time, I worked in a team and participated in weekly scrum meetings. I also:
              <ul style={{color:'white', marginLeft:'15px', listStyle:'none'}}>
                <strong>
                  <li>Developed some small applications.</li>
                  <li>Took Udemy courses to enhance my skills.</li>
                  <li>Participated in scrum meetings and project sprints as an observer.</li>
                </strong>
              </ul>
              All these efforts culminated in the construction of an e-commerce application using the technologies I studied.
              </p>
            </div>
        </div>
        
    </div>
          
           <div className={globalStyles.dotNLine}>
             <DotsComponent />
             <LineComponent 
                       orientation="horizontal" 
                       width="30%" 
                       height="2px" 
                       color="#fff" 
                       top="1000%" 
                       left="70%"
                   />
          </div> 
     </div>
  );
};

export default WorkExperience;