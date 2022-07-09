const mongoose = require('mongoose')
// const mongodb = require('mongodb')
let _db = mongoose.connect(process.env.DATABASE)

const ProductSchema = new mongoose.Schema(
    {
        productName:{type: String},
        quantity:{type: Number},
        price:{type: Number},
        group:{type: String}
    }
)
module.exports = product = mongoose.model('products', ProductSchema)
