const express = require('express')
const router = express.Router()

//controller
const { findAllProduct, addProduct, updateProduct, deleteProduct, disbursement, withdraw, findOneProduct } = require('../controllers/product')

//@Endpoint http://localhost:3001/api/findAllproduct
//@method GET
//@Access Publish
router.get('/findAllProduct', findAllProduct)

//@Endpoint http://localhost:3001/api/findOneProduct
//@method GET
//@Access Publish
router.get('/findOneProduct/:id', findOneProduct)

//@Endpoint http://localhost:3001/api/addProduct
//@method POST
//@Access Publish
router.post('/addProduct', addProduct)

//@Endpoint http://localhost:3001/api/updateProduct
//@method PUT
//@Access Publish
router.put('/updateProduct', updateProduct)

//@Endpoint http://localhost:3001/api/deleteProduct
//@method DELETE
//@Access Publish
router.delete('/deleteProduct/:id', deleteProduct)

//@Endpoint http://localhost:3001/api/disbursement
//@method PATCH
//@Access Publish
router.patch('/disbursement', disbursement)

//@Endpoint http://localhost:3001/api/withdraw -> return
//@method PATCH
//@Access Publish
router.patch('/withdraw', withdraw)

module.exports = router