import React from 'react'
import styles from './styles.module.scss'

export default function AsideRight() {
  return (
    <section className={styles.content_orderby}>
      <select onChange={() => { }}>
        <option value="" hidden>Ordernar por:</option>
        <option value="mais_recente">Mais recentes</option>
        <option value="menor_preco">Menor preço</option>
        <option value="maior_preco">Maior preço</option>
      </select>
    </section>
  )
}
