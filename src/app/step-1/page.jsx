"use client";
import Card from "@/components/card/Card";
import classes from "./step-1.module.css";
import { HiArrowLongRight } from "react-icons/hi2";
import { SlLocationPin } from "react-icons/sl";
import Image from "next/image";
import Modal from "@/components/modal/Modal";
import { useState } from "react";

const Step1 = () => {
  const [toggleMapModal, setToggleMapModal] = useState(false);

  const handleToggleMapModal = () => {
    setToggleMapModal((prev) => !prev);
  };
  return (
    <div className={classes["location-container"]}>
      {toggleMapModal && (
        <Modal toggleModal={toggleMapModal} setToggleModal={setToggleMapModal}>
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3156.231449618622!2d-0.9027079000000001!3d37.7142448!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0xd6314ac39e0bcdf%3A0x6cba70e5862b5e47!2sFinca%20Forca%2C%2030395%2C%20Murcia%2C%20Spain!5e0!3m2!1sen!2suk!4v1687432353493!5m2!1sen!2suk"
            width="600"
            height="450"
            allowfullscreen=""
            loading="lazy"
            referrerpolicy="no-referrer-when-downgrade"
          ></iframe>
        </Modal>
      )}
      <Image
        src="https://images.unsplash.com/photo-1505210183580-5ddbc8523018?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=687&q=80"
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
          <SlLocationPin
            onClick={handleToggleMapModal}
            className={classes.location}
            size={70}
          />
        </Card>
      </span>
      <div className={classes.arrow}>
        <HiArrowLongRight className={classes["arrow-icon"]} size={90} />
      </div>
    </div>
  );
};

export default Step1;
