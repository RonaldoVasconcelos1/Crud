const knex = require('../database/config')

module.exports = class UserRepository {
  static async get () {
    const users = await knex('users').select('*')
    return users
  }

  static async create (user) {
    try {
      const response = await knex('users').insert(user)
      console.log(response)
      return response
    } catch (error) {
      return error
    }
  }

  static async findByEmail (userId) {
    try {
      const user = await knex('users')
        .where({ id: userId })
        .first()
      return user
    } catch (error) {
      return error
    }
  }

  static async put (idUser, user) {
    const response = await knex('users')
      .update(user)
      .where({ id: idUser })
    return response
  }

  static async delete (id) {
    const response = await knex('users')
      .where({ id: id })
      .del()
    return response
  }
}
