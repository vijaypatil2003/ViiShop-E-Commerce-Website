import orderModel from "../models/orderModel.js"
import UserModel from "../models/userModel.js";

// Placing Orders Using COD Method
const placeOrder = async (req, res) => {

    try {

        const {userId, items, amount, address} = req.body;

        const orderData = {
            userId,
            items,
            address,
            amount,
            paymentMethod: 'COD',
            payment: false,
            date: Date.now()
        }

        const newOrder = new orderModel(orderData)
        await newOrder.save()

        await UserModel.findByIdAndUpdate(userId, {cartData : {}})

        res.json ({success: true, message:'Order Placed'})
        
    } catch (error) {
        console.log(error);
        res.json({success: false, message: error.message})
        
    }

}

// Placing Orders Using Stripe Method
const placeOrderStripe = async (req, res) => {
    
}

// Placing Orders Using Razorpay Method
const placeOrderRazorpay = async (req, res) => {
    
}

// All Orders data for Admin Panel
const allOrders = async (req, res) => {

    try {

        const orders= await orderModel.find({})
        res.json({success:true, orders})
        
    } catch (error) {
        console.log(error);
        res.json({success: false, message: error.message})
    }
    
}

// user Oredrs data for Frontend
const userOrders = async (req, res) => {

    try {

        const {userId } = req.body
        const orders = await orderModel.find({userId})
        res.json({success: true, orders})
        
    } catch (error) {
        console.log(error);
        res.json({success: false, message: error.message})
    }
    
}

// Update Order Status from Admin Panel
const updateStatus = async (req, res) => {
    
}

export {placeOrder, placeOrderStripe, placeOrderRazorpay, allOrders, userOrders, updateStatus}