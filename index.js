const express = require('express')
const req = require('express/lib/request')
const app = express()
const port = 4000

app.get('/', (req, res) => {
  res.send('Hello World!')
})

app.get('/about', (req, res) => {
  res.send(' About!')
})
app.get('/abc', (req, res) => {
  res.send(' abc!')
})



app.get('/contact', (req,res) =>{
  res.send ('Contact!')
})

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
}) 
