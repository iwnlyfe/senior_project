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
                <h1 className='ff'>Create product</h1>
                <div className='container col-4 '>
                    <div className='card caed-ui shadow-lg p-3 mb-4 bg-body rounded'>
                        <div className='card-body '>
                            <div>
                                <span className='fk'> Product </span>
                            </div>
                            <div>
                                <input className='rounded-pill border-0 form-control fv' type='text' name='productName' placeholder='Please enter a product name.' onChange={handleChange} required />
                            </div>
                            <div>
                                <span className='fk'> Quantity </span>
                            </div>
                            <div>
                                <input className='rounded-pill border-0 form-control fv' type='text' name='quantity' placeholder='Please enter the number of product quantity.' onChange={handleChange} required />
                            </div>
                            <div>
                                <span className='fk'> Price per unit </span>
                            </div>
                            <div>
                                <input className='rounded-pill border-0 form-control fv' type='text' name='price' placeholder='Please enter the price of product.' onChange={handleChange} required />
                            </div>
                            <div>
                                <span className='fk'> Group </span>
                            </div>
                            <div>
                                <input className='rounded-pill border-0 form-control fv' type='text' name='group' placeholder='Please enter the group.' onChange={handleChange} required />
                            </div>
                            <button type='submit' className='btn btn-lg btn-custom btn-dark btn-block efbutton col-4 container mt-3 ff'> Submit </button>
                        </div>
                    </div>
                </div>
            </form>
        </div>
    )
}