import React from 'react'
import { useParams,useNavigate } from 'react-router-dom'
import { useState,useEffect } from 'react'
import { findOneProductDetail, updateProductDetail } from '../../../functions/productdetail';
import Swal from 'sweetalert2';
export default function ProductDetailUpdate() {
     const navigate = useNavigate();
    const {id} = useParams()
    const [product,setProduct] = useState({
        _id: "",
        productStatus: "",
        receiveDate: "",
        expireDate: "",
        receiveQuantity: "",
        product_id: ""
      })
    
    useEffect(() =>{
        findOneProductDetail(id)
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
         updateProductDetail(product)
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

                             <div className='card-body '>
                                {/* <input type="hidden" value={product._id} /> */}
                                <div>
                                <span> productStatus </span>
                                </div>
                            <div>
                               <input className='rounded-pill border-0 form-control' type='text' name='productStatus' value={product.productStatus} onChange={handleChange} required />
                           </div>
                           <div>
                                <span> receiveDate </span>
                            </div>
                           <div>
                                <input className='rounded-pill border-0 form-control' type='text' name='receiveDate' value={product.receiveDate} onChange={handleChange} required />
                             </div>
                             <div>
                                <span> expireDate </span>
                             </div>
                             <div>
                                 <input className='rounded-pill border-0 form-control' type='text' name='expireDate' value={product.expireDate} onChange={handleChange} required />
                             </div>
                             <div>
                                 <span> receiveQuantity </span>
                             </div>
                             <div>
                                 <input className='rounded-pill border-0 form-control' type='text' name='receiveQuantity' value={product.receiveQuantity} onChange={handleChange} required />
                             </div>
                             <div>
                                 <span> product_id </span>
                             </div>
                             <div>
                                 <input className='rounded-pill border-0 form-control' type='text' name='product_id' value={product.product_id} onChange={handleChange} required />
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