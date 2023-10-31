import styles from "../styles";
import { resume } from "../assets";

const ResumeButton = () => { 
    return (
        <div className="md:absolute z-[3] mt-[20%] md:mt-0 md:mr-[15%] md:mb-[15%] hover:drop-shadow-xl">
            <a href={resume} download>
            <div className={`${styles.flexCenter} w-[150px] h-[150px] rounded-full bg-blue-gradient cursor-pointer transition-transform hover:scale-110 hover:shadow-lg`}
                  >
                <p className="font-poppins text-center text-[18px] text-white font-medium drop-shadow-lg">
                Click Here <br /> For Resume
                </p>
            </div>
            </a>
        </div>
    );
};

export default ResumeButton;