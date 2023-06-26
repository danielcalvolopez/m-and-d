import Card from "@/components/card/Card";
import classes from "./step-2.module.css";
import Arrows from "@/components/arrows/Arrows";

const Step2 = () => {
  return (
    <div className={classes.account}>
      <Card dark title="Numero de cuenta">
        <div className={classes.content}>
          <div className={classes.iban}>
            <h2>IBAN</h2>
            <p>GB24 REVO 0099 7083 6607 86</p>
          </div>
          <div className={classes.bic}>
            <h2>BIC</h2>
            <p>REVOGB21</p>
          </div>
        </div>
      </Card>
      <Arrows dark left right />
    </div>
  );
};

export default Step2;
