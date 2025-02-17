exports.isAuth = (req, res, next) => {
    if(!req.headers?.authorization) res.status(401).json({code: "unauthorized"})
    else {

        // Continue to route
        next()
    }
}

exports.isUser = (req, res, next) => {
    if(!req.headers?.authorization) return res.status(401).json({code: "unauthorized"})
    const token = req.headers?.authorization
        console.log('Token is: ', token)
    if(token !== 'Bearer user') return res.status(401).json({code: "unauthorized"})
    // Continue to route
    next()
}