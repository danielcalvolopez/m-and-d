import Card from "@/components/card/Card";
import classes from "./step-2.module.css";
import { HiArrowLongRight, HiArrowLongLeft } from "react-icons/hi2";

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
      {/* <div className={classes.arrows}>
        <HiArrowLongLeft
          className={`${classes["arrow-icon"]} ${classes.left}`}
          size={90}
        />
        <HiArrowLongRight
          className={`${classes["arrow-icon"]} ${classes.right}`}
          size={90}
        />
      </div> */}
    </div>
  );
};

export default Step2;
