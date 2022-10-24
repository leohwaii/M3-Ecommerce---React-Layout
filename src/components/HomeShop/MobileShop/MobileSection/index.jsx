import React from 'react'
import styles from './styles.module.scss'

export default function MobileSection() {
    return (
        <>
        <section className={styles.content_grouped_filters}>
        <h1 className={styles.filters_title}>
            Blusas
        </h1>
        <div className={styles.content_buttons}>
            <div className={styles.title_button} onclick="Global.showOrderBy()">
                <span className={styles.button}>Filtrar</span>
            </div>
            <div className={styles.title_button} onclick="Global.showFilters()">
                <span className={styles.button}>Ordenar</span>
            </div>
        </div>
       
    </section>
    </>
    )
}
