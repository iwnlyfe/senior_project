import React, {useState} from 'react'
import './style.css'
import { addProduct } from '../../../functions/product'
import Swal from 'sweetalert2';
import { useNavigate } from 'react-router-dom'

export default function ProductCreate() {
    const navigate = useNavigate();
    const [value, setValue] = useState({
        productName: "",
        quantity: "",
        price: "",
        group: ""
      })
    
    const handleChange = (e) => {
        setValue({...value, 
          [e.target.name]: e.target.value
        })
    }

    const handleSubmit = (e) => {
        e.preventDefault()
        addProduct(value)
        .then(res =>{
            Swal.fire(
                value.productName,
                'Successful product creation',
                'success',
                navigate('/productview')    
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
                                <span> Product </span>
                            </div>
                            <div>
                                <input className='rounded-pill border-0 form-control' type='text' name='productName' placeholder='Please name the product.' onChange={handleChange} required />
                            </div>
                            <div>
                                <span> quantity </span>
                            </div>
                            <div>
                                <input className='rounded-pill border-0 form-control' type='text' name='quantity' placeholder='Please number the quantity.' onChange={handleChange} required />
                            </div>
                            <div>
                                <span> price </span>
                            </div>
                            <div>
                                <input className='rounded-pill border-0 form-control' type='text' name='price' placeholder='Please number the price.' onChange={handleChange} required />
                            </div>
                            <div>
                                <span> group </span>
                            </div>
                            <div>
                                <input className='rounded-pill border-0 form-control' type='text' name='group' placeholder='Please the group.' onChange={handleChange} required />
                            </div>
                            <button type='submit' className='btn btn-lg btn-custom btn-dark btn-block efbutton col-4 container mt-3'> Submit </button>
                        </div>
                    </div>
                </div>
            </form>
        </div>
    )
}