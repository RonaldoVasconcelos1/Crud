const router = require('express').Router()
const UserController = require('./Controllers/UserController')
const Authentication = require('./middlewares/Authentication')
const auth = require('./utils/passport')()

router.post('/login', Authentication.auth)

router.get('/user', auth.authenticate(), UserController.get)
router.post('/user', UserController.insert)
router.get('/user/:id', auth.authenticate(), UserController.findById)
router.get('/user/:email', auth.authenticate(), UserController.findByEmail)
router.put('/user/:id', auth.authenticate(), UserController.update)
router.delete('/user/:id', auth.authenticate(), UserController.delete)

module.exports = router
