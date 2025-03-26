import {UserContext, ProductContext} from './context.js'

export const ContextProvider = ({userValue, productValue, children}) => {
    return (
        <UserContext.Provider value={userValue}>
            <ProductContext.Provider value={productValue}>
                {children}
            </ProductContext.Provider>
        </UserContext.Provider>
    )
}