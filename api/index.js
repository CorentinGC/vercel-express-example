const express = require('express')
const app = express()
const port = 4000

const { 
    isAuth, 
    isUser,
    isAdmin
} = require('./middleware')


app.get('/', [isAuth], (req, res) => {
    res.status(200).json({code: 'You are auth and allowed!'})
})

app.get('/user', [isUser], (req, res) => {
    res.status(200).json({code: 'You are user and allowed'})
})
app.get('/admin', [isAdmin], (req, res) => {
    res.status(200).json({code: 'You are admin and allowed'})
})



app.listen(port, () => {
    console.log(`Example app listening on port ${port}`)
})

module.exports = app;