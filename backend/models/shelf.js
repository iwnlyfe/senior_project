const mongoose = require('mongoose')

const ShelfSchema = new mongoose.Schema(
    {
        shelfNumber:{type: Number},
        floorNumber:{type: Number},
        lockNumber:{type: Number},
        shelfStatus:{type: Boolean},
        zone_id:{type: String}
    }
)
module.exports = shelf = mongoose.model('shelf', ShelfSchema)