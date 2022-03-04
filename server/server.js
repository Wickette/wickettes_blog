const express = require('express')
const db = require('./config/connection');
const aws = require('aws-sdk')
const multer = require('multer')
const multerS3 = require('multer-s3')
const dotenv = require('dotenv')
dotenv.config()

const routes = require('./routes');

const app = express()
const s3 = new aws.S3({accessKeyId: process.env.AWS_ACCESS_KEY_ID, secretAccessKey: process.env.AWS_SECRET_ACCESS_KEY})
const PORT = process.env.PORT || 5000

app.use(express.urlencoded({ extended: true }));
app.use(express.json())

// app.use("/images", express.static(path.join(__dirname, "./images")));

// const storage = multer.diskStorage({
//     destination: (req, file, callback) => {
//         callback(null, './images')
//     },
//     filename: (req, file, callback) => {
//         callback(null, req.body.name)
//     }
// })

// const upload = multer({ storage: storage })
// app.post('/upload', upload.single('file'), (req, res) => {
//     res.status(200).json('File has been uploaded')
// })

const upload = multer({
    storage: multerS3({
      s3: s3,
      bucket: 'wicketteblog-bucket',
      contentType: multerS3.AUTO_CONTENT_TYPE,
      acl: 'public-read',
      metadata: function (req, file, cb) {
        cb(null, {fieldName: file.fieldname});
      },
      key: function (req, file, cb) {
        cb(null, req.body.name)
      }
    })
  })

  app.post('/upload', upload.single('file'), function(req, res) {
    const file = req.file
    console.log(file)
    res.send("success")
  })

if (process.env.NODE_ENV === 'production') {
    app.use(express.static("client/build"));
}

app.use(routes)

db.once('open', () => {
    app.listen(PORT, () => {
        console.log(`API server running on port ${PORT}!`);
    });
});