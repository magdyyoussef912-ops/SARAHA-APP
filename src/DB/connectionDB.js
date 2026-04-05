import mongoose from "mongoose";
import {  DB_URI, DB_URI_ONLINE } from "../../config/config.service.js";

const checkConectionDb = async()=>{
    await mongoose.connect(DB_URI,{serverSelectionTimeoutMS:5000})
        .then(()=>{
            console.log(`success to connect DB ${DB_URI}......😘😘`);
        })
        .catch((err)=>{
            console.log(err,`failed to connect DB.................💔💔`);
        })
}

export default checkConectionDb