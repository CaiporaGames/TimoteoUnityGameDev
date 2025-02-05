import globalStyles from '../Styles/Global.module.scss';
import blurPoint from '../assets/Images/BlurPoint.png'; 
import DotsComponent from '../Components/DotsComponent';
import LineComponent from '../Components/LineComponent';
import education from '../Styles/Education.module.scss'

import ufs from '../assets/Images/UFS.jpg'; 
import ufs2 from '../assets/Images/UFS02.jpg'; 
import ufs3 from '../assets/Images/UFS03.jpg'; 
import descomplica from '../assets/Images/descomplica.jpg'; 

const positions = 
[
    { top: '10px', right: '10px' },
    { top: '150%', left: '10px' },
    { top: '230%', right: '0%' },
    { top: '350%', left: '10px' },
];
const Education: React.FC = () => 
{
    return (
        <div className={education.container}>
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
                {/* Descomplica */}
                <div className={education.content}>
                    <div className={education.image}>
                        {<img src={descomplica} alt="Logo" />}
                    </div>
                    <div className={education.textArea}>
                    <div className={education.headerLogo} style={{ top: positions[0].top, right: positions[0].right }}>
                        {<img src={blurPoint} alt="Logo" />}
                    </div>
                        <h2>Descomplica College</h2>
                        <h4 style={{ fontWeight: 'bold', color: 'white' }}>Software Engineer Bachelor Degree | 2024 - Current</h4>

                        <p>My journey took an exciting turn when I had the opportunity to move to Portugal.
                            There, I've worked with Dark Cloud Company as a game developer, applying my skills
                                to create immersive gaming experiences. My time at Dark Cloud was incredibly 
                                enriching, allowing me to hone my expertise in Unity, 2D/3D game design, UI,
                                AR, and multiplayer development.
                        </p>                
                    </div>            
                </div>
            
      
                {/* Math and Programming */}
              <div className={education.content}>
                  <div className={education.textArea}>
                        <div className={education.headerLogo} style={{ top: positions[1].top, left: positions[1].left }}>
                            {<img src={blurPoint} alt="Logo" />}
                        </div>
                        <h2>Federal University of Sergipe</h2>
                        <h4 style={{ fontWeight: 'bold', color: 'white' }}>Mathematics Bachelor Degree | 2014 - 2018</h4>
                        <p>After those 2 years realized my true passion lay elsewhere.
                            Taking a leap of faith, I switched to a mathematics bachelor's. Those were the most 
                            amazing 4 years of math life between friends and math theories.
                            It was during this time that I discovered my
                            love for programming.  
                        </p>   
                        <h4 style={{ fontWeight: 'bold', color: 'white' }}>Software Engineer Bachelor Degree | 2018 - 2022</h4>
                        <p>Enchanted by the world of coding, I decided to pivot once more,
                            this time to Software Engineering at the same university. 
                            I immersed myself in this course for 4 years, laying a solid 
                            foundation in programming principles and practices. 
                        </p>                
                  </div>

                  <div className={education.imagesContainer}>
                    <div className={education.image}>
                        {<img src={ufs2} alt="Logo" />}
                    </div>
                    <div className={education.image}>
                        {<img src={ufs3} alt="Logo" />}
                    </div>
                  </div>

              </div>

             
              {/* Biology */}
              <div className={education.content}>
                  <div className={education.image}>
                      {<img src={ufs} alt="Logo" />}
                  </div>
                  <div className={education.textArea}>
                  <div className={education.headerLogo} style={{ top: positions[2].top, right: positions[2].right }}>
                    {<img src={blurPoint} alt="Logo" />}
                  </div>
                      <h2>Southwest Bahia State University</h2>
                      <h4 style={{ fontWeight: 'bold', color: 'white' }}>Biology Degree | 2008 - 2010</h4>
                      <p>During my 2 years of study, I gained a profound understanding of cells,
                         proteins, sugars, and viruses. This knowledge continues to inform my dietary 
                         choices and overall approach to maintaining a healthy lifestyle. 
                      </p>
                  </div>
              </div>
      
              <div className={globalStyles.dotNLine}>
                <DotsComponent />
                <LineComponent 
                          orientation="horizontal" 
                          width="30%" 
                          height="2px" 
                          color="#fff" 
                          top="300%" 
                          left="70%"
                      />
             </div>
        </div>
          
        );
};

export default Education;