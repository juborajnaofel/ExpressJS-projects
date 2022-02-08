require('dotenv').config()
const { request } = require('express')
const express = require('express')
const jwt = require("jsonwebtoken")
const app = express()
const port = 4000

app.use(express.json())

app.post('/login', (req, res) => {
    //user authentication
    const {username,password} = req.body;
    console.log(username + " " + password);
    if(username=="juboraj" && password=="naofel"){
        const user = {name: username}
        console.log(user)
        const access_token = jwt.sign(user, process.env.SECRET_ACCESS_TOKEN);
        res.json({
            access_token: access_token
        })
    }else{
        res.send("Wrong password or user entered!");
    }
})

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})