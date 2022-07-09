const Shelf = require('../models/shelf')

exports.findAllShelf = async(req, res) => {
    try{
        const shelf = await Shelf.find({})
        res.send(shelf)
    }catch(err){
        console.log(err)
        res.status(500).send('Server Error!')
    }
}

exports.findOneShelf = async(req, res, next) => {
    try{
        const {id} = req.params
        const shelf = await Shelf.findOne({_id: id}).exec()
        res.send(shelf)
    }catch(err){
        console.log(err)
        res.status(500).send('Server Error!')
    }
}

exports.addShelf = async(req, res) => {
    try{
        const {floorNumber, lockNumber, shelfStatus, zone_id} = req.body;
        var shelf = await Shelf.findOne({floorNumber: floorNumber, lockNumber: lockNumber})
        if(shelf){
            return res.status(400).send('floor and lock already exist!')
        }
        shelf = new Shelf({
            floorNumber,
            lockNumber,
            shelfStatus,
            zone_id
        })
        await shelf.save();
        res.send('Add Shelf Success!')
    }catch(err){
        console.log(err)
        res.status(500).send('Server Error!')
    }
}

exports.updateShelf = async(req, res) => {
    try{
        // req.body.value
        const {
            id, 
            floorNumber, 
            lockNumber, 
            shelfStatus, 
            zone_id
        } = req.body;
        var newShelf = {
            floorNumber, 
            lockNumber, 
            shelfStatus, 
            zone_id
        }
        await Shelf.updateOne(
            {_id: id},
            {$set: newShelf}
        )
        res.send('Update Shelf Success!')
    }catch(err){
        console.log(err)
        res.status(500).send('Server Error!')
    }
}

exports.deleteShelf = async(req, res) => {
    try{
        const {id} = req.params
        await Shelf.deleteOne({_id: id}).exec()
        res.send('Delete Shelf Success!!')
    }catch(err){
        console.log(err)
        res.status(500).send('Server Error!')
    }
}