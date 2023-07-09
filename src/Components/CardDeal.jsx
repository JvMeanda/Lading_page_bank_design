import { card } from "../assets";
import { styles } from "../Style";
import { layout } from "../Layout";
import Button from "./Button";

const CardDeal = () => (
  <section className={layout.section}>
    <div className={layout.sectionInfo}>
      <h2 className={styles.heading2}>
        Encontre a melhor oferta <br className="sm:block hidden" /> de cartão em
        poucas etapas.
      </h2>
      <p className={`${styles.paragraph} max-w-[470px] mt-5`}>
        Com um processo simples e intuitivo, você poderá comparar diferentes
        opções de cartões, analisar suas características e benefícios, e
        escolher aquele que mais se adeque às suas necessidades.{" "}
      </p>
      <Button styles="mt-10" />
    </div>

    <div className={layout.sectionImg}>
      <img src={card} alt="Card" className="w-[100%] h-[100%]" />
    </div>
  </section>
);

export default CardDeal;
