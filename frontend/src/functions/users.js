import axios from 'axios'

export const listUser = async(authtoken) => {
    // console.log(authtoken)
    return await axios.get(process.env.REACT_APP_API + '/listUsers', 
    {
        headers:{
            authtoken,
        }
    });
}

export const changeStatus = async(authtoken, value) => {
    // console.log(authtoken)
    return await axios.post(process.env.REACT_APP_API + '/change-status',
    value, {
        headers:{
            authtoken,
        }
    });
}

export const changeRole = async(authtoken, value) => {
    // console.log(authtoken)
    return await axios.post(process.env.REACT_APP_API + '/change-role',
    value, {
        headers:{
            authtoken,
        }
    });
}


export const resetPassword = async(authtoken, id, value) => {
    // console.log(authtoken)
    return await axios.put(process.env.REACT_APP_API + '/updateUsers/' +id, value, 
    {
        headers:{
            authtoken,
        }
    });
}

export const deleteUser = async(authtoken, id) => {
    // console.log(authtoken)
    return await axios.delete(process.env.REACT_APP_API + '/deleteUser/' +id, 
    {
        headers:{
            authtoken,
        }
    });
}