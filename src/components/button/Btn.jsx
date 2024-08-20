import styles from "./btn.module.css";
import cn from "classnames";

function Btn({ handler, use, text }) {
  return (
    <button className={cn(styles.btn, styles[`btn--${use}`])} onClick={handler}>
      {text}
    </button>
  );
}

export default Btn;
