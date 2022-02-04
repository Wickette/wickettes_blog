const router = require('express').Router();
const authRoute = require('./auth')
const userRoute = require('./users')
const postRoute = require('./posts')

router.use('/api/auth', authRoute)
router.use('/api/users', userRoute)
router.use('/api/posts', postRoute)

module.exports = router;