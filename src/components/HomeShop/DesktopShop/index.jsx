import React from 'react'
import AsideLeft from './AsideLeft'
import AsideRight from './AsideRight'
import styles from './styles.module.scss'
import Products from '../../Products'

export default function DesktopShop() {
    return (
        <div className={styles.content}>
            <AsideLeft />
            <Products />
            <AsideRight />
        </div>
    )
}
