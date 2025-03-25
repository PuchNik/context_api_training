import {useContext} from "react"
import {UserContext} from "../../../../contextAPI/context.js"

export const UserContacts = () => {
    const {userData} = useContext(UserContext)
    const {email, phone} = userData

    return (
        <div>
            <h3>Контакты:</h3>
            <div>Почта: {email}</div>
            <div>Телефон: {phone}</div>
        </div>
    )
}