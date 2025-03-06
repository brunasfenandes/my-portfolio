import javascript from '../../assets/img/javascript.png';
import typescript from '../../assets/logo/typescript.png';
import html from '../../assets/logo/html.png';
import css from '../../assets/logo/css.png';
import reactjs from '../../assets/logo/reactjs.png';
import sass from '../../assets/logo/sass.png';
import tailwind from '../../assets/logo/tailwind.png';
import nodejs from '../../assets/logo/nodejs.png';
import mysql from '../../assets/logo/mysql.png';
import threejs from '../../assets/logo/threejs.svg';
import git from '../../assets/logo/git.png';
import figma from '../../assets/logo/figma.png';
import bootstrap from '../../assets/logo/bootstrap.svg.png';
import nextjs from '../../assets/logo/nextjs.svg';
import materialui from '../../assets/logo/materialui.svg';
import knexjs from '../../assets/logo/knexjs.png';

import './Tech.scss';


export default function Tech() {


  const technologies = [
    {
      name: "HTML 5",
      icon: html,
    },
    {
      name: "CSS 3",
      icon: css,
    },
    {
      name: "JavaScript",
      icon: javascript,
    },
    {
      name: "TypeScript",
      icon: typescript,
    },
    {
      name: "React JS",
      icon: reactjs,
    },
    {
      name: "SASS",
      icon: sass,
    },
    {
      name: "Tailwind CSS",
      icon: tailwind,
    },
    {
      name: "Node JS",
      icon: nodejs,
    },
    {
      name: "MySQL",
      icon: mysql,
    },
    {
      name: "Three JS",
      icon: threejs,
    },
    {
      name: "git",
      icon: git,
    },
    {
      name: "figma",
      icon: figma,
    },
    {
      name: "Bootstrap",
      icon: bootstrap,
    },
    {
      name: "Next.js",
      icon: nextjs,
    },
    {
      name: "Material UI",
      icon: materialui,
    },
    {
      name: "Knex.js",
      icon: knexjs,
    },
  ];

  return (
      <div className='tools-ctn'>
      {technologies.map((technology) => (
        <div className='tools-ctn__wrapper' key={technology.name}>
          <img src={technology.icon} alt={technology.name} className="tools-ctn__logo" />
          <p className="tools-ctn__name">{technology.name}</p>
        </div>
      ))}
    </div>
  )
}