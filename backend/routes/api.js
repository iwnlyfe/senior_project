const express = require('express')
const router = express.Router()

//controller
const {findAllUser, 
    register, 
    login, 
    editUser, 
    deleteUser,
    currentUser
} = require('../controllers/auth')

// middleware
const {auth} = require('../middleware/auth')

//@Endpoint http://localhost:3001/api/auth
//@method GET
//@Access Publish
router.get('/auth', findAllUser)

//@Endpoint http://localhost:3001/api/register
//@method POST
//@Access Publish
router.post('/register', register)

//@Endpoint http://localhost:3001/api/login
//@method POST
//@Access Publish
router.post('/login', login)

//@Endpoint http://localhost:3001/api/current-user
//@method POST
//@Access Private
router.post('/current-user', auth, currentUser)



//@Endpoint http://localhost:3001/api/1
//@method GET
//@Access Publish
router.get('/1', auth, (req, res) => {
    res.send('hello 1')
})

//@Endpoint http://localhost:3001/api/auth
//@method PUT
//@Access Publish
router.put('/auth', editUser)

//@Endpoint http://localhost:3001/api/auth
//@method DELETE
//@Access Publish
router.delete('/auth', deleteUser)


module.exports = router