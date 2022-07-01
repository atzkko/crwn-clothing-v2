import {createContext, useEffect, useState} from 'react'
import SHOP_DATA from '../shop-data.json';

// as the actual value you want to access
export const ProductsContext = createContext({
    products: null,
    setProducts: () => null
})

export const ProductsProvider = ({ children }) => {
    const [products, setProducts] = useState([])
    const value = { products, setProducts }

    useEffect(() => {
        if(!SHOP_DATA.length) return;

        setProducts(SHOP_DATA)
    }, [])


    return <ProductsContext.Provider value={value}>{children}</ProductsContext.Provider>
}