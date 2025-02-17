const express = require('express')
const app = express()
const port = 4000


app.get('/', (req, res) => {
    res.status(200).send({code: 'Hello World!'})
})

app.route('/auth')
    .get('/', (req, res) => {
        res.status(200).send({code: 'Login path'})
    })

app.listen(port, () => {
    console.log(`Example app listening on port ${port}`)
})

module.exports = app;