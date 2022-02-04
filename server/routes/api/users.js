const router = require('express').Router()
const User = require('../../models/User')
const bcrypt = require('bcrypt')

//UPDATE USER
router.put('/:id', async (req, res) => {
    if(req.body.userId === req.params.id){
        if(req.body.password){
            const saltRounds = 10
            const salt = await bcrypt.genSalt(saltRounds)
            req.body.password = await bcrypt.hash(req.body.password, salt)
          }
    try {
          const updatedUser = await User.findByIdAndUpdate(req.params.id, {
              $set: req.body,
          }, {new: true})
        res.status(200).json(updatedUser)
    } catch (error) {
        res.status(500).json(error)
        console.log(error)
    }
    } else {
        res.status(401).json('You can only update your account')
    }
})

//DELETE USER
router.delete('/:id', async (req, res) => {
    if(req.body.userId === req.params.id){
        try {
        const user = await User.findById(req.params.id);
            try {
                await User.findByIdAndDelete(req.params.id)
                res.status(200).json('User has been deleted')
            } catch (error) {
                res.status(500).json(error)
                console.log(error)
            }
    } catch (error) {
        res.status(404).json('No user found')
    }
    } else {
        res.status(401).json('You can only delete your account')
    }
})

//GET USER
router.get('/:id', async (req, res) => {
    try {
        const user = await User.findById(req.params.id)
        const { password, ...others } = user._doc
        res.status(200).json(others)
    } catch (error) {
        res.status(500).json(error)
    }
})

module.exports = router