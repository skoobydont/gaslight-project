const router = require('express').Router();
let User = require('../models/user.model');
const bcrypt = require('bcrypt');
const saltRounds = 10;


//GET route
router.route('/').get((res, req) => {
    User.find()
        .then(users => res.json(users))
        .catch(err => console.log('Error: '+err));
});
//AUTH
router.route('/auth').get((req, res) => {
    try { //try to find user in question
        User.findOne({username: req.body.username}, (err, user) => {
            if(err) { //log any errors and throw a 404
                console.log('Error finding User: '+err);
                res.status(404).json('404d');
            }// if hash matches, give us a good to go
            if(compareHash(req.body.password, user.password) === true) {
                console.log('Looks good to me');
                res.status(202).json('good to go');
            }
        });
    } catch(error) { //catch any errors with our try clause
        res.json(error);
        console.log('Faild to find User');
    }

});

//POST route
router.route('/new').post((res, req) => {
    const username = req.body.username;
    const hashPass = hashPassword(req.body.password)

    const newUser = new User({username, hashPass});

    newUser.save()
        .then(() => res.json('User Added'))
        .catch(err => res.statusCode(400).json('Error: '+err));
});


//helper function to hash user input before storing in database
function hashPassword(input) {
    return bcrypt.hashSync(input, saltRounds);
}
//helper function to compare user input to stored hashed password
function compareHash(plainText, hashedPassword) {
    return bcrypt.compareSync(plainText, hashedPassword);
}

module.exports = router;