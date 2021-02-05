const userRepo = require('../Repository/UserRepository')

module.exports = {
  get: async (req, res) => {
    const users = await userRepo.get()
    return res.json(users)
  },
  insert: async (req, res) => {
    try {
      const user = req.body
      if (!user.name) {
        return res.status(400)
      }
      if (!user.email) {
        return res.status(400)
      }
      if (!user.password) {
        return res.status(400)
      }
      const response = await userRepo.create(user)
      if (response.detail) {
        return res.status(406).end('Registered User')
      }
      return res.status(204).end()
    } catch (error) {
      return res.status(400)
    }
  },
  findById: async (req, res) => {
    if (!req.params.id) {
      return res.send(400).end()
    }
    const response = await userRepo.findByEmail(req.params.id)
    if (!response) {
      return res.status(404).end('User Notfound')
    }
    return res.json(response)
  },
  update: async (req, res) => {
    const user = req.body
    const id = req.params.id
    const response = await userRepo.put(id, user)
    if (!response) {
      return res.status(401).end('user not found')
    }
    return res.json(response)
  },
  delete: async (req, res) => {
    try {
      if (!req.params.id) {
        return res.send(400).end()
      }
      const response = userRepo.delete(req.params.id)
      if (!response) {
        return res.status(404).end('user not found')
      }
      return res.status(200).end()
    } catch (error) {
      console.log(error)
      return res.status(400).end()
    }
  }
}
