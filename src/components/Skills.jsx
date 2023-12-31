import React from 'react';

import styles from "../styles";
import { skills } from "../constants";
import SkillCard from './SkillCard';

const Skills = () => {
  return (
    <section id="skills"
    className={`${styles.paddingTop} ${styles.flexCenter} flex-col relative1`}>
      <div className='absolute z-[0] w-[60%] h-[60%] -left-[50%] rounded-full blue__gradient opacity-75' />

      <div className='w-full flex justify-between items-center md:flex-row flex-col sm:mb-16 mb-6 relative z-[1]'>
        <h1 className={`p-6 ${styles.heading2}`}>Skills</h1>
      </div>

      <div className='flex flex-col sm:justify-center justify-center w-full relative z-[1]'>
        {skills.map((card) =>     
            <SkillCard key={card.id} {...card} />
        )}
      </div>
    </section>
  )
}

export default Skills