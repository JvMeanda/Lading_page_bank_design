import { clientCompanies } from "../Constants/Index";
import { styles } from "../Style";

const Companies = () => (
  <section className={`${styles.flexCenter} my-4`}>
    <div className={`${styles.flexCenter} flex-wrap w-full`}>
      {clientCompanies.map((client) => (
        <div
          key={client.id}
          className={`flex-1 ${styles.flexCenter} sm:min-w-[200px] min-w-[120px]`}
        >
          <img
            src={client.logo}
            alt="Empresa"
            className="sm:w-[192px] w-[100px] object-contain"
          />
        </div>
      ))}
    </div>
  </section>
);

export default Companies;
