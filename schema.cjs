//import mongoose
const mongoose = require('mongoose')
//define the schema
const restaurantsSchema = new mongoose.Schema({
    areaName : {
        type : String
    },
    avgRating : {
        type : Number
    },
    costForTwo : {
        type : String
    },
    cuisines : {
        type : Array
    },
    imagelink : {
        type : String
    },
    name : {
        type : String
    }
    })
    // model
const Restaurant = mongoose.model('restaurantlist', restaurantsSchema)


    const userSchema = new mongoose.Schema({
        contact : {
            type : String
        },
        email : {
            type : String
        },
        password : {
            type : String
        },userName : {
            type : String
        },
        
    })
    
    const Users = mongoose.model('userDetail', userSchema)
    module.exports = {Restaurant,Users}
    
 


