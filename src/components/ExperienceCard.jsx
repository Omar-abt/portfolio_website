import React from 'react'

import { VerticalTimelineElement }  from 'react-vertical-timeline-component';
import 'react-vertical-timeline-component/style.min.css';

const ExperienceCard = ( {experience} ) => {

  function hexToRGBA(hex, opacity) {
    hex = hex.replace(/^#/, '');
    const r = parseInt(hex.slice(0, 2), 16);
    const g = parseInt(hex.slice(2, 4), 16);
    const b = parseInt(hex.slice(4, 6), 16);
  
    return `rgba(${r}, ${g}, ${b}, ${opacity})`;
  }


  return (
    <VerticalTimelineElement
      contentStyle={{
        background: hexToRGBA("#51cde0", 0.6),
        color: "#fff",
      }}
      contentArrowStyle={{ borderRight: "7px solid  #232631" }}
      date={experience.date}
      iconStyle={{ background: experience.iconBg }}
      icon={
        <div className='flex justify-center items-center w-full h-full'>
          <img
            src={experience.icon}
            alt={experience.company_name}
            className='w-[80%] h-[80%] object-contain'
          />
        </div>
      }
    >
      <div>
        <h3 className='font-poppins text-white text-[24px] font-bold'>{experience.title}</h3>
        <p
          className='font-poppins text-secondary text-[16px] font-semibold'
          style={{ margin: 0 }}
        >
          {experience.company_name}
        </p>
      </div>

      <ul className='mt-5 list-disc ml-5 space-y-2'>
        {experience.points.map((point, index) => (
          <li
            key={`experience-point-${index}`}
            className='text-white-100 text-[14px] pl-1 tracking-wider'
          >
            {point}
          </li>
        ))}
      </ul>
    </VerticalTimelineElement>
  )
}

export default ExperienceCard