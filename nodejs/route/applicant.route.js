const mongoose= require('mongoose')
const express=require('express')
const router= express.Router()
const applicantSchema=require('../model/Applicant')
const courseSchema = require('../model/Course')
const addressSchema= require('../model/Address')
router.post('/application',(req,res)=>{
    applicantSchema.create(req.body)
    .then(data =>res.json({message:'Data addedsuccessfully'}))
    .catch(err => res.status(400).json({err:'unable to add this data'}));

})
router.get('/list-applicant',(req,res) =>{
    applicantSchema.find()
    .then(data => res.json(data))
    .catch(err => res.status(400).json({nodata:'No data found'}))
})
router.get ('/update-applicant/:id',(req,res)=>{
    applicantSchema.findById(req.params.id)
    .then(data=> res.json(data))
    .catch(err=>res.status(404).json({err:'Data not found'}))
})
router.put('/update-applicant/:id',(req,res) => {
    applicantSchema.findByIdAndUpdate(req.params.id,req.body)
    .then(data => res.json({msg:'Data Updated'}))
    .catch(err=> res.status(404).json({err:'Data not found'}))
})
router.delete('/delete-applicant/:id', (req, res) => {
    applicantSchema.findByIdAndRemove(req.params.id, req.body)
      .then(data => res.json({msg:'Data is successfully deleted.'}))
      .catch(err => res.status(400).json({error: 'Data not deleted'}));
  });


router.post('/registerCourse',(req,res)=>{
    courseSchema.create(req.body)
    .then(data =>res.json({message:'Data addedsuccessfully'}))
    .catch(err => res.status(400).json({err:'unable to add this data'}));

})
// router.post('/registerCourse',(req,res)=>{
//   courseSchema.create(req.body)
//   .then(data =>res.json({message:'Data addedsuccessfully'}))
//   .catch(err => res.status(400).json({err:'unable to add this data'}));

// })
router.post('/login',(req,res)=>{
res.send({
  token:'test123'
})
});

router.get('/logout',(req,res)=>{
res.send({
  token:'test123'
})
});
const  ObjectID = require('mongoose').Types.ObjectId;
router.get('/applicantDetail/:id', (req, res) =>{
applicantSchema.aggregate([
  {
    $match : {
    '_id': new ObjectID(req.params.id)}}, // casting string to objectID
    // and matching the id from applicant collection
  {
    $lookup: { // joining from course 
    from:'course',
    localField: '_id',
    foreignField: 'applicant',
    as: 'course'
  }}
])
//console.log(res.data)
.then(data => res.json(data))
.catch(err => res.status(400).json({error: 'Unable to aggregate'}))
});
module.exports=router