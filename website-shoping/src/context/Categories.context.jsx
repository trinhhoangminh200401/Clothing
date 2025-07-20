import { createContext, useEffect, useState } from "react";
import SHOP_DATA from "../data/shop-data";
import { addCollectionAndDocument,getCollectionCategories } from "../utils/firebase";
export const CategoriesContext  = createContext({
    categories:{},

})
export const CategoriessProvider = ({children})=>{
    const [categories,setCategories] = useState({})
    useEffect(()=>{
     const getDataCollectionCategory = async()=>{
        const categoryItem= await getCollectionCategories()
        setCategories(categoryItem)

     }
     getDataCollectionCategory()

    }, [])


    const value = { categories }

    return (
        <CategoriesContext.Provider value={value}>{children}</CategoriesContext.Provider>
    )
}