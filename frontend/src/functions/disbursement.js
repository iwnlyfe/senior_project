import axios from "axios";

export const findAllDisbursement = async() =>{
    return await axios.get(process.env.REACT_APP_API + '/findAllDisbursement')
}

export const addDisbursement = async(value) =>{
    return await axios.post(process.env.REACT_APP_API + '/addDisbursement' , value)
}

export const updateDisbursement = async() =>{

}

export const deleteDisbursement = async(id) =>{
    return await axios.delete(process.env.REACT_APP_API + '/deleteDisbursement/' +id)
}