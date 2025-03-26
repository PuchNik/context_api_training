import {useContext} from "react";
import {UserContext} from "../../../../contextAPI/context.js"

export const UserPersonalInfo = () => {
    const {userData, dispatchUser} = useContext(UserContext)
    const {name, age} = userData

    const onUserUpdate = () => {
        dispatchUser({type: 'SET_USER_DATA', payload: {
            ...userData,
                age: 24,
                phone: '8-222-222-22-22'
        }})
    }

    return (
        <div>
            <h3>Персональные данные:</h3>
            <div>Имя: {name}</div>
            <div>Возраст: {age}</div>
            <hr/>

            <button onClick={onUserUpdate}>Обновить данные пользователя</button>
        </div>
    )
}