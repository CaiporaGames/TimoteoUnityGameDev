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

const positions = 
[
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
                <p>Growing up in a humble family without a father figure, I was deeply inspired by my strong and resilient mother. Despite her lack of formal education, she always encouraged me to pursue my studies and chase my dreams. Her unwavering support and belief in the power of education motivated me to strive for more. By following her advice and dedicating myself to learning, I’ve been able to transform my surroundings and create better opportunities for myself. This journey has not only enriched my life but also shaped me into a person committed to making the most of every chance I get, paving the way for a brighter future.
                </p>
            </div>
        </div>

        <div className={about.content}>
            <div className={about.textArea}>
            <div className={about.headerLogo} style={{ top: positions[1].top, left: positions[1].left }}>
              {<img src={blurPoint} alt="Logo" />}
            </div>
                <h2>College Life</h2>
                <p>College has been an exhilarating journey, a whirlwind of exploration and growth. Immersed in the dynamic mix of math, programming, and vibrant social scenes, I've learned to blend analytical skills with creativity. The late-night coding marathons, collaborative projects, and lively campus parties have all played a role in shaping my journey. These experiences have not only honed my technical skills but also expanded my understanding of human connections and professional development. Through the highs and lows, I’ve come to realize that true excellence comes from embracing both the challenges and the opportunities that come my way. As I continue to grow, I’m excited about the path ahead and the exceptional professional I am becoming.
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
                <h2>Love Game Development</h2>
                <p>My journey took an exciting turn when I had the opportunity to move to Portugal. There, I joined Dark Cloud Company as a game developer, where I applied my skills to create immersive gaming experiences. My time at Dark Cloud was incredibly enriching, allowing me to deepen my expertise in Unity, 2D/3D game design, UI, AR, and multiplayer development. This role not only fueled my passion for games but also showcased how my love for gaming and strong foundation in math and programming make me well-suited for tackling complex challenges. The experience solidified my belief that combining technical skills with creativity can lead to extraordinary outcomes in the world of game development.
                </p>                
            </div>            
        </div>

        <div className={about.content}>
            <div className={about.textArea}>
            <div className={about.headerLogo} style={{ top: positions[3].top, right: positions[3].right }}>
              {<img src={blurPoint} alt="Logo" />}
            </div>
                <h2>Future Aspirations</h2>
                <p>After 1.5 years with Dark Cloud, I transitioned to freelancing, where I continue to develop games with a focus on clean, extensible, and reusable code. My goal is to push the boundaries of creativity and technology in every project I undertake. I am now actively seeking new opportunities to collaborate with a forward-thinking company where I can contribute my skills, grow as a game developer, and learn from a talented team. Thank you for visiting my page and learning about my journey. Let’s create something amazing together!
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
