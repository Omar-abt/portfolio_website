import styles from "../styles";
import { computerScreen } from "../assets";
import { socials } from "../constants";

const Hero = () => {
  return (
    <section id="about" className={`flex md:flex-row flex-col ${styles.paddingY}`}>
      <div className={`flex-1 ${styles.flexStart} flex-col xl:px-0 sm:px-16 px-6`}>
        {/* <div className='flex flex-row items-center py-[6px] px-4 bg-discount-gradient rounded-[10px] mb-2'>

        </div> */}

        <div className="flex flex-row justify-between items-center w-full">
          <h1 className="px-6 flex-1 font-poppins font-semibold ss:text-[72px] text-[52px] text-gradient ss:leading-[100px] leading-[75px]">Omar Abotahoon</h1>
        </div>

        <h1 className="px-6 font-poppins font-semibold ss:text-[68-px] text-[52px] text-white ss:leading-[100px] leading-[75px] w-full">Header</h1>
        <p className={`px-6 ${styles.paragraph} max-w-[75%] mt-3 text-justify`}>Lorem ipsum dolor sit amet consectetur adipisicing elit. Libero, officiis ducimus maxime fugit illum corrupti consequatur doloremque necessitatibus iure hic officia in, rerum amet explicabo soluta repellat voluptate, minus quam!</p>

        {/* <img src={socials[2].icon} alt="email" /> */}
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

      <div className={`flex-1 flex justify-end md:my-0 my-10 relative`}>
        <img src={computerScreen} alt="" className="w-[80vh] h-[80vh] relative z-[5]" />

        <div className="absolute z-[0] w-[40%] h-[35%] top-5 right-[50%] pink__gradient opacity-50" />
        <div className="absolute z-[1] w-[80%] h-[80%] right-[5%] top-20 rounded-full white__gradient bottom-40 opacity-50" />
        <div className="absolute z-[0] w-[50%] h-[50%] right-[20%] bottom-20 blue__gradient opacity-50" />
      </div>

    </section>
  );
};

export default Hero