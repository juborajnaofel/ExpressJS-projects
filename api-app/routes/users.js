const express = require('express')
const db = require('./db.js')
const router = express.Router();
require('dotenv').config()
const jwt = require("jsonwebtoken")

router.get("/", (req, res) => {
    db.query("select * from users", function (err, users, fields) {
        res.send(users);
    });
});

router.post("/", authorizationJWT ,(req, res) => {

    const { fname, lname, cgpa } = req.body;
    console.log(fname);
    console.log(lname);
    console.log(cgpa);
    if (fname && lname && cgpa) {
        try {
            db.promise().query(`INSERT INTO users(fname,lname,cgpa) VALUES('${fname}','${lname}','${cgpa}')`);
            res.status(201).send({ 'msg': 'Created user!' });
            console.log("Records Inserted!");
        } catch (err) {
            console.log(err);
        }

    }
});

function authorizationJWT(req,res, next){
    const access_token_header = req.headers['authorization'];
    const token = access_token_header && access_token_header.split(' ')[1];
    if(token == null){
        return res.sendStatus(401);
    }else{
        jwt.verify(token,process.env.SECRET_ACCESS_TOKEN, (err, user) => {
            if(err){
                return res.sendStatus(403);
            }else{
                req.user = user;
                next();
            }
        });
    }
}
module.exports = router;