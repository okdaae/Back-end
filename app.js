const { Router } = require('express')
const express = require('express')
const { connect } = require('http2')
const multer = require('multer')
const path = require('path')
const upload = multer({
  storage: multer.diskStorage({
    destination(req, file, done) {
      done(null, 'uploads/')
    },
    filename(req, file, done) {
      const ext = path.extname(file.originalname) //파일 확장자
      //   done(null, path.basename(file.originalname, ext) + Date.now() + ext)
      done(null, req.body.id + ext)
    },
  }),
  limits: { fileSize: 5 * 1024 * 1024 }, //5mb
})
//이까지 작성
// 이미지를 업로드하는 라우트
// Router.post('/upload', upload.single('selectImg'), (req, res) => {
//   res.json({ filename: `${req.file.filename}` })
// })
// //form fate생성 => 프론트
// const formData = new formData()
// formData.append('selectImg', image)

const app = express()
app.set('view engine', 'ejs')
app.use('.static', express.static('static'))
app.use('/uploads', express.static('uploads'))
const port = 8000

app.use(express.urlencoded({ extended: false }))
app.use(express.json())

app.post('/uploads', upload.fields('userfile'), (req, res) => {
  console.log(req.body)
  console.log(req.files)
  res.send('그냥 업로드 성공했어요.')
})

app.listen(port, () => {
  console.log('server open: ', port)
})

app.get('/post', (req, res) => {
  //이거 실행시키겠다.
  console.log(req.body)
  res.render('main')
})

app.get('/', (req, res) => {
  res.render('main')
})

app.get('/navbar', (req, res) => {
  res.render('navbar')
})
app.post('/upload', upload.single('userfile'), function (req, res) {
  console.log(req.file)
  res.send(req.file.filename)
})
// app.get('/', (req, res) => {
//   console.log(req.query)
//   res.render('main')
// })
// app.get('/', (req, res) => {
//   console.log(req.query)
//   res.render('login', {
//     name: req.query.name,
//     gender: req.body.gender,
//   })
// })
