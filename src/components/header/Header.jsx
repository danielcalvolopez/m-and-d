"use client";
import Image from "next/image";
import classes from "./header.module.css";
import logo from "../../../public/m&d-logo.png";
import Dropdown from "../dropdown/Dropdown";

const Header = () => {
  const selectItems = {
    item1: "Español",
    item2: "English",
  };
  return (
    <div className={classes.header}>
      <Image src={logo} width={50} alt="" />
      <Dropdown items={selectItems} selectedItem="Español" />
    </div>
  );
};

export default Header;
