import FeedBackCard from "./FeedBackCard";
import { feedback } from "../Constants";
import { styles } from "../Style";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const Clients = () => {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 1,
    responsive: [
      {
        breakpoint: 470,
        settings: {
          slidesToShow: 1,
        },
      },
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 2,
        },
      },
    ],
  };

  return (
    <section
      id="clients"
      className={`${styles.paddingY} ${styles.flexCenter} flex-col relative`}
    >
      <div className="absolute z-[0] w-[50%] h-[50%] -right-[50%] rounded-full blue__gradient" />

      <div className="w-full flex justify-between items-center md:flex-row flex-col sm:mb-16 mb-6 relative z-[1]">
        <h1 className={styles.heading2}>
          O que as pessoas <br className="sm:block hidden" /> estão dizendo
          sobre nós
        </h1>
        <div className="w-full md:mt-0 mt-6">
          <p className={`${styles.paragraph} text-left max-w-[450px]`}>
            Tudo o que você precisa para aceitar pagamentos com cartão e
            expandir seus negócios em qualquer lugar do planeta.
          </p>
        </div>
      </div>
      <div className="w-full feedback-container relative z-[1]">
        <Slider {...settings}>
          {feedback.map((assessment) => (
            <FeedBackCard key={assessment.id} {...assessment} />
          ))}
        </Slider>
      </div>
    </section>
  );
};

export default Clients;
