const {User} = require('../models');

module.exports = {
    async register (req,res) {
        try {
            const user = await User.create(req.body)
            res.send(user.toJSON())
        } catch (err) {
            res.status(400).send({
                error : 'this email is already used .'
            })
            //email already exists
        }
        
        res.send({
            message: `user ${req.body.email} is registered!`
        });
    },
    async login (req,res) {
        try {
            const {email,password} = req.body;
            const user = await User.findOne({
                where : {
                    email : email
                }
            })

            if (!user) {
                return res.status(403).send({
                    error : 'The login info was incorrect .'
                })
            }

            const isPasswordValid = password === user.password

            if (!isPasswordValid) {
                return res.status(403).send({
                    error : 'check your password.'
                })
            }

            const userJson = user.toJSON()
            res.send({
                user: userJson
            })
        } catch (err) {
            res.status(400).send({
                error : 'Invalid login information'
            })
        }
    }
}