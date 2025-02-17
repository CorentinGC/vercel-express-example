const verifToken = (req) => {
    // check token presence
    if(!req.headers?.authorization) return false

    //check token validity
    return {
        email: "john@doe.com",
        level: "user"
    }
}
exports.isAuth = (req, res, next) => {
    const token = verifToken(req)
    if(!token) return res.status(401).json({code: "unauthorized"})

    // Continue to route
    next()
}

exports.isUser = (req, res, next) => {
    const token = verifToken(req)
    if(!token) return res.status(401).json({code: "unauthorized"})

    if(token.level !== 'user') return res.status(401).json({code: "unauthorized"})

    // Continue to route
    next()
}

exports.isAdmin = (req, res, next) => {
    const token = verifToken(req)
    if(!token) return res.status(401).json({code: "unauthorized"})

    if(token.level !== 'admin') return res.status(401).json({code: "unauthorized"})

    // Continue to route
    next()
}