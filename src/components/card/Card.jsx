import classes from "./card.module.css";
import { SlLocationPin } from "react-icons/sl";

const Card = () => {
  return (
    <div className={classes["card-container"]}>
      <h2 className={classes.title}>Donde y cuando</h2>
      <div className={classes["info-container"]}>
        <div className={classes.information}>
          <h1>28/10/2023</h1>
          <h1>18:00</h1>
          <h1>
            Finca <span className={classes.forca}>Forca</span>
          </h1>
          <h1>Cartagena, Murcia</h1>
        </div>

        <SlLocationPin className={classes.location} size={70} />
      </div>
    </div>
  );
};

export default Card;
