import axios from "axios";

export const findAllProductDetail = async() =>{
    return await axios.get(process.env.REACT_APP_API + '/findAllProductDetail')
}

export const addProductDetail = async(value) =>{
    return await axios.post(process.env.REACT_APP_API + '/addProductDetail' , value)
}

export const updateProductDetail = async() =>{

}

export const deleteProductDetail = async(id) =>{
    return await axios.delete(process.env.REACT_APP_API + '/deleteProductDetail/' +id)
}