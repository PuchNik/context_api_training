import {UserPersonalInfo, UserContacts} from "../index.js";


export const UserBlock = () => {
    return (
        <div>
            <h2>Пользователь:</h2>
            <UserPersonalInfo />
            <UserContacts />
        </div>
    )
}