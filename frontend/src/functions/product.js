import axios from "axios";

export const findAllProduct = async() =>{
    return await axios.get(process.env.REACT_APP_API + '/findAllProduct')
}

export const addProduct = async(value) =>{
    return await axios.post(process.env.REACT_APP_API + '/addProduct' , value)
}

// export const updateProduct = async(id,value) =>{
    
    // return await axios.
// }

export const deleteProduct = async(id) =>{
    return await axios.delete(process.env.REACT_APP_API + '/deleteProduct/' +id)
}

export const findOneProduct = async() =>{
    return await axios.get(process.env.REACT_APP_API + '/findOneProduct/' + id)
}