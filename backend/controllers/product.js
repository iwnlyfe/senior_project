const Product = require('../models/product')

exports.findAllProduct = async(req, res, next) => {
    try{
        const product = await Product.find({})
        res.send(product)
    }catch(err){
        console.log(err)
        res.status(500).send('Server Error!')
    }
}

exports.addProduct = async(req, res) => {
    try{
        const {productName, quantity, price, group } = req.body;
        var product = await Product.findOne({productName})
        if(product) {
            return res.status(400).send('Product have been in stock.')
        } 
        product = new Product({
            productName,
            quantity,
            price,
            group
        })
        await product.save();
        res.send('Add Product Success!')
    }catch(err){
        console.log(err)
        res.status(500).send('Server Error!')
    }
}

exports.updateProduct = async(req, res) => {
    try{
        const {id, productName, quantity, price, group } = req.body;
        var newProudct = {
            productName,
            quantity,
            price,
            group
        }
        await Product.updateOne(
            {_id: id},
            {$set: newProudct}
        )
        res.send('Update Product Success!!')
    }catch(err){
        console.log(err)
        res.status(500).send('Server Error!')
    }
}

exports.deleteProduct = async(req, res) => {
    try{
        const {id} = req.params
        const product = await Product.deleteOne({_id: id}).exec()
        res.send('Delete Product Success!')
    }catch(err){
        console.log(err)
        res.status(500).send('Server Error!')
    }
}

exports.disbursement = async(req, res) => {
    try { 
        const {id, quantity} = req.body
        const total = await Product.findOne({_id: id})
        .select('quantity').exec()
        // console.log('total',total.quantity)
        var newQuantity = total.quantity - quantity;
        await Product.updateOne(
            {_id: id},
            {quantity: newQuantity}
        )
        res.send('Disbursement Success!!')
    }catch(err){
        console.log(err)
        res.status(500).send('Server Error!')
    }
}

exports.withdraw = async(req, res) => {
    try{
        const {id, quantity} = req.body
        const total = await Product.findOne({_id: id})
        .select('quantity').exec()
        // console.log('total',total.quantity)
        var newQuantity = total.quantity + quantity;
        await Product.updateOne(
            {_id: id},
            {quantity: newQuantity}
        )
        res.send('withdraw Success!!')
    }catch(err){
        console.log(err)
        res.status(500).send('Server Error!')
    }
}