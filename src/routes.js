const router = require('express').Router()
const UserController = require('./Controllers/UserController')

router.get('/user', UserController.get)
router.post('/user', UserController.insert)
router.get('/user/:id', UserController.findById)
router.put('/user/:id', UserController.update)
router.delete('/user/:id', UserController.delete)

module.exports = router
