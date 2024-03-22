import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faDesktop, faServer } from '@fortawesome/free-solid-svg-icons';

const skills = [
  { icon: faDesktop, name: 'React (Frontend)' },
  { icon: faDesktop, name: 'Tailwind CSS (Frontend)' },
  { icon: faServer, name: 'MySQL (Backend)' },
  { icon: faServer, name: 'PHP (Backend)' },
  { icon: faServer, name: 'Express.js (Backend)' },
  { icon: faServer, name: 'MongoDB (Backend)' },
];

function SkillCard() {
  return (
    <div className=" p-4 rounded-lg shadow-md">
      <h2 className="text-lg font-bold mb-2">Programing Skills</h2>
      <ul>
        {skills.map((skill, index) => (
          <li key={index} className="flex items-center mb-2">
            <FontAwesomeIcon icon={skill.icon} className="text-blue-500 mr-2" />
            <span>{skill.name}</span>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default SkillCard;
