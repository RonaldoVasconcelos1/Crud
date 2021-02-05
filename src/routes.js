const router = require('express').Router()
const UserController = require('./Controllers/UserController')
const Authentication = require('./middlewares/Authentication')

router.post('/login', Authentication.auth)

router.get('/user', UserController.get)
router.post('/user', UserController.insert)
router.get('/user/:id', UserController.findById)
router.get('/user/:email', UserController.findByEmail)
router.put('/user/:id', UserController.update)
router.delete('/user/:id', UserController.delete)

module.exports = router
