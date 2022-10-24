import React from 'react'
import styles from './styles.module.scss';

export default function Header() {
  return (
    <header className={styles.header}>
      <div className={styles.content}>
        <img src="img/logo-m3.png" alt="Logo" className={styles.logo} />
        
        <div className={styles.cart}>
          <img src="img/svg/shopping-cart.svg" alt="Shopping Cart" />
          <div className="circle">
            <div className={styles.number}>0</div>
          </div>

        </div>
      </div>

    </header>
  )
}

