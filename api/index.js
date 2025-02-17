const express = require('express')
const app = express()
const port = 4000

const isAuth = (level=1, req, res) => {
    console.log('Token', req.headers.authorization)

    if(level < 10) res.status(401).json({code: "unauthorized"})
}
//middleware
app.use((req, res, next) => {
    console.log('Path:', req.url)
    next()
})

app.get('/', (req, res) => {
    res.status(200).json({code: 'HEllo World'})
})

app.get('/auth/:route', (req, res) => {
    isAuth(12, req, res)
    res.status(200).json({code: "auth"})
})

app.listen(port, () => {
    console.log(`Example app listening on port ${port}`)
})

module.exports = app;