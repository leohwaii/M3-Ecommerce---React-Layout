import React, { useState, useEffect } from 'react'
import { api } from '../../../../services/api.js'
import styles from './styles.module.scss'


export default function AsideLeft() {

    const [productColors, setProductColors] = useState([])
    const [productSize, setProductSize] = useState([])
    const [checkbox, setCheckBox] = useState(false)


    async function getColors(numberOfColors) {
        let response = await api.get("/colors", {
            params: {
                _page: 1,
                _limit: numberOfColors
            }
        })
        setProductColors(response.data)
    }

    function handleClickButton(event) {
        console.log(event)
    }

    async function getSizes() {
        let response = await api.get("/sizes")
        setProductSize(response.data)
        console.log(response)
    }

    useEffect(() => {
        getColors(5);
        getSizes();
    }, [])

    function handleCheckBox() {
        setCheckBox(!checkbox)
    }


    return (
        <section className={styles.content_filters}>
            <h1 className={styles.filters_title}>
                Blusas
            </h1>

            <span className={styles.aside_filters_title_colors}>
                CORES
            </span>

            <div className={styles.content_colors}>
                {productColors.map(color => (
                    <div key={color.name} className={styles.content_square}>
                        <div className="square" />
                        <input type="checkbox" name="" id="" value={checkbox} onChange={handleCheckBox} />
                        <span>{color.name}</span>
                    </div>
                ))}
            </div>

            <p className={styles.more_colors_title} onClick={() => { getColors(10) }}>
                Ver todas as cores
                <img src="/img/arrow-down.svg"></img>
            </p>

            <span className={styles.filter_title_sizes}>
                TAMANHOS
            </span>
            <div className={styles.content_sizes}>
                
                {productSize.map(sizes => (
                    <div key={sizes.size} className={styles.square_sizes} data-id={false} onClick={((e) => handleClickButton(e))}>
                        <button className="sizes-title">{sizes.size}</button>
                    </div>
                ))}
            </div>

            <span className={styles.filter_title_prices}>
                FAIXA DE PREÇO
            </span>

            <div className={styles.content_prices}>
                <div className={styles.content_square}>
                    <div className={styles.square} onClick={() => { }}></div>
                    <span className={styles.square_title}>de R$0 até R$:50</span>
                </div>
                <div className={styles.content_square}>
                    <div className={styles.square} onClick={() => { }}></div>
                    <span className={styles.square_title}>de R$51 até R$:150</span>
                </div>
                <div className={styles.content_square}>
                    <div className={styles.square} onClick={() => { }}></div>
                    <span className={styles.square_title}>de R$151 até R$:300</span>
                </div>
                <div className={styles.content_square}>
                    <div className={styles.square} onClick={() => { }}></div>
                    <span className={styles.square_title}>de R$301 até R$:500</span>
                </div>
                <div className={styles.content_square}>
                    <div className={styles.square} onClick={() => { }}></div>
                    <span className={styles.square_title}>a partir de R$:500</span>
                </div>
            </div>
        </section>
    )
}
