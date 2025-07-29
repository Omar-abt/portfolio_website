import styles from "../styles";
import { useState, useEffect } from "react";
import { rorbotArm } from "../assets";
import { socials } from "../constants";

import ResumeButton from "./ResumeButton";

const Hero = () => {
  const [screenWidth, setScreenWidth] = useState(window.innerWidth);

  useEffect(() => {
    const handleResize = () => {
      setScreenWidth(window.innerWidth);
    };

    window.addEventListener('resize', handleResize);

    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, []);
  const isSmallScreen = window.matchMedia('(max-width: 768px)').matches;

  return (
    <section id="about" className={`flex md:flex-row flex-col ${styles.paddingY}`}>
      <div className={`flex-1 ${styles.flexStart} flex-col sm:px-16 md:pr-0 px-6`}>

        <div className="flex flex-row justify-between items-center w-full">
          <h1 className="px-6 md:pr-0 pb-1 md:pb-0 flex-1 font-poppins font-semibold text-[32px] md:text-[66px] text-gradient">Omar Abotahoon</h1>
        </div>

        <h1 className="px-6 md:pr-0 font-poppins font-semibold text-[26px] md:text-[46px] text-white md:w-[80%]">Software Developer</h1>
        <p className={`px-6 ${styles.paragraph} max-w-full md:max-w-[75%] mt-3 text-justify`}>I am a highly driven and motivated software developer with over 2.5 years in the industry and a Bachelor of Software Engineering from the University of Ottawa. I love building and automating cloud-native applications, spinning up Docker containers, and orchestrating them with Kubernetes. I’m all about streamlining CI/CD pipelines, embracing infrastructure as code, and collaborating in agile teams to ship reliable, scalable solutions.</p>

        <div className="flex px-5 pt-8">
          {socials.map((social) => (
            <div className="flex flex-col mx-2 footer-opacity" key={social.id}>
              <a href={social.link} target="_blank">
                <img src={social.icon} alt={social.name} className="w-[3.3vh] h-[3vh]"/>
              </a>
            </div>
          ))}
        </div>

      </div>

     <div className={`relative flex xs:justify-start sm:justify-end items-center md:my-0 my-10 px-12 sm:px-0`}>
            <ResumeButton />

            {isSmallScreen ? <></> : <img src={rorbotArm} alt="" className="w-[80vh] h-[80vh] relative z-[2]" />}

            <div className="absolute z-[0] w-[40%] h-[35%] top-5 right-[50%] pink__gradient opacity-50" />
            <div className="absolute z-[1] w-[80%] h-[80%] right-[5%] top-20 rounded-full white__gradient bottom-40 opacity-50" />
            <div className="absolute z-[0] w-[50%] h-[50%] right-[20%] bottom-20 blue__gradient opacity-50" />
      </div>


    </section>
  );
};

export default Hero