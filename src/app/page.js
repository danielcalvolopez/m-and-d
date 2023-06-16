import Header from "@/components/header/Header";
import Image from "next/image";
import classes from "./page.module.css";
import mdText from "../../public/marta&daniel.svg";

const Home = () => {
  return (
    <div className={classes.home}>
      <div className={classes["home-body"]}>
        <Header />
        <Image className={classes.text} src={mdText} width={400} />
        <div className={classes.circle}>
          <p>Entrar</p>
        </div>
      </div>
    </div>
  );
};

export default Home;
