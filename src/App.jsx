import { styles } from "./Style";
import {
  NavBar,
  Home,
  Stats,
  Business,
  Billing,
  CardDeal,
  Clients,
  Companies,
  Cta,
  Footer,
} from "./Components/Index";

const App = () => (
  <div className="bg-primary w-full overflow-hidden">
    <div className={`${styles.paddingX} ${styles.flexCenter}`}>
      <div className={`${styles.boxWidth}`}>
        <NavBar />
      </div>
    </div>

    <div className={`bg-primary ${styles.flexStart}`}>
      <div className={`${styles.boxWidth}`}>
        <Home />
      </div>
    </div>

    <div className={`bg-primary ${styles.paddingX} ${styles.flexStart}`}>
      <div className={`${styles.boxWidth}`}>
        <Stats />
        <Business />
        <Billing />
        <CardDeal />
        <Clients />
        <Companies />
        <Cta />
        <Footer />
      </div>
    </div>
  </div>
);

export default App;
