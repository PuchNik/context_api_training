import './App.css'
import {personData, fruitData, personData2} from './helpers/index.js'
import {Header, ProductBlock, UserBlock} from './components/index.js'
import {ContextProvider} from "./contextAPI/ContextProvider.jsx"
import {useEffect, useState} from "react"

// Получение данных пользователя
const getUserFromServer = (data) => data

// Получение данных продукта
const getProductFromServer = (data) => data

// Получение данных другого пользователя
const getAnotherUserFromServer = (data) => data

const reducer = (state, action) => {
    const {type, payload} = action

    switch (type) {
        case 'SET_USER_DATA': {
            return payload
        }
        case 'SET_PRODUCT_VARIETY': {
            return {
                ...state,
                variety: payload
            }
        }
        default:
        /// nothing
    }
}

function App() {
    const [userData, setUserData] = useState(personData)
    const [productData, setProductData] = useState(fruitData)

    const dispatchUser = (action) => {
        const newStateUser = reducer(userData, action)
        setUserData(newStateUser)
    }

    const dispatchProduct = (action) => {
        const newStateProduct = reducer(productData, action)
        setProductData(newStateProduct)
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
            <ContextProvider userValue={{userData, dispatchUser}} productValue={{productData, dispatchProduct}}>
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
