const express = require('express')
const app = express()
require('dotenv').config()
const mongoose = require('mongoose')
const authRoute = require('./routes/auth')
const userRoute = require('./routes/users')
const postRoute = require('./routes/posts')
const categoryRoute = require('./routes/categories')
const multer = require('multer')
const path = require("path");

const PORT = process.env.PORT || 5000

app.use(express.json())
app.use("/images", express.static(path.join(__dirname, "/images")));

mongoose.connect(process.env.MONGODB_URI || 'mongodb://localhost/wickette-blog', {})

mongoose.connection.on('connected', () => {
    console.log('Mongoose is connected')
})

const storage = multer.diskStorage({
    destination: (req, file, callback) => {
        callback(null, 'images')
    },
    filename: (req, file, callback) => {
        callback(null, req.body.name)
    }
})

const upload = multer({ storage: storage })
app.post('/api/upload', upload.single('file'), (req, res) => {
    res.status(200).json('File has been uploaded')
})

app.use('/api/auth', authRoute)
app.use('/api/users', userRoute)
app.use('/api/posts', postRoute)
app.use('/api/categories', categoryRoute)

if(process.env.NODE_ENV === 'production'){
    app.use(express.static('../client/build'))
}

app.listen(PORT, () => {
    console.log(`Backend running at ${PORT}`)
})