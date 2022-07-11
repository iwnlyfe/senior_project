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
                <h1 className='ff'>Create product detail</h1>
                <div className='container col-4 '>
                    <div className='card caed-ui shadow-lg p-3 mb-4 bg-body rounded'>
                        <div className='card-body '>
                            <div>
                                <span className='fk'> Product status </span>
                            </div>
                            <div>
                                <input className='rounded-pill border-0 form-control fv' type='text' name='productStatus' placeholder='Please enter the product status.' onChange={handleChange} required />
                            </div>
                            <div>
                                <span className='fk'> Expire date </span>
                            </div>
                            <div>
                                <input className='rounded-pill border-0 form-control fv' type='text' name='expireDate' placeholder='Please enter the expire date.' onChange={handleChange} required />
                            </div>
                            <div>
                                <span className='fk'> Receive quantity </span>
                            </div>
                            <div>
                                <input className='rounded-pill border-0 form-control fv' type='text' name='receiveQuantity' placeholder='Please enter the number of receive quantity.' onChange={handleChange} required />
                            </div>
                            <div>
                                <span className='fk'> product_id </span>
                            </div>
                            <div>
                                <input className='rounded-pill border-0 form-control fv' type='text' name='product_id' placeholder='Please enter the product_id.' onChange={handleChange} required />
                            </div>
                            <button type='submit' className='btn btn-lg btn-custom btn-dark btn-block efbutton col-4 container mt-3 ff'> Submit </button>
                        </div>
                    </div>
                </div>
            </form>
        </div>
    )
}