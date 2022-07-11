import React, {useState} from 'react'
import './style.css'
import { addShelf } from '../../../functions/shelf'
import Swal from 'sweetalert2';
import { useNavigate } from 'react-router-dom'

export default function ShelfCreate() {
    const navigate = useNavigate();
    const [value, setValue] = useState({
        floorNumber: "",
        lockNumber: "",
        shelfStatus: "",
        zone_id: ""
      })
    
    const handleChange = (e) => {
        setValue({...value, 
          [e.target.name]: e.target.value
        })
    }

    const handleSubmit = (e) => {
        e.preventDefault()
        addShelf(value)
        .then(res =>{
            Swal.fire(
                value.productName,
                'Successful Shelf creation',
                'success',
                navigate('/shelfview')    
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
                <h1 className='ff'>Create shelf</h1>
                <div className='container col-4 '>
                    <div className='card caed-ui shadow-lg p-3 mb-4 bg-body rounded'>
                        <div className='card-body '>
                            <div>
                                <span className='fk'> Floor number </span>
                            </div>
                            <div>
                                <input className='rounded-pill border-0 form-control fv' type='text' name='floorNumber' placeholder='Please name the product.' onChange={handleChange} required />
                            </div>
                            <div>
                                <span className='fk'> Lock number </span>
                            </div>
                            <div>
                                <input className='rounded-pill border-0 form-control fv' type='text' name='lockNumber' placeholder='Please number the quantity.' onChange={handleChange} required />
                            </div>
                            <div>
                                <span className='fk'> Shelf status </span>
                            </div>
                            <div>
                                <input className='rounded-pill border-0 form-control fv' type='text' name='shelfStatus' placeholder='Please number the price.' onChange={handleChange} required />
                            </div>
                            <div>
                                <span className='fk'> zone_id </span>
                            </div>
                            <div>
                                <input className='rounded-pill border-0 form-control fv' type='text' name='zone_id' placeholder='Please the group.' onChange={handleChange} required />
                            </div>
                            <button type='submit' className='btn btn-lg btn-custom btn-dark btn-block efbutton col-4 container mt-3 ff'> Submit </button>
                        </div>
                    </div>
                </div>
            </form>
        </div>
    )
}