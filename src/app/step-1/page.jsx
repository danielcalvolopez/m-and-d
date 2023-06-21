import Card from "@/components/card/Card";
import classes from "./step-1.module.css";
import { HiArrowLongRight } from "react-icons/hi2";
import { SlLocationPin } from "react-icons/sl";
import Image from "next/image";

const Step1 = () => {
  return (
    <div className={classes["location-container"]}>
      <Image
        src="/puerta-finca.jpg"
        alt=""
        width={1500}
        height={1500}
        priority
      />
      <span className={classes.backdrop}>
        <Card title="Donde y cuando">
          <div className={classes.information}>
            <h1>28/10/2023</h1>
            <h1>18:00</h1>
            <h1>
              Finca <span className={classes.forca}>Forca</span>
            </h1>
            <h1>Cartagena, Murcia</h1>
          </div>
          <SlLocationPin className={classes.location} size={70} />
        </Card>
      </span>
      <div className={classes.arrow}>
        <HiArrowLongRight className={classes["arrow-icon"]} size={90} />
      </div>
    </div>
  );
};

export default Step1;
