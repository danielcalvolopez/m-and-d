import Image from "next/image";
import classes from "./form-submit.module.css";

const FormSubmit = () => {
  return (
    <div className={classes["form-container"]}>
      <Image src="/palm-tree.jpg" alt="" width={1500} height={1500} priority />
      <span className={classes.backdrop}>
        <div className={classes.form}>
          <h1>por favor, ¡responde pronto!</h1>
          <form>
            <input placeholder="Nombre del invitado/a" type="text" />
            <select name="total-number" id="total" required>
              <option
                className={classes["option-placeholder"]}
                value=""
                disabled
                selected
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
            <select name="total-kids" id="kids" required>
              <option
                className={classes["option-placeholder"]}
                value=""
                disabled
                selected
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
