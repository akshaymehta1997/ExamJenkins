const express = require('express')
const bodyParser = require('body-parser')
const db = require('./db')
const cors=require('cors')
const app=express()

app.use(bodyParser.json())
app.use(cors('*'))

app.post('/emp', (request, response) => {
  const { name, salary, age } = request.body
  const statement = `Select * from Emp`
    console.log(statement)
  db.query(statement, (error, result) => {
    if (error) {
        console.log(error);
      response.send({ status: 'error' })
    } else {
      response.send({ status: 'success', data: result })
    }
  })
})


app.listen(4000, '0.0.0.0', () => {
  console.log(`server started om port 4000`)
})