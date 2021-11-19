require('dotenv').config();

const { response } = require('express');

const User = require('../models/userModel');



const getUsers = async (req, res = response) => {

    const usersList = await User.find({});
    try {

        res.send(usersList);
    } catch (err) {
        res.status(500).json({
            error: err,
            code: 500,
            mensaje: 'Server error'
        });
    }
}



const createUser = async (req, res) => {

    const body = req.body;

    const user = new User(body);
    try {
        await user.save();
        res.json({
            code: 200,
            message: 'ok'
        })
    } catch (err) {
        res.status(500).json({
            error: err,
            message: 'server error'
        });
    }
}



const updateUser = async (req, res) => {

};

const deleteUser = async (req, res) => {
    
}



module.exports = {
    getUsers,
    createUser,
    updateUser, 
    deleteUser
}