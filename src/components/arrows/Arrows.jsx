import classes from "./arrows.module.css";
import { HiArrowLongRight, HiArrowLongLeft } from "react-icons/hi2";
import { BsArrowRight, BsArrowLeft } from "react-icons/bs";

const Arrows = ({ left, right, dark, light }) => {
  return (
    <div
      className={`${classes.arrow} ${left && classes["arrow-left"]} ${
        right && classes["arrow-right"]
      } ${left && right && classes.both}`}
    >
      {left && (
        <div className={classes["arrow-icon-left"]}>
          <BsArrowLeft
            className={`${dark && classes.dark} ${light && classes.light}`}
            size={60}
          />
        </div>
      )}

      {right && (
        <div className={classes["arrow-icon-right"]}>
          <BsArrowRight
            className={`${dark && classes.dark} ${light && classes.light}`}
            size={60}
          />
        </div>
      )}
    </div>
  );
};

export default Arrows;
