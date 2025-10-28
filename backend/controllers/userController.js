import validator from 'validator'
import bcrypt from 'bcrypt'
import jwt from 'jsonwebtoken'
import UserModel from "../models/userModel.js"

// JWT Token
const createToken = (id) => {
    return jwt.sign({id}, process.env.JWT_SECRET)
}


//--------------------Route for user Login --------------------


const loginUser = async (req, res) => {

    try {
        const {email, password} = req.body

        const user = await UserModel.findOne({email:email})
        if (!user){
            return res.json({success: false, message: "user doesnot exit"})
        }

        // if if email & password match then create a token of email and send it

        const isMatch = await bcrypt.compare(password, user.password)
        if(isMatch){
            const token = createToken(user._id)
            res.json({success:true, token})
        }
        else{
            res.json({success: false, message: "Plese check the password"})
        }
            
    } catch (error) {
        console.log(error);
        res.json({success: false, message: error.message})
        
        
    }

}



//-------------------- Route for user Register--------------------

const registerUser = async (req, res) => {

    try {
        const {name, email, password} = req.body

        // check user already exit or not
        const exists = await UserModel.findOne({email:email})
        if (exists){
            return res.json({success: false, message: "User Already Exits"})
        }

        // validating emailid and password
        if(!validator.isEmail(email)){
            return res.json({success: false, message: "Please Enter a Valid Email"})
        }
        if (password.length < 8){
            return res.json({success: false, message: "make sure password is strong and length is greater than 8"})
        }

        // hash password
        const salt = await bcrypt.genSalt(10)
        const hashedPassword = await bcrypt.hash(password, salt)

        // Create User
        const newUser = new UserModel({
            name:name, 
            email:email, 
            password: hashedPassword
        })
        const user =await newUser.save()

        const token = createToken(user._id)

        res.json({success: true, token})
        
    } catch (error) {
        console.log(error);
        res.json({success: false, message: error.message})
        
        
    }
    
     
}



//-------------------- Route for admin Register--------------------

const adminLogin  = async (req, res) => {

    try {
        
        const {email, password} = req.body;

        if (email === process.env.ADMIN_EMAIL && password === process.env.ADMIN_PASSWORD){
            const token = jwt.sign(email+password, process.env.JWT_SECRET)
            res.json({success: true, token})
        }
        else{
            res.json({success: false, message:"Invalid Crential"})
        }


    } catch (error) {
        
        console.log(error);
        res.json({success: false, message: error.message})
    }

}


export {loginUser, registerUser, adminLogin}