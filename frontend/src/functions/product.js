import axios from "axios";

export const findAllProduct = async() =>{
    return await axios.get(process.env.REACT_APP_API + '/findAllProduct')
}

export const addProduct = async(value) =>{
    return await axios.post(process.env.REACT_APP_API + '/addProduct' , value)
}

export const updateProduct = async(value) =>{
    // return await axios.put(process.REACT_APP_API + '/updateProduct', value)
    return await axios.put("http://localhost:3001/api/updateProduct", value)
}

export const deleteProduct = async(id) =>{
    return await axios.delete(process.env.REACT_APP_API + '/deleteProduct/' +id)
}

export const findOneProduct = async(id) =>{
    return await axios.get(process.env.REACT_APP_API + '/findOneProduct/' + id)
}