const router = require('express').Router()
const User = require('../../models/User')
const bcrypt = require('bcrypt')

//REGISTER
router.post('/register', async (req, res) => {
    try {
        const saltRounds = 10
        const salt = await bcrypt.genSalt(saltRounds)
        const hashedPassword = await bcrypt.hash(req.body.password, salt)
        const newUser = new User({
            username: req.body.username,
            email: req.body.email,
            password: hashedPassword,
        })
        const user = await newUser.save()
        res.status(200).json(user)
    } catch (error) {
        res.status(500).json(error)
        console.log(error)
    }
})

//LOGIN
router.post('/login', async (req, res) => {
    try {
        const user = await User.findOne({username: req.body.username})
        !user && res.status(400).json('Wrong credentials')
        const validated = await bcrypt.compare(req.body.password, user.password)
        !validated && res.status(400).json('Wrong credentials')
        const { password, ...others } = user._doc
        res.status(200).json(others)
        return
    } catch (error) {
        res.status(500).json(error)
        return
    }
})


module.exports = router