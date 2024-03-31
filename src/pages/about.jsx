import '../assets/styles/about.css';
import { frontEnd, backEnd, versionControl } from '../constants';
import { useState } from 'react';

function About() {
  const [isFrontend, setIsFrontend] = useState(true);
  const [isBackend, setIsBackend] = useState(false);
  const [isVersionControl, setIsVersionControl] = useState(false);

  const handleFrontendClick = () => {
    setIsFrontend(true);
    setIsBackend(false);
    setIsVersionControl(false);
  };

  const handleBackendClick = () => {
    setIsFrontend(false);
    setIsBackend(true);
    setIsVersionControl(false);
  };

  const handleVersionControlClick = () => {
    setIsFrontend(false);
    setIsBackend(false);
    setIsVersionControl(true);
  };

  return (
    <div id='about' className='flex flex-wrap'>
      <div className='about flex flex-col flex-1 justifyCenter'>
        <h2 className='fadeInRight'> About Me</h2>
        <p className='about-paragraph'>
          Hi, Im Kevin, and I specialize in crafting reliable websites with exceptional user experiences. Im driven
          by a passion for learning and a constant pursuit of growth within this ever-evolving field. What distinguishes
          me is my proactive approach towards challenges and my knack for swiftly adapting to emerging technologies. I
          thrive in collaborative settings, where I can both share my expertise and absorb knowledge from my peers. I
          firmly believe that versatility, coupled with a relentless pursuit of excellence, is key to delivering
          impactful solutions that meet and exceed client expectations. Lets embark on a journey together, transforming
          ideas into digital realities. continuous learning is the key to staying ahead in the rapidly evolving world of
          web development.
        </p>
      </div>
      <div className='technologies flex flex-col text-center flex-1 justifyCenter'>
        <h2>Languages and Technologies</h2>
        <div className='flex stack justifyCenter'>
          <button onClick={handleFrontendClick}>Front End</button>
          <button onClick={handleBackendClick}>Back End</button>
          <button onClick={handleVersionControlClick}>Version Control</button>
        </div>
        <div className='tech-list justifyCenter'>
        <ul className='grid text-center grid-col'>
          {isFrontend &&
            frontEnd.map((item, index) => {
              return <li key={index}>{item.title}</li>;
            })}
          {isBackend &&
            backEnd.map((item, index) => {
              return <li key={index}>{item.title}</li>;
            })}
          {isVersionControl &&
            versionControl.map((item, index) => {
              return <li key={index}>{item.title}</li>;
            })}
        </ul>
        </div>
      </div>
    </div>
  );
}

export default About;
