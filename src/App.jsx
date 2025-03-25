import './App.css'
import {personData, fruitData, personData2} from './helpers/index.js'
import {Header, ProductBlock, UserBlock} from './components/index.js'
import {ContextProvider} from "./contextAPI/ContextProvider.jsx";
import {useEffect, useState} from "react";

// Получение данных пользователя
const getUserFromServer = (data) => data

// Получение данных продукта
const getProductFromServer = (data) => data

// Получение данных другого пользователя
const getAnotherUserFromServer = (data) => data


function App() {
    const [userData, setUserData] = useState(personData)
    const [productData, setProductData] = useState(fruitData)

    const dispatch = (action) => {
        const {type, payload} = action

        switch (type) {
            case 'SET_USER_DATA': {
                setUserData(payload)
                break
            }
            case 'SET_PRODUCT_VARIETY': {
                setProductData({
                    ...productData,
                    variety: payload
                    }
                )
                break
            }
            default:
                /// nothing
        }
    }

    useEffect(() => {
        const userDataFromServer = getUserFromServer(personData)
        const productDataFromServer = getProductFromServer(fruitData)

        setUserData(userDataFromServer)
        setProductData(productDataFromServer)
    }, [])

    const onUserChange = () => {
        const anotherUserFromServer = getAnotherUserFromServer(personData2)
        setUserData(anotherUserFromServer)
    }

    return (
        <div>
            <ContextProvider userValue={{userData, dispatch}} productValue={{productData, dispatch}}>
                <Header/>
                <hr/>

                <UserBlock/>
                <ProductBlock/>
                <hr/>

                <button onClick={onUserChange}>Сменить пользователя</button>
            </ContextProvider>
        </div>
    )
}

export default App
