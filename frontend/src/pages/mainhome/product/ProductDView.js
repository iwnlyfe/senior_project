import React, { useEffect,useState } from "react";
import { useParams } from 'react-router-dom'
import { findOneProduct } from '../../../functions/product';
import Sidebar from "../../../components/layout/Sidebar";

export default function ProductDView() {
    const {id} = useParams()
    const [product,setProductD] = useState([])

    useEffect(()=>{
        findOneProduct(id)
        .then(res =>{
            console.log(res.data)
            setProductD(res.data)
        }).catch(err => {
            console.log(err.prsponse.data)
        })
    }, [])

    return(
        <div class="container-fluid">
            <div class="row">
                <Sidebar />
                <div class="ml col-s-10">
                    <h1>test ProductDView</h1>
                    <div class="card">
                        <div class="card-body">
                            <div class="row">
                                <h1 class=" card-title text-start col-10">{product.productName}</h1>
                                <h5 class="text-center col-2 my-3">Group {product.group} </h5>
                            </div>
                            <div>
                                <p>Quantity {product.quantity}</p>
                                <p>Price per unit {product.price} บ.</p>
                                {/* <p>Product Status</p> */}
                                <p>เบิกไปกี่ครัง</p>
                                <p>คืนไปกี่ครั้ง</p>
                                <p></p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}