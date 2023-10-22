import React from 'react';
import styles from '../styles';
import ProjectCard from './ProjectCard';
import { projects } from "../constants"

const Projects = () => {
  return (
    <section id="projects"
    className={`${styles.paddingY} flex-col relative`}>
      <div className="absolute z-[0] w-[60%] h-[40%] -left-[64%] rounded-full blue__gradient bottom-[65%] opacity-53" />
      <div className='absolute z-[0] w-[55%] h-[30%] -right-[55%] rounded-full bottom-[40%] pink__gradient opacity-30' />
      <div className="absolute z-[0] w-[60%] h-[40%] -left-[64%] rounded-full blue__gradient bottom-[20%] opacity-53" />
      <div className='absolute z-[0] w-[55%] h-[30%] -right-[55%] rounded-full bottom-[-5%] pink__gradient opacity-30' />

      <div className='w-full flex justify-between items-center md:flex-row flex-col sm:mb-16 mb-6 relative z-[1]'>
        <h1 className={`p-6 ${styles.heading2}`}>Projects</h1>
      </div>

      {projects.map((project) => (        
        <ProjectCard 
        key={project.id}
        project={project} />
      ))}

    </section>
  )
}

export default Projects