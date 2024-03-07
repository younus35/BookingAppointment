const User = require('../model/user');

exports.getUsers = (req, res, next) =>{
    User.findAll()
     .then(users => {
        res.json(users);
     })
     .catch( err => console.log(err));
}

exports.postUser = (req, res, next) =>{
    const username = req.body.user;
    const email = req.body.email;
    const phoneNo = req.body.phone;
    User.create({
        username: username,
        email: email,
        phoneNumber: phoneNo
    })
    .then(result =>{
        res.json(result);
    })
    .catch( err => console.log(err));
}

exports.deleteUser = (req, res, next) =>{
    const userId = req.params.userId;
    User.findByPk(userId)
    .then(user =>{
        return user.destroy();
    })
    .then(result =>{
        console.log('Destroyed 1 User');
        res.json(result);
    })
    .catch(err => console.log(err));
}