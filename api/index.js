const express = require('express')
const app = express()
const port = 4000


//middleware
app.use((req, res, next) => {
    console.log('Path:', req.url)
    next()
})

app.get('/', (req, res) => {
    res.status(200).json({code: 'HEllo World'})
})

app.get('/auth/:route', (req, res) => {
    console.log('Token', req.headers.authorization)
    res.status(401).json({code: "unauthorized"})
})

app.listen(port, () => {
    console.log(`Example app listening on port ${port}`)
})

module.exports = app;