import { styles } from "../Style";
import { arrowUp } from "../assets";

const GetStarted = () => {
  return (
    <div
      className={`${styles.flexCenter} w-[140px] h-[140px] rounded-full bg-blue-gradient p-[2px] cursor-pointer`}
    >
      <div
        className={`${styles.flexCenter} flex-col bg-primary w-[100%] h-[100%] rounded-full`}
      >
        <div className={`${styles.flexStart} flex-row`}>
          <p className="font-poppins font-medium text-[24px] leading-[23px]">
            <span className="text-gradient">Iniciar</span>
            <img
              src={arrowUp}
              alt="Seta"
              className="w-[30px] h-[30px] object-contain ml-5 mt-2"
            />
          </p>
        </div>
      </div>
    </div>
  );
};

export default GetStarted;
