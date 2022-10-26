const mysql = require('mysql')

const cnn = mysql.createConnection({
  host: 'localhost',
  user: 'user',
  password: 'az8779az',
  database: 'kdt',
})

exports.get_visitor = (cb) => {
  const sql = 'SELECT * FROM visitor'
  cnn.query(sql, (err, rows) => {
    if (err) throw err
    console.log('visitors:', rows)

    cb(rows)
  })
}

exports.post_visitor = (data, cb) => {
  var sql = `INSERT INTO visitor(name, comment) values('${data.name}', '${data.comment}');`
  cnn.query(sql, (err, result) => {
    if (err) throw err
    console.log('visitors : ', result)

    cb(result.insertId)
  })
}

//삭제하기
exports.delete_visitor = (id, cb) => {
  //쿼리문 작성
  var sql = `DELETE FROM visitor WHERE id=${id}`
  cnn.query(sql, (err, result) => {
    if (err) throw err
    console.log(result)

    cb()
  })
}

//수정문
exports.get_visitor_by_id = (id, cb) => {
  var sql = `SELECT * FROM visitor WHERE id=${id}`
  //쿼리문 작성
  cnn.query(sql, (err, rows) => {
    if (err) throw err

    cb(rows)
  })
}

exports.update_visitor = (data, cb) => {
  var sql = `UPDATE visitor SET name='${data.name}', comment='${data.comment}' WHERE id=${data.id} `
  cnn.query(sql, (err, result) => {
    if (err) throw err
    console.log(result)
    cb()
  })
}
