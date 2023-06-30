"use client";
import Image from "next/image";
import { useRef } from "react";
import classes from "./form-submit.module.css";

const FormSubmit = () => {
  const nameRef = useRef();
  const companionRef = useRef();
  const kidsRef = useRef();

  console.log(
    nameRef?.current?.value,
    companionRef?.current?.value,
    kidsRef?.current?.value
  );

  const handleSubmit = (event) => {
    event.preventDefault();
  };

  return (
    <div className={classes["form-container"]}>
      <Image src="/palm-tree.jpg" alt="" width={1500} height={1500} priority />
      <span className={classes.backdrop}>
        <div className={classes.form}>
          <h1>por favor, ¡responde pronto!</h1>
          <form onSubmit={handleSubmit}>
            <input
              ref={nameRef}
              placeholder="Nombre del invitado/a"
              type="text"
              required
            />
            <select
              defaultValue=""
              name="total-number"
              id="total"
              required
              ref={companionRef}
            >
              <option
                className={classes["option-placeholder"]}
                value=""
                disabled
                hidden
              >
                Nº total de acompañantes
              </option>
              <option value="0">0</option>
              <option value="1">1</option>
              <option value="2">2</option>
              <option value="3">3</option>
              <option value="4">4</option>
              <option value="5">5</option>
            </select>
            <select
              defaultValue=""
              ref={kidsRef}
              name="total-kids"
              id="kids"
              required
            >
              <option
                className={classes["option-placeholder"]}
                value=""
                disabled
                hidden
              >
                De los cuales niños/as
              </option>
              <option value="0">0</option>
              <option value="1">1</option>
              <option value="2">2</option>
              <option value="3">3</option>
              <option value="4">4</option>
              <option value="5">5</option>
            </select>
            <button type="submit">Responder</button>
          </form>
        </div>
      </span>
    </div>
  );
};

export default FormSubmit;
