const express = require('express')
const app = express()
const port = 4000


app.get('/', (req, res) => {
    res.status(200).send('hello world')
})

app.get('/auth/:route', (req, res) => {
    res.status(200).send('Auth path')
})

app.listen(port, () => {
    console.log(`Example app listening on port ${port}`)
})

module.exports = app;