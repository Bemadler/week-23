import React, { useState } from "react";
import styles from "./Block.module.css";
import ScrollToForm from "../scrolltoform/ScrollToForm";

const Block = ({ className, text, price, speed }) => {
  const [selected, setSelected] = useState(false);

  const handleBlockClick = () => {
    setSelected(!selected); 
  };

  const handleCloseForm = () => {
    setSelected(false); 
  };

  return (
    <div>
      {selected ? (
        <div className={`${styles.Block} ${styles[className]}`}>
          <ScrollToForm selectedTariff={text} onClose={handleCloseForm} />
        </div>
      ) : (
        <div
          className={`${styles.Block} ${styles[className]}`}
          onClick={handleBlockClick}
        >
          <div className={`${styles.name} ${styles[className]}`}>
            <p>{text}</p>
          </div>
          <div className={`${styles.cost} ${styles[className]}`}>
            <p className={styles.currency}>руб</p>
            <p className={styles.amount}>{price}</p>
            <p className={styles.month}>/мес</p>
          </div>
          <div className={styles.speed}>
            <p>{speed}</p>
          </div>
          <div className={styles.information}>
            <p>Объем включенного трафика не ограничен</p>
          </div>
        </div>
      )}
    </div>
  );
};

export default Block;
