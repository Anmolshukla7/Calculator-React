import styles from "./Display.module.css";

function Display({ display }) {
  return (
    <input
      className={styles.display}
      value={display}
      readOnly
    />
  );
}

export default Display;