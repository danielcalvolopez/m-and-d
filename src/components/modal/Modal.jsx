import classes from "./modal.module.css";
import { GrClose } from "react-icons/gr";
import { MdOutlineClose } from "react-icons/md";

const Modal = ({ children, setToggleModal }) => {
  const handleToggleModal = () => {
    setToggleModal((prev) => !prev);
  };

  return (
    <div className={classes.backdrop}>
      <div className={classes.modal}>
        <div className={classes["modal-header"]}>
          <MdOutlineClose
            onClick={handleToggleModal}
            className={classes.close}
            size={25}
          />
        </div>
        <div className={classes.content}>{children}</div>
      </div>
    </div>
  );
};

export default Modal;
