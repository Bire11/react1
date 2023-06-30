const mongoose= require('mongoose')
const Schema= mongoose.Schema
let courseSchema=new Schema({
    
    course_name:{
        type:String

    },
    applicant:{
        type:Schema.Types.ObjectId,
        ref:'Applicant'
    },

    date_updated:{
        type:Date,
        default:Date.now
    }
},
{
   collection:'course'
})
module.exports=mongoose.model('Course',courseSchema)
