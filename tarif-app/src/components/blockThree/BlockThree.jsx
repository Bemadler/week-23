import React from 'react';
import styles from './BlockThree.module.css';

function BlockThree() {
    return(
        <div className={styles.BlockThree}>
          <div className={styles.name}>
            <p>Безлимитный 550</p>
          </div>
          <div className={styles.cost}>
          <p className={styles.currency}>руб</p>
          <p className={styles.amount}>550</p>
          <p className={styles.month}>/мес</p>
          </div>
          <div className={styles.speed}>
            <p>до 100 Мбит/сек</p>
          </div>
          <div className={styles.information}>
            <p>Объем включенного трафика не ограничен</p>
          </div>
        </div>
    );
}

export default BlockThree;