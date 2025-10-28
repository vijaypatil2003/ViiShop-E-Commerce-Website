import {v2 as cloudinary} from "cloudinary"

const connectCloudinary = async () => {
    cloudinary.config ( {
        cloud_name: process.env.CLOUDNAINARY_NAME, 
        api_key: process.env.CLOUDNAINARY_API_KEY,
        api_secret: process.env.CLOUDNAINARY_SECRET_KEY,
    })
}

export default connectCloudinary;