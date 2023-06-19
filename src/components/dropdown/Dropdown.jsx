import { useState } from "react";
import classes from "./dropdown.module.css";
import { IoIosArrowDown, IoIosCheckmark } from "react-icons/io";
import { v4 as uuidv4 } from "uuid";

const Dropdown = ({ selectedItem, items }) => {
  const [toggle, setToggle] = useState(false);

  const handleToggle = () => {
    setToggle((prev) => !prev);
  };

  return (
    <div className={classes.select}>
      <div onClick={handleToggle} className={classes["drop-btn"]}>
        <span>{selectedItem}</span>
        <IoIosArrowDown />
      </div>
      {toggle && (
        <>
          <span className={classes.backdrop} onClick={handleToggle} />
          <ul className={classes.dropdown}>
            {Object.values(items).map((item) => (
              <li key={uuidv4()}>
                <span>
                  <IoIosCheckmark size={25} />
                </span>
                <p>{item}</p>
              </li>
            ))}
          </ul>
        </>
      )}
    </div>
  );
};

export default Dropdown;
