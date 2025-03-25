import './App.css'
import {personData, fruitData} from './helpers/index.js'
import {Header, ProductBlock, UserBlock} from './components/index.js'
import {ContextProvider} from "./contextAPI/ContextProvider.jsx";


const getUserFromServer = (data) => data

const getProductFromServer = (data) => data

function App() {
    const userData = getUserFromServer(personData)

    const productData = getProductFromServer(fruitData)

    return (
        <div>
            <ContextProvider userValue={userData} productValue={productData}>
                <Header/>
                <hr/>

                <UserBlock/>
                <ProductBlock/>
            </ContextProvider>
        </div>
    )
}

export default App
