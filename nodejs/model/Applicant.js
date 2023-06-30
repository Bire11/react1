const mongoose= require('mongoose')
const Schema= mongoose.Schema
let applicantSchema=new Schema({
    first_name:{
        type:String

    },
    last_name:{
        type:String
    },
    email:{
        type:String,
        required:true,
        unique:true

    },
    gender:{
        type:String
    },
    phone_number:{
        type:String
    },
    date_updated:{
        type:Date,
        default:Date.now
    }
},
{
   collection:'applicants'
})
module.exports=mongoose.model('Applicant',applicantSchema)