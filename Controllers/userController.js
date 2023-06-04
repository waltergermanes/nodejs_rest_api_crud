const db = require('../models')
const { Sequelize, Op } = require("sequelize");
const asyncHandler = require('express-async-handler')

const User = db.user
const getUsers = asyncHandler(async(req, res)=>{
    const users = await User.findAll({})
    res.status(200).send(users)
})
const getUser = asyncHandler(async(req, res)=>{
   
    const user = await User.findOne({where: {id: req.params.id}})
    if (!user) {
        res.status(404)
        throw new Error("User not Found")
    }
    res.status(200).send(user)
})
const createUser = asyncHandler(async(req, res)=>{
    const { firstName, lastName, userName, phoneNumber} = req.body
    if (!firstName || !lastName || !userName || !phoneNumber) {
        res.status(400)
        throw new Error("All fields are required")
    }
    const user = await User.create({ firstName, lastName, userName, phoneNumber})
    res.status(200).json({ message : user})
})
const updateUser =asyncHandler(async(req, res)=>{
    const { firstName, lastName, userName, phoneNumber} = req.body
    const user = await User.update({firstName, lastName, userName, phoneNumber},{
        where:{
            id: req.params.id
        }
    })
    if (!user) {
        res.status(404)
        throw new Error("User not Found")
    }
    res.status(200).json({ message : `updated user ${req.params.id}`})
})
const deleteUser =asyncHandler(async(req, res)=>{
    const user = await User.destroy({where: {id: req.params.id}})
    if (!user) {
        res.status(404)
        throw new Error("User not Found")
    }
    res.status(200).json({ message : `deleted user ${req.params.id}`})
})
module.exports = { getUsers, getUser, createUser, updateUser, deleteUser }