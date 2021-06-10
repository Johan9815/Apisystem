const express = require('express')
const app = express()
require('dotenv').config()
const indexRouter = require('./src/routes/index') 

app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use('/',indexRouter)


app.listen(process.env.SERVER, () => {
    console.log(`Example app listening at http://localhost:${process.env.SERVER}`)
});