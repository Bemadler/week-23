import React from 'react';
import styles from './BlockFour.module.css';

function BlockFour() {
    return(
        <div className={styles.BlockFour}>
          <div className={styles.name}>
            <p>Безлимитный 1000</p>
          </div>
          <div className={styles.cost}>
          <p className={styles.currency}>руб</p>
          <p className={styles.amount}>1000</p>
          <p className={styles.month}>/мес</p>
          </div>
          <div className={styles.speed}>
            <p>до 200 Мбит/сек</p>
          </div>
          <div className={styles.information}>
            <p>Объем включенного трафика не ограничен</p>
          </div>
        </div>
    );
}

export default BlockFour;