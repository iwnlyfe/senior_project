import React from 'react'
import { useEffect,useState } from 'react'
import {findAllProduct} from '../../functions/product'

export default function ProductView() {
  const [products,setProduct] = useState([])
  

  // const [products,setProduct] = useState('')

  // const fetchData=()=>{
  //   axios
  //   .get(`${process.env.REACT_APP_API}/findAllDisbursement`)
  //   .then(response=>{
  //     setProduct(response.data)
  //   })
  //   .catch(err=>alert(err));
  // }

  useEffect(()=>{
    findAllProduct()
    .then(response => {
      setProduct(response.data)
      })
      .catch(err=>alert(err));
  },[])
  return (
      <div  className='container col-10'>
          <h1>Product View</h1>
          {products.map((product,index)=>(
          <table className='table' kye={index} >
            <thead>
              <tr>
                <th scope='col'>#</th>
                <th scope='col'>ProductName</th>
                <th scope='col'>Quantity</th>
                <th scope='col'>Price</th>
                <th scope='col'>Group</th>
                <th scope='col'>Action</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <th scope="row">1</th>
                <th >{product.productName}</th>
                <th >{product.quantity}</th>
                <th >{product.price}</th>
                <th >{product.group}</th>
              </tr>
            </tbody>
          </table>
          ))}
      </div>
  )
}
