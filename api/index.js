const express = require('express')
const app = express()
const port = 4000

const { 
    isAuth, 
    isUser
} = require('./middleware')


app.get('/', [isAuth, isUser], (req, res) => {
    res.status(200).json({code: 'HEllo World'})
})


app.listen(port, () => {
    console.log(`Example app listening on port ${port}`)
})

module.exports = app;