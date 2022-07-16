import React from 'react'
import { useEffect,useState,useCallback } from 'react'
import {outMovement } from '../../../functions/movement'
import Sidebar from '../../../components/layout/Sidebar'
// import { Link } from 'react-router-dom'
// import moment from 'moment'

export default function InMovement() {
  const [movement,setMovement] = useState([])
  // const [movementMinus,setMovementMinus] = useState([])
  //   const Swal = require('sweetalert2')

  useEffect(()=>{
      outMovement()
      .then(response => {

        setMovement(response.data)
      }).catch(err=>{
        console.log(err.prsponse.data)
      });
    },[])

  return (
    <div className='container-fluid'>
      <div class='row'>
      <Sidebar />
      <div  class='ml col-s-10'>
        <div class='row'>
        <h1 className='col-3'>ABC analysis</h1>
        </div>
        <table class='table table-bordered table-light' >
            <thead>
              <tr>
                <th scope='col'>#</th>
                <th scope='col'>Product Status</th>
              </tr>
            </thead>
            {movement.map((movement,index)=>(
            <tbody>
                <th scope='col'>{movement._id}</th>
                <th scope='col'>{movement.totalQuantity}</th>
            </tbody>
            ))}
            {/* <tbody>
                <th scope='col'>{movement._id}</th>
                <th scope='col'>{movement.totalQuantity}</th>
            </tbody> */}
        </table>
        </div>
        </div>
    </div>
    )
}
