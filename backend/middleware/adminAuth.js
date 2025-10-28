import jwt from 'jsonwebtoken'

const adminAuth = async (req, res, next) => {
    try {
        const {token} = req.headers
        if (!token) {
            return res.json ({success: false, message : "Not Authorised Login Again"})
        }

        const token_decode = jwt.verify(token, process.env.JWT_SECRET);
        if (token_decode !== process.env.ADMIN_EMAIL + process.env.ADMIN_PASSWORD){
            return res.json ({success: false, message : "Not Authorised Login Again"})
        }
        next()

    } catch (error) {
        console.log(error);
        res.json({success: false, message: error.message})
        
    }
}

export default adminAuth;

// eyJhbGciOiJIUzI1NiJ9.YWRtaW5Admlpc2hvcC5jb21hZG1pbkB2aWlzaG9wLmNvbQ.gGPSHC5mxpjsF3cQVQYe6ReF4mkJkEnDAdGDYG0QEas
