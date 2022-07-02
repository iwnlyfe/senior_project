const mongoose = require('mongoose')

const ShelfSchema = new mongoose.Schema(
    {
        floorNumber:{type: Number},
        lockNumber:{type: Number},
        shelfStatus:{type: Boolean},
        zone_id:{type: mongoose.ObjectId}
    }
)
module.exports = shelf = mongoose.model('shelf', ShelfSchema)