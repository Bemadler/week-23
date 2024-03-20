import React from 'react';
import styles from './BlockOne.module.css';

function BlockOne() {
  return (
    <div className={styles.BlockOne}>
      <div className={styles.name}>
        <p>Безлимитный 300</p>
      </div>
      <div className={styles.cost}>
        <p className={styles.currency}>руб</p>
        <p className={styles.amount}>300</p>
        <p className={styles.month}>/мес</p>
      </div>
      <div className={styles.speed}>
        <p>до 10 Мбит/сек</p>
      </div>
      <div className={styles.information}>
        <p>Объем включенного трафика не ограничен</p>
      </div>
    </div>
  );
}

export default BlockOne;
