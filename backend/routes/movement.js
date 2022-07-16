const express = require('express')
const router = express.Router()

const { outMovement } = require('../controllers/movement')

//@Endpoint http://localhost:3001/api/outMovement
//@method GET
//@Access Publish
router.get('/outMovement', outMovement)

// router.get('/outMovementMinus', outMovementMinus)

module.exports = router