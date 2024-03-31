import React, { useEffect } from "react";
import styles from "./ScrollToForm.module.css";

const ScrollToForm = ({ selectedTariff, onClose }) => {
  useEffect(() => {
    window.scrollTo({
      top: document.documentElement.scrollHeight,
      behavior: "smooth",
    });
  }, []);

  return (
    <div className={styles.ScrollFormInput}>
      <h2>Форма заявки</h2>
      <p>Выбранный тариф: {selectedTariff}</p>
      <input type="text" placeholder="Введите имя" />
      <input type="text" placeholder="Введите фамилию" />
      <input type="email" placeholder="Введите email" />
      <button>Отправить заявку</button>
      <div className={styles.BackButton}>
      <button onClick={onClose}>Назад</button> {}
      </div>
      
    </div>
  );
};

export default ScrollToForm;
