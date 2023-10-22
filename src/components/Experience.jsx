import React from 'react'
import styles from "../styles";
import { experiences } from '../constants';
import ExperienceCard from './ExperienceCard';

import { VerticalTimeline }  from 'react-vertical-timeline-component';
import 'react-vertical-timeline-component/style.min.css';

const Experience = () => {
  return (
    <section id="experience"
    className={`${styles.paddingY} ${styles.flexCenter} flex-col relative`}>
      <div className="absolute z-[0] w-[60%] h-[50%] -right-[55%] rounded-full blue__gradient bottom-[60%] opacity-55" />
      <div className='absolute z-[0] w-[60%] h-[40%] -left-[65%] rounded-full bottom-[20%] pink__gradient opacity-30' />
      <div className="absolute z-[0] w-[60%] h-[35%] -right-[55%] rounded-full blue__gradient bottom-[0%] opacity-55" />


      <div className='w-full flex justify-between items-center md:flex-row flex-col sm:mb-16 mb-6 relative z-[1]'>
        <h1 className={`p-6 ${styles.heading2}`}>Experience</h1>
      </div>

      <div className='mt-15 flex flex-col'>
          <VerticalTimeline>
            {experiences.map((experience, index) => (
              <ExperienceCard 
                key={`experience-${index}`}
                experience={experience}
                />
            ))}
          </VerticalTimeline>
        </div>

    </section>
  )
}

export default Experience