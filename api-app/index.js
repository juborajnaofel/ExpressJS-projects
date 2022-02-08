const express = require('express')
var bodyParser = require('body-parser');
const userRoutes = require('./routes/users.js')

const app = express()
const port = 3000

app.use(bodyParser.json());
app.use("/users", userRoutes)
app.get('/', (req, res) => res.send('From Homepage'));


app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})