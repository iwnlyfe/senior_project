import axios from "axios";

export const outMovement = async() => {
    return await axios.get(process.env.REACT_APP_API + '/outMovement')
}