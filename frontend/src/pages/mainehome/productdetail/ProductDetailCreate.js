import React, {useState} from 'react'
import './style.css'
import { addProductDetail } from '../../../functions/productdetail'
import Swal from 'sweetalert2';
import { useNavigate } from 'react-router-dom'

export default function ProductDetailCreate() {
    const navigate = useNavigate();
    const [value, setValue] = useState({
        productStatus: "",
        expireDate: "",
        receiveQuantity: "",
        product_id: ""
      })
    
    const handleChange = (e) => {
        setValue({...value, 
          [e.target.name]: e.target.value
        })
    }

    const handleSubmit = (e) => {
        e.preventDefault()
        addProductDetail(value)
        .then(res =>{
            Swal.fire(
                value.productName,
                'Successful product creation',
                'success',
                navigate('/productdetailview')    
            )
        }).catch(err =>{
            Swal.fire('แจ้งเตือน',
            err.response.data,
            'error'
          )
        })

    }

    return(
        <div className='container-fluid'>
            <form className='form' onSubmit={handleSubmit}>
                <h1>CreateProduct</h1>
                <div className='container col-4 '>
                    <div className='card caed-ui shadow-lg p-3 mb-4 bg-body rounded'>
                        <div className='card-body '>
                            <div>
                                <span> productStatus </span>
                            </div>
                            <div>
                                <input className='rounded-pill border-0 form-control' type='text' name='productStatus' placeholder='Please name the productStatus.' onChange={handleChange} required />
                            </div>
                            <div>
                                <span> expireDate </span>
                            </div>
                            <div>
                                <input className='rounded-pill border-0 form-control' type='text' name='expireDate' placeholder='Please date the expireDate.' onChange={handleChange} required />
                            </div>
                            <div>
                                <span> receiveQuantity </span>
                            </div>
                            <div>
                                <input className='rounded-pill border-0 form-control' type='text' name='receiveQuantity' placeholder='Please number the receiveQuantity.' onChange={handleChange} required />
                            </div>
                            <div>
                                <span> product_id </span>
                            </div>
                            <div>
                                <input className='rounded-pill border-0 form-control' type='text' name='product_id' placeholder='Please number the product_id.' onChange={handleChange} required />
                            </div>
                            <button type='submit' className='btn btn-lg btn-custom btn-dark btn-block efbutton col-4 container mt-3'> Submit </button>
                        </div>
                    </div>
                </div>
            </form>
        </div>
    )
}