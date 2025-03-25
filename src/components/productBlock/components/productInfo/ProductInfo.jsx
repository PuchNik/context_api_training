import {useContext} from "react";
import {ProductContext} from "../../../../contextAPI/context.js"

export const ProductInfo = () => {
    const {productData, dispatchProduct} = useContext(ProductContext)
    const {name, variety, price, country} = productData

    const onProductUpdate = () => {
        dispatchProduct({type: 'SET_PRODUCT_VARIETY', payload: 'red'})
    }

    return (
        <div>
            <h3>Данные о продукте:</h3>
            <div>Название: {name}</div>
            <div>Сорт: {variety}</div>
            <div>Цена: {price}</div>
            <div>Страна: {country}</div>
            <hr/>

            <button onClick={onProductUpdate}>Обновить данные продукта</button>
        </div>
    )
}