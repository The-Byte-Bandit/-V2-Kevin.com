import React from 'react';
import { projectDetails } from '../constants/index.js';
import Card from '../components/project_card';

function Projects() {
  // You can place the console.log() statement outside the JSX expression
  console.log(projectDetails);

  return (
    <div id='projects'>
      {projectDetails.map((item, index) => (
        <Card
          key={index}
          name={item.name}
          image={item.image}
          description={item.description}
        />
      ))}
    </div>
  );
}

export default Projects;
