const express = require('express')
const router = express.Router()

//controller
const {listUsers,
    readUsers,
    updateUsers,
    deleteUser,
    changeStatus,
    changeRole
} = require('../controllers/user')

// middleware
const {auth, authAdmin} = require('../middleware/auth')

//@Endpoint http://localhost:3001/api/listUsers
//@method GET
//@Access Private
router.get('/listUsers',auth, authAdmin, listUsers)

//@Endpoint http://localhost:3001/api/readUsers/:id
//@method GET
//@Access Private
router.get('/readUsers/:id', readUsers)

//@Endpoint http://localhost:3001/api/updateUsers
//@method PUT
//@Access Private
router.put('/updateUsers/:id',auth, authAdmin, updateUsers)

//@Endpoint http://localhost:3001/api/deleteUser/:id
//@method DELETE
//@Access Private
router.delete('/deleteUser/:id', deleteUser)

//@Endpoint http://localhost:3001/api/change-status
//@method POST
//@Access Private
router.post('/change-status',auth, authAdmin, changeStatus)

//@Endpoint http://localhost:3001/api/change-role
//@method POST
//@Access Private
router.post('/change-role',auth, authAdmin, changeRole)

module.exports = router