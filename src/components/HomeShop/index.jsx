import React from 'react'
import DesktopShop from './DesktopShop'
import MobileShop from './MobileShop'

export default function HomeShop({ width }) {

    return (
        <>
            {width > 1024
                ?
                    <DesktopShop />
                :
                    <MobileShop />
            }
        </>
    )
}


