import {useContext} from "react";
import {ProductContext} from "../../../../contextAPI/context.js"

export const ProductInfo = () => {
    const productData = useContext(ProductContext)
    const {name, variety, price, country} = productData

    return (
        <div>
            <h3>Данные о продукте:</h3>
            <div>Название: {name}</div>
            <div>Сорт: {variety}</div>
            <div>Цена: {price}</div>
            <div>Страна: {country}</div>
        </div>
    )
}