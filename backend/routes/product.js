const express = require('express')
const router = express.Router()

//controller
const { findAllProduct, addProduct, updateProduct, deleteProduct, disbursement, withdraw } = require('../controllers/product')

//@Endpoint http://localhost:3001/api/findAllproduct
//@method GET
//@Access Publish
router.get('/findAllProduct', findAllProduct)

//@Endpoint http://localhost:3001/api/addProduct
//@method POST
//@Access Publish
router.post('/addProduct', addProduct)

//@Endpoint http://localhost:3001/api/updateProduct
//@method POST
//@Access Publish
router.post('/updateProduct', updateProduct)

//@Endpoint http://localhost:3001/api/deleteProduct
//@method DELETE
//@Access Publish
router.delete('/deleteProduct/:id', deleteProduct)

//@Endpoint http://localhost:3001/api/disbursement
//@method POST
//@Access Publish
router.post('/disbursement', disbursement)

//@Endpoint http://localhost:3001/api/withdraw -> return
//@method POST
//@Access Publish
router.post('/withdraw', withdraw)

module.exports = router