import './App.css'
import {fruitData, personData, personData2} from './helpers/index.js'
import {Header, UserBlock, ProductBlock} from './components/index.js'
import {ContextProvider} from "./contextAPI/ContextProvider.jsx"
import {useEffect, useReducer} from "react"

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
            return state
    }
}

function App() {
    const [userData, dispatchUser] = useReducer(reducer, personData)
    const [productData, dispatchProduct] = useReducer(reducer, fruitData)

    useEffect(() => {
        const userDataFromServer = getUserFromServer(personData)
        dispatchUser({type: 'SET_USER_DATA', payload: userDataFromServer})

        const productDataFromServer = getProductFromServer(fruitData)
        dispatchProduct({type: 'SET_PRODUCT_VARIETY', payload: productDataFromServer})
    }, [])

    const onUserChange = () => {
        const anotherUserFromServer = getAnotherUserFromServer(personData2)
        dispatchUser({type: 'SET_USER_DATA', payload: anotherUserFromServer})
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
