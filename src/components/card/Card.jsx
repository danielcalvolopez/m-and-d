import classes from "./card.module.css";

const Card = ({ title, children, dark }) => {
  return (
    <div
      className={
        dark ? classes["card-container-dark"] : classes["card-container"]
      }
    >
      <h2 className={classes.title}>{title}</h2>
      <div
        className={
          dark ? classes["info-container-dark"] : classes["info-container"]
        }
      >
        {children}
      </div>
    </div>
  );
};

export default Card;
