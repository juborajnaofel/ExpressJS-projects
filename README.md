# ExpressJS-projects
<h3>This project is created by I.E.U. Juboraj Naofel. Technologies used,</h3>

1. jwt 
2. express js
3. node js
4. mysql

<h3>Config database here : </h3>

- api-app/routes/db.js



<h3>start 'token-generator-app' at port 4000</h3>

1. cd token-token-generator-app
2. npm start

<h3>create a separate terminal and  start 'api-app' at port 3000.</h3>

1. cd api-app
2. npm start


<h3>generate token</h3>

1. to login make a request to this endpoint  "POST localhost:4000/login" at any restclient, Don't forget to add this json at body>json,
 {
    "username": "juboraj",
    "password": "naofel"
 }

2. after the request entered, you should get an accesstoken at response body
3. copy that access token



<h3>test api</h3>

1. make a request to this endpoint  "GET localhost:3000/users" to see users data
2. make a request to this endpoint  "POST localhost:3000/users" to add a user where,
body>json:
 {
    "fname": "juborasasaj",
    "lname": "naofesasasal",
    "cgpa": 3.84
 }

auth> bearer:
the token you have copied will be pasted



