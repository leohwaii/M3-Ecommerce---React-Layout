import React from 'react'
import MobileSection from './MobileSection'
import styles from './styles.module.scss'
import Products from '../../Products'

export default function MobileShop() {
    return (
        <>
            <MobileSection />
            <div className={styles.content}>
                <Products />
            </div>
        </>
    )
}
