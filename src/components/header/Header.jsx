import Image from "next/image";
import classes from "./header.module.css";
import logo from "../../../public/m&d-logo.png";
import { IoIosArrowDown } from "react-icons/io";

const Header = () => {
  return (
    <div className={classes.header}>
      <Image src={logo} width={50} />
      <div className={classes.language}>
        <span>Español</span>
        <IoIosArrowDown />
      </div>
    </div>
  );
};

export default Header;
