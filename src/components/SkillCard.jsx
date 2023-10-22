import React from 'react';
import styles from '../styles';

const SkillCard = (props) => {
  return (

    <div className='flex flex-col rounded-[20px] w-[25%] mx-10 md:mx-12 md:w-[25%] sm:w-[50%] my-8 feedback-card border-solid border-2 border-opacity-70 border-borderColour'>
        <div className='bg-skill-gradient w-[100%] justify-center rounded-t-[17px] py-3'>
            <div className="flex flex-row justify-center align-middle">
                <img src={props.img} alt={name} className="w-[5vh] h-[5vh] rounded-full mr-1 my-auto" />

                <div className="flex flex-col ml-4">
                    <h2 className='font-poppins text-center font-medium text-[3.1vh] text-white xs:leading-[50px] leading-[50px] w-full'>{props.name}</h2>
                </div>
            </div>
        </div>


        <div className='pt-5 pb-3 py-10 text-center'>
            <ul>
                {props.points.map((point) => <li className='font-poppins text-[20px] pl-3 text-white leading-[38px]'>{point}</li>)}
            </ul>
        </div>
    </div>



    // <div className='flex flex-col px-5 py-10 mb-8 rounded-[20px] w-[30%] md:mx-6 sm:mx-2 mr-0 my-3 feedback-card border-solid border-2 border-opacity-60 border-borderColour '>
    //     <div className='bg-red-400 w-[100%]'>
    //         <div className="flex flex-row justify-center">
    //             <img src={props.img} alt={name} className="w-[48px] h-[48px] rounded-full mr-2" />

    //             <div className="flex flex-col ml-4">
    //                 <h2 className='font-poppins text-center font-medium text-[34px] text-white xs:leading-[50px] leading-[50px] w-full pb-10'>{props.name}</h2>
    //             </div>
    //         </div>
    //     </div>


    //     <ul>
    //         {props.points.map((point) => <li className='font-poppins text-[20px] pl-3 text-white leading-[38px]'>{point}</li>)}
    //     </ul>
    // </div>
  )
}

export default SkillCard