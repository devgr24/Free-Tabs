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
    }
}