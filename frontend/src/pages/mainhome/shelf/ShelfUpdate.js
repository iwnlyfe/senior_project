import React from 'react'
import { useParams,useNavigate } from 'react-router-dom'
import { useState,useEffect } from 'react'
import { findOneShelf, updateShelf } from '../../../functions/shelf';
import Swal from 'sweetalert2';
export default function ShelfUpdate() {
     const navigate = useNavigate();
    const {id} = useParams()
    const [shelf,setshelf] = useState({
        _id: "",
        floorNumber: "",
        lockNumber: "",
        shelfStatus: "",
        zone_id: ""
      })
    
    useEffect(() =>{
        findOneShelf(id)
        .then(response =>{
            console.log(response.data)
            setshelf(response.data)
           
            //  console.log(data)
        }).catch(err => {
            console.log(err.prsponse.data)
        })
    }, [])

     const handleChange = (e) => {
        setshelf({...shelf, 
           [e.target.name]: e.target.value
         })
     }


     const handleSubmit = (e) => {
        // console.log('product', product)
         e.preventDefault()
         updateShelf(shelf)
         .then(res =>{
            console.log(res.data)
         }).catch(err =>{
            console.log(err.response)
         })

     }
    return(
        <div>
            <h1>ShelfUpdate</h1>
            <div className='container-fluid'>
            <form className='form' onSubmit={handleSubmit}>
                <div className='container col-4 '>
                    <div className='card caed-ui shadow-lg p-3 mb-4 bg-body rounded'>

                             <div className='card-body '>
                                {/* <input type="hidden" value={product._id} /> */}
                                <div>
                                <span> floorNumber </span>
                                </div>
                            <div>
                               <input className='rounded-pill border-0 form-control' type='text' name='floorNumber' value={shelf.floorNumber} onChange={handleChange} required />
                           </div>
                           <div>
                                <span> lockNumber </span>
                            </div>
                           <div>
                                <input className='rounded-pill border-0 form-control' type='text' name='lockNumber' value={shelf.lockNumber} onChange={handleChange} required />
                             </div>
                             <div>
                                <span> shelfStatus </span>
                             </div>
                             <div>
                                 <input className='rounded-pill border-0 form-control' type='text' name='shelfStatus' value={shelf.shelfStatus} onChange={handleChange} required />
                             </div>
                             <div>
                                 <span> zone_id </span>
                             </div>
                             <div>
                                 <input className='rounded-pill border-0 form-control' type='text' name='zone_id' value={shelf.zone_id} onChange={handleChange} required />
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