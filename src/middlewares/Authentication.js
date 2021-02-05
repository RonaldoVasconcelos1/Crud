const userRepository = require('../Repository/UserRepository')
const { authSecret } = require('../../env')
const jwt = require('jsonwebtoken')
const bcrypt = require('bcrypt')

module.exports = class Authentication {
  static async auth (req, res) {
    try {
      const authorization = String(req.headers.authorization).split(' ')[1]
      const [email, password] = Buffer.from(authorization, 'base64').toString('utf-8').split(':')
      if (!email || !password) {
        return res.status(400).end()
      }
      const user = await userRepository.findByEmail(email)
      if (!user) {
        return res.status(400).end('User not found')
      }
      const isMatch = bcrypt.compareSync(password, user.password)
      if (isMatch) {
        const token = jwt.sign({
          name: user.name,
          email: user.email
        }, authSecret, { expiresIn: 86400 })
        res.set('X-TOKEN', token)
        return res.status(204).end()
      }
      return res.status(400).end('Invalid Email / Password')
    } catch (error) {
      console.log(error)
      return res.status(400).end()
    }
  }
}
