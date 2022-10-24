import React, { useState, useEffect } from 'react'
import Card from './Card'
import { api } from '../../services/api'
import styles from './styles.module.scss'

export default function Products() {

    const [products, setProducts] = useState([])

    async function getProducts() {
        let response = await api.get("/products", {
            params: {
                _page: 1,
                _limit: 9
            }
        })
        setProducts(response.data)
    }


    useEffect(() => {
        getProducts();
    }, [])


    return (
            <section className={styles.content_products}>
                <div className={styles.content_items}>
                    {products.map( product => (
                        <Card 
                            id={product.id}
                            image={product.image}
                            name={product.name}
                            price={product.price}
                            parceling={product.parcelamento}
                        />
                    ))}
                </div>

                <div className={styles.content_loadmore}>
                    <div className={styles.load_more} onClick={() => { }}>
                        <button>
                            CARREGAR MAIS
                        </button>
                    </div>
                </div>
            </section>
            
    )
}
