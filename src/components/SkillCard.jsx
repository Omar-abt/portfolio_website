import React from 'react';

const SkillCard = (props) => {
  return (
    <div className='mb-[14%] md:mb-[8%]'>
        <h3 className='text-white text-center text-[22px] md:text-[32px] font-semibold mb-5 md:mb-10'>{props.name}</h3>

        <div className='flex flex-wrap flex-row justify-center'>
            {props.skills.map((skill) => {
                return(
                    <div className='flex flex-col items-center justify-centerz px-3 md:px-10 py-3 md:py-0'>
                        <img src={skill.pic} className='w-[30px] h-[30px] md:w-[70px] md:h-[70px] object-fill mb-[7px]' />
                        <p className='text-white mt-2 text-[14px] md:text-[17px] md:font-medium font-poppins'>{skill.name}</p>
                    </div>
                );
            })}
        </div>
    </div>
  )
}

export default SkillCard