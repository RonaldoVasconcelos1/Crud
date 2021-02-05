const bcrypt = require('bcrypt')

module.exports = {
  encryptPassword: (password) => {
    const salt = bcrypt.genSaltSync(10)
    return bcrypt.hashSync(password, salt)
  }
}
