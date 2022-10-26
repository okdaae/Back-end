const Test = require('../model/Test')

exports.main = (req, res) => {
  res.render('login')
}

exports.login = (req, res) => {
  const loginData = Test.loginData()
  console.log(req.body)
  console.log(loginData)
}

exports.login = (req, res) => {
  const loginData = Test.loginData()
  console.log(req.body)
  console.log(loginData)

  const data = {
    id: req.body.id,
    pw: req.body.pw,
  }
  if (req.body.id === loginData.id && req.body.pw === loginData.pw) {
    res.send('good')
  } else {
    res.send('bad')
  }
}
