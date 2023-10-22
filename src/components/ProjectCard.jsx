import React from 'react';
import styles from '../styles';

const ProjectCard = ( {project} ) => {
    let projectElement; 

    function handleButtonClick(url) {
        window.open(url, '_blank');
    }

    if (project.position == "left") {
        projectElement = (
            // bg-blue-gradient
            <div className={`${styles.flexCenter} ${styles.marginY} py-10 sm:flex-row flex-col rounded-[10px] box-shadow w-[98%] ml-5 my-8`}>
                <div className="flex flex-row my-4">
                    <div className="flex flex-col place-items-center w-[40%] pt-10">
                        <h3 className='flex flex-col font-poppins text-white text-[36px] pb-3 font-bold text-center mb-5'>{project.title}</h3>
                        <p className='font-poppins text-slate-200 text-[20px] text-center font-normal w-[90%]'>{project.description}</p>
                        <button type="button" className={`py-2.5 px-6 mt-12 font-poppins font-medium text-[18px] text-primary bg-blue-gradient rounded-[8px] outline-none hover:bg-sky-800`}
                            onClick={() => handleButtonClick(project.demo)}>
                            View Project
                        </button>

                        <button type="button" className={`py-2.5 px-6 mt-6 font-poppins font-medium text-[18px] text-primary bg-white hover:bg-gray-200 rounded-[8px] outline-none ${styles}`}
                            onClick={() => handleButtonClick(project.github)}>
                            GitHub
                        </button>
                    </div>
                    
                    <div className="flex flex-col place-items-center w-[60%]">
                        <img src={project.img} className='w-[80%] h-[52vh]' />
                    </div>
                </div>
            </div>            
        );
    }
    else {
        projectElement = (
            <div className={`${styles.flexCenter} ${styles.marginY} py-10 rounded-[10px] box-shadow w-[98%] ml-5 my-8`}>
                <div className="flex sm:flex-col md:flex-row my-4">
                    <div className="flex flex-col place-items-center w-[60%]">
                        <img src={project.img} className='w-[80%] h-[52vh]' />
                    </div>

                    <div className="flex flex-col place-items-center w-[40%] pt-10">
                        <h3 className='flex flex-col font-poppins text-white text-[36px] pb-3 font-bold text-center mb-5'>{project.title}</h3>
                        <p className='font-poppins text-slate-200 text-[20px] text-center font-normal w-[90%]'>{project.description}</p>
                        <button type="button" className={`py-2.5 px-6 mt-12 font-poppins font-medium text-[18px] text-primary bg-blue-gradient hover:bg-sky-800 rounded-[8px] outline-none `}
                            onClick={() => handleButtonClick(project.demo)}>
                            View Project
                        </button>

                        <button type="button" className={`py-2.5 px-6 mt-6 font-poppins font-medium text-[18px] text-primary bg-white hover:bg-gray-200 rounded-[8px] outline-none ${styles}`}
                            onClick={() => handleButtonClick(project.github)}>
                            GitHub
                        </button>
                    </div>
                    
                </div>
            </div>       
        );
    }
    console.log(project.position)
  return (
    projectElement
  )
}

export default ProjectCard