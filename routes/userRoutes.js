const router = require('express').Router()
const { getUser, getUsers, createUser, updateUser, deleteUser} = require('../Controllers/userController')

router.get('/user', getUsers)
      .get('/user/:id', getUser)
      .post('/user/', createUser)
      .put('/user/:id', updateUser)
      .delete('/user/:id', deleteUser)

module.exports = router