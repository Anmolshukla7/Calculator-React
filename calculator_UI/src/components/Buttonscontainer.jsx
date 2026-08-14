import styles from "./Buttons.module.css";

const ButtonsContainer = ({ onButtonClick }) => {

  const buttons = [
    "C", "(", ")", "/",
    "7", "8", "9", "*",
    "4", "5", "6", "-",
    "1", "2", "3", "+",
    "0", ".", "="
  ];

  return (
    <div className={styles.buttonsContainer}>
      {buttons.map((button, index) => (
        <button
          key={index}
          onClick={() => onButtonClick(button)}
        >
          {button}
        </button>
      ))}
    </div>
  );
};

export default ButtonsContainer;










  