import React from 'react';
import about from '../Styles/About.module.scss'
import globalStyles from '../Styles/Global.module.scss';
import me4 from '../assets/Images/me4.jpg'; 
import me001 from '../assets/Images/me001.jpg'; 
import me002 from '../assets/Images/me002.jpg'; 
import me003 from '../assets/Images/me003.jpg'; 
import LineComponent from '../Components/LineComponent';
import DotsComponent from '../Components/DotsComponent';
import blurPoint from '../assets/Images/BlurPoint.png'; 

const positions = [
    { top: '10px', right: '10px' },
    { top: '150%', left: '10px' },
    { top: '230%', right: '0%' },
    { top: '350%', left: '10px' },
];

const About: React.FC = () => 
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
                {<img src={me4} alt="Logo" />}
            </div>
            <div className={about.textArea}>
            <div className={about.headerLogo} style={{ top: positions[0].top, right: positions[0].right }}>
              {<img src={blurPoint} alt="Logo" />}
            </div>
                <h1>Who am I?</h1>
                <p>Hello! I'm a dedicated and passionate game developer from Brazil. 
                    My journey has been shaped by resilience, adaptability, and an
                    unyielding pursuit of knowledge and creativity. 
                </p>
                <h2>Early Life and Education</h2>
                <p>Growing up in a humble family without a father figure, my strong and
                    inspirational mother, despite her lack of formal education, always
                    encouraged me to study and reach for my dreams. Following her advice, 
                    I initially pursued a biology degree at Universidade Estadual do Sudoeste da Bahia.  
                </p>
            </div>
        </div>

        <div className={about.content}>
            <div className={about.textArea}>
            <div className={about.headerLogo} style={{ top: positions[1].top, left: positions[1].left }}>
              {<img src={blurPoint} alt="Logo" />}
            </div>
                <h2>Transition to Programming</h2>
                <p>However, after 2.5 years, I realized my true passion lay elsewhere.
                Taking a leap of faith, I switched to a mathematics bachelor's degree at
                 Universidade Federal de Sergipe, those were the most amazing 4 years of math life between friends and math theories.
                  It was during this time that I discovered my
                  love for programming. Enchanted by the world of coding, I decided to pivot once more,
                   this time to Software Engineering at the same university. 
                   I immersed myself in this course for 2.5 years, laying a solid 
                   foundation in programming principles and practices. 
                </p>                
            </div>
            <div className={about.image}>
                {<img src={me001} alt="Logo" />}
            </div>
        </div>

        <div className={about.content}>
            <div className={about.image}>
                {<img src={me002} alt="Logo" />}
            </div>
            <div className={about.textArea}>
            <div className={about.headerLogo} style={{ top: positions[2].top, right: positions[2].right }}>
              {<img src={blurPoint} alt="Logo" />}
            </div>
                <h2>Career Shift to Game Development</h2>
                <p>My journey took an exciting turn when I had the opportunity to move to Portugal.
                     There, I worked with Dark Cloud Company as a game developer, applying my skills
                      to create immersive gaming experiences. My time at Dark Cloud was incredibly 
                      enriching, allowing me to hone my expertise in Unity, 2D/3D game design, UI,
                       AR, and multiplayer development.
                </p>                
            </div>            
        </div>

        <div className={about.content}>
            <div className={about.textArea}>
            <div className={about.headerLogo} style={{ top: positions[3].top, right: positions[3].right }}>
              {<img src={blurPoint} alt="Logo" />}
            </div>
                <h2>Freelance and Future Aspirations</h2>
                <p>After 1.5 years with Dark Cloud, I transitioned to freelancing, where I continue to develop games, 
                    always adhering to best practices for clean, extensible, and reusable code. My goal is to push 
                    the boundaries of creativity and technology in every project I undertake.
                    I am now actively seeking new opportunities to collaborate with a great company, where I can contribute my 
                    skills and continue to grow as a game developer.
                    Thank you for visiting my page and learning about my journey. Let's create something amazing together!
                </p>                
            </div>
            <div className={about.image}>
                {<img src={me003} alt="Logo" />}
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
       </div>
  </div>
    
  );
};

export default About;
