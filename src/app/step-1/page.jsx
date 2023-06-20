import Card from "@/components/card/Card";
import classes from "./step-1.module.css";
import { HiArrowLongRight } from "react-icons/hi2";

const Step1 = () => {
  return (
    <div className={classes["location-container"]}>
      <span className={classes.backdrop}>
        <Card />
      </span>
      <div className={classes.arrow}>
        <HiArrowLongRight className={classes["arrow-icon"]} size={90} />
      </div>
    </div>
  );
};

export default Step1;
