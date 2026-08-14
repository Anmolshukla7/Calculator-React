import { useState } from "react";
import Display from "./components/Display";
import ButtonsContainer from "./components/Buttonscontainer";
import styles from "./App.module.css";

function App() {
  const [display, setDisplay] = useState("");

  const handleButtonClick = (value) => {
    if (value === "C") {
      setDisplay("");
    } 
    else if (value === "=") {
      try {
        setDisplay(eval(display).toString());
      } catch {
        setDisplay("Error");
      }
    } 
    else {
      setDisplay(display + value);
    }
  };

  return (
    <div className={styles.calculator}>
      <Display display={display} />
      <ButtonsContainer onButtonClick={handleButtonClick} />
    </div>
  );
}

export default App;