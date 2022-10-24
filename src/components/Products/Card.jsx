import styles from './styles.module.scss'

export default function Card({ id, image, name, price, parceling }) {

    const newPrice = new Intl.NumberFormat('pt-BR', {
        style: 'currency',
        currency: 'BRL',
     }).format(price)

     const newParceling = new Intl.NumberFormat('pt-BR', {
        style: 'currency',
        currency: 'BRL',
     }).format(parceling[1])

    return (
        <div key={id} className={styles.content_item}>
            <img src={image} alt="Body Leopardo" className={styles.item_image} />
            <span className={styles.name_product}>{name}</span>
            <span className={styles.price}>{newPrice}</span>
            <span className={styles.in_up_to}>até {parceling[0]}x de {newParceling}</span>
            <div className={styles.button_buy}>
                <button>COMPRAR</button>
            </div>
        </div>
    )
}
