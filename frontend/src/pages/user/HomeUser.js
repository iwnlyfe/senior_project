import React from 'react'
import Sidebar from '../../components/layout/Sidebar'
import './background.css'
export default function HomeUser() {

  return (
    <div class='container-fluid'>
      
      <div className='row'>
        <Sidebar />
          <h1 className='bg-danger ml col-s-10 ff'> Home </h1>
          
      </div>
    </div>
  )
}
