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
        <BsArrowLeft
          className={`${classes["arrow-icon-left"]} ${dark && classes.dark} ${
            light && classes.light
          }`}
          size={60}
        />
      )}

      {right && (
        <BsArrowRight
          className={`${classes["arrow-icon-right"]} ${dark && classes.dark} ${
            light && classes.light
          }`}
          size={60}
        />
      )}
    </div>
  );
};

export default Arrows;
