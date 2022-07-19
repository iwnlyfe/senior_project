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
                                <h5>Quantity {product.quantity}</h5>
                                <h5>Price per unit {product.price} บ.</h5>
                                <p>Product Status ปกติ</p>
                                <p>วันที่เข้า 25 / เดือน / 2552</p>
                                <p>เบิกไปกี่ครัง 5 ครั้ง</p>
                                <p>คืนไปกี่ครั้ง 3 ครั้ง</p>
                                <p>ชั้นที่ 1 ถึง 10</p>
                                <p>ล็อคที่ 2 ถึง 8</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}