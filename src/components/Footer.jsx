import React from 'react';
import styles from "../styles";
import { socials } from "../constants";
import { navLinks } from "../constants";
import { copyright } from "../assets";

const Footer = () => {
  return (
    <section id="footer"
    className='flex-col sm:pb-16 pb-6 relative p-6 '>

        {/* <div className="absolute w-[60%] h-[70%] -bottom-[25%] right-[15%] rounded-full blue__gradient opacity-90" /> */}

        <hr className='my-8 mx-[auto]'/>

        <div className="flex px-5 pt-8 justify-center mt-16">
          {socials.map((social) => (
            <div className="flex flex-col px-3 footer-opacity" key={social.id}>
              <a href={social.link} target="_blank">
                <img src={social.icon} alt={social.name} className="w-[3.8vh] h-[3.5vh]"/>
              </a>
            </div>
          ))}
        </div>


      <ul className='list-none sm:flex hidden justify-center items-center flex-1 mt-8 pl-10'>
        {navLinks.map((nav) => (
          <li key={nav.id} className={`font-poppins font-normal footer-opacity cursor-pointer text-[20px] mx-8 text-white`}>
            <a href={`#${nav.id}`}>
              {nav.title}
            </a>
          </li>
        ))}
      </ul>

      <div className="flex flex-row px-5 pt-8 justify-center items-center opacity-85">
        <p className='text-white font-poppins text-[16px] font-light pr-2'>Copyright</p>
        <img src={copyright} className="w-[2vh] h-[2vh]"/>
        <p className='text-white font-poppins text-[16px] font-light pl-2'>2023 
          <span className="text-gradient"> Omar Abotahoon</span>
        . All Rights Reserved</p>
      </div>

    </section>
  )
}

export default Footer