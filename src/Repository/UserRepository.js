const knex = require('../database/config')

module.exports = class UserRepository {
  static async get () {
    const users = await knex('users').select('*')
    return users
  }

  static async create (user) {
    try {
      const response = await knex('users').insert(user)
      return response
    } catch (error) {
      return error
    }
  }

  static async findByEmail (email) {
    try {
      const user = await knex('users')
        .where({ email: email })
        .first()
      return user
    } catch (error) {
      return error
    }
  }

  static async findById (userId) {
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
    try {
      const response = await knex('users')
        .update(user)
        .where({ id: idUser })
      return response
    } catch (error) {
      return error
    }
  }

  static async delete (id) {
    try {
      const response = await knex('users')
        .where({ id: id })
        .del()
      return response
    } catch (error) {
      return error
    }
  }
}
