import {useContext} from "react"
import {UserContext} from '../../../contextAPI/context.js'

export const CurrenUser = () => {
    const userData = useContext(UserContext)
    const {name} = userData

    return (
        <div>
            <div>Текущий пользователь: {name}</div>
        </div>
    )
}
