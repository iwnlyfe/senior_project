import React, {useState} from 'react'
import './style.css'
import { addShelf } from '../../../functions/shelf'
import Swal from 'sweetalert2';
import { useNavigate } from 'react-router-dom'

export default function ShelfCreate() {
    const navigate = useNavigate();
    const [value, setValue] = useState({
        shrlfNumber: "",
        floorNumber: "",
        lockNumber: "",
        shelfStatus: "",
        zone: ""
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
                <h1>CreateShelf</h1>
                <div className='container col-4 '>
                    <div className='card caed-ui shadow-lg p-3 mb-4 bg-body rounded'>
                        <div className='card-body '>
                            <div>
                                <span> shelfNumber </span>
                            </div>
                            <div>
                                <input className='rounded-pill border-0 form-control' type='text' name='shelfNumber' placeholder='Please number the shelf.' onChange={handleChange} required />
                            </div>
                            <div>
                                <span> floorNumber </span>
                            </div>
                            <div>
                                <input className='rounded-pill border-0 form-control' type='text' name='floorNumber' placeholder='Please number the floor.' onChange={handleChange} required />
                            </div>
                            <div>
                                <span> lockNumber </span>
                            </div>
                            <div>
                                <input className='rounded-pill border-0 form-control' type='text' name='lockNumber' placeholder='Please number the lock.' onChange={handleChange} required />
                            </div>
                            <div>
                                <span> shelfStatus </span>
                            </div>
                            <div>
                                <input className='rounded-pill border-0 form-control' type='text' name='shelfStatus' placeholder='Please the Statusshelf.' onChange={handleChange} required />
                            </div>
                            <div>
                                <span> zone </span>
                            </div>
                            <div>
                                <input className='rounded-pill border-0 form-control' type='text' name='zone' placeholder='Please the group.' onChange={handleChange} required />
                            </div>
                            <button type='submit' className='btn btn-lg btn-custom btn-dark btn-block efbutton col-4 container mt-3'> Submit </button>
                        </div>
                    </div>
                </div>
            </form>
        </div>
    )
}