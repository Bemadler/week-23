import React from 'react';
import styles from './BlockTwo.module.css';

function BlockTwo() {
  return (
    <div className={styles.BlockTwo}>
      <div className={styles.name}>
        <p>Безлимитный 450</p>
      </div>
      <div className={styles.cost}>
        <p className={styles.currency}>руб</p>
        <p className={styles.amount}>450</p>
        <p className={styles.month}>/мес</p>
      </div>
      <div className={styles.speed}>
        <p>до 50 Мбит/сек</p>
      </div>
      <div className={styles.information}>
        <p>Объем включенного трафика не ограничен</p>
      </div>
    </div>
  );
}

export default BlockTwo;
