import {useContext} from "react";
import {UserContext} from "../../../../contextAPI/context.js"

export const UserPersonalInfo = () => {
    const userData = useContext(UserContext)
    const {name, age} = userData

    return (
        <div>
            <h3>Персональные данные:</h3>
            <div>Имя: {name}</div>
            <div>Возраст: {age}</div>
        </div>
    )
}