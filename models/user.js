const mongoose = require("mongoose");

const userSchema = mongoose.Schema({
    name : {
        type : String,
        required : true
    },
    father_name : {
        type : String,
        required : true
    },
    mobile_no : {
        type : Number,
        required : true
    },
    aadhar_no : {
        type : Number,
        required : true
    },
    pan_no : {
        type : String,
        required : true
    },
    dob : {
        type : String,
        required : true
    },
    photo : {
        type : String,
        required : true
    },
    id_proof : {
        type : String,
        required : true
    },
    address_proof : {
        type : String,
        required : true
    },
    opening_date : {
        type : String,
        required : true
    },
    full_address : {
        type : String,
        required : true
    },
    account_no: {

    }
}, {
    timestamps: true,
}
)

const User = mongoose.model("User", userSchema);

module.exports = User;