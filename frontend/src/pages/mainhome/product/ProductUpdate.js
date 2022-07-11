import React from 'react'
import { useParams,useNavigate } from 'react-router-dom'
import { useState,useEffect } from 'react'
import { findOneProduct, updateProduct } from '../../../functions/product';
import Swal from 'sweetalert2';
export default function ProductUpdate() {
    const navigate = useNavigate();
    const {id} = useParams()
    const [product,setProduct] = useState({
        _id: "",
        productName: "",
        quantity: "",
        price: "",
        group: ""
      })
    
    useEffect(() =>{
        findOneProduct(id)
        .then(response =>{
            console.log(response.data)
            setProduct(response.data)
           
            //  console.log(data)
        }).catch(err => {
            console.log(err.prsponse.data)
        })
    }, [])

     const handleChange = (e) => {
         setProduct({...product, 
           [e.target.name]: e.target.value
         })
     }


     const handleSubmit = (e) => {
        // console.log('product', product)
         e.preventDefault()
          updateProduct(product)
         .then(res =>{
            console.log(res.data)
         }).catch(err =>{
            console.log(err.response)
         })

     }
    return(
        <div>
            <h1>ProductUpdate</h1>
            <div className='container-fluid'>
            <form className='form' onSubmit={handleSubmit}>
                <div className='container col-4 '>
                    <div className='card caed-ui shadow-lg p-3 mb-4 bg-body rounded'>
                        <div className='card-body' style={{fontSize: "20px"}}>
                                {/* <input type="hidden" value={product._id} /> */}
                            <div style={{marginBottom: "0.3rem"}}>
                                <span> Product </span>
                            </div>
                            <div>
                               <input className='rounded-pill border-1 form-control' type='text' name='productName' value={product.productName} onChange={handleChange} required />
                            </div>
                            {/* <div>
                                <span> quantity </span>
                            </div>
                            <div>
                                <input className='rounded-pill border-0 form-control' type='text' name='quantity' value={product.quantity} onChange={handleChange} required />
                            </div> */}
                            <div style={{marginBottom: "0.3rem"}}>
                                <span> Price per unit</span>
                            </div>
                            <div>
                                <input className='rounded-pill border-1 form-control' type='text' name='price' value={product.price} onChange={handleChange} required />
                            </div>
                            <div>
                                <span> Group </span>
                            </div>
                            <div>
                                <input className='rounded-pill border-1 form-control' type='text' name='group' value={product.group} onChange={handleChange} required />
                            </div>
                             <button type='submit' className='btn btn-lg btn-custom btn-dark btn-block efbutton col-4 container mt-3'> Submit </button>
                         </div>
                       
                        
                    </div> 
                </div>
            </form>
        </div>
        </div>
    )
}