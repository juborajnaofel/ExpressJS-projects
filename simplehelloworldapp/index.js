const express = require('express')
const app = express()
const port = 3000


// normal url with string response
app.get('/', (req, res) => {
    res.send('Home!')
})

app.get('/username', (req, res) => {
    res.send('I.E.U. Juboraj Naofel!')
})

app.get('/priority', (req, res) => {
    res.send('High!')
})



//url params
// GET /user/123
// Id is set to 123
app.get('/user/:Id', function (req, res) {
    res.send("User id " + req.params.Id);
// GET /primeuser?Id=123
// Id is set to 123
// GET /admin-info?Id=123&name=JN
// Id set to 123 and name set to JN
app.get('/admin-info', function (req, res){

    res.send("ID: "+ req.query.Id+", Name: "+req.query.name);
});





//rest api endpoints



app.listen(port, () => {
    console.log(`Example app listening on port ${port}`)
})