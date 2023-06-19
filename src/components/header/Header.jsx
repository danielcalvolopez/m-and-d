"use client";
import Image from "next/image";
import classes from "./header.module.css";
import logo from "../../../public/m&d-logo.png";
import { IoIosArrowDown, IoIosCheckmark } from "react-icons/io";
import { useState } from "react";

const Header = () => {
  const [toggleLanguage, setToggleLanguage] = useState(false);

  const handleToggleLanguage = () => {
    setToggleLanguage((prev) => !prev);
  };

  return (
    <div className={classes.header}>
      <Image src={logo} width={50} />
      <div className={classes.select}>
        <div onClick={handleToggleLanguage} className={classes.language}>
          <span>Español</span>
          <IoIosArrowDown />
        </div>
        {toggleLanguage && (
          <>
            <span className={classes.backdrop} onClick={handleToggleLanguage} />
            <ul className={classes.dropdown}>
              <li>
                <span>
                  <IoIosCheckmark size={25} />
                </span>
                <p>Español</p>
              </li>
              <li>
                <span>
                  <IoIosCheckmark size={25} />
                </span>
                <p>English</p>
              </li>
            </ul>
          </>
        )}
      </div>
    </div>
  );
};

export default Header;
