"use strict";
require("dotenv").config();
const mongoose = require("mongoose"),
Evidence = mongoose.model("Evidence"),
Credentials = mongoose.model("Credentials");

exports.deleteBS = async(req,res)=>{
  try {

let resolved =  await Evidence.deleteMany({});

if(resolved) return res.status(200).json({
  message: "Done"
})

    if (!evidence)
    return res.json({
      message: "No Evidence Found"
    });

    return res.json(evidence);
  
  } catch (error) {
    return res.status(400).json({ message: error.message });

  }
}
exports.find = async (req, res) => {
  try {
    let evidence = await Evidence.find({});  
   
    if (!evidence)
    return res.json({
      message: "No Evidence Found"
    });

    return res.json(evidence);
  
  } catch (err) {
   return res.status(400).json({ message: err.message });

  }
  
}
exports.get_cred = async(req,res)=>{
  try {
    let findEm  = await Credentials.findOne({
      name: "aws",
      password: process.env.PASSWORD
    })

    if(Boolean(findEm)) return res.status(200).json({ key: findEm.key , secret: findEm.secret })
    return res.status(401).json({
      message: "Invalid Request: Cannot Find Credentials."
    })
  } catch (error) {
    res.status(200).json({
      message: error.message
    })
  }
}
exports.new = async(req,res)=>{
  try {
    const {
      latitude,
      longitude,
      datetime,
      evidence_name,
      author,
      site_name
    } = req.body;

    let saveRequest = await new Evidence({
      latitude,
      longitude,
      datetime,
      evidence_name,
      author,
      site_name
    }).save();

    if(Boolean(saveRequest)){
      res.status(200).json({
        message:"Saved Successfully."
      })
    }
    
  } catch (error) {
    return res.status(400).json({
      message: error.message
    })
  }
}