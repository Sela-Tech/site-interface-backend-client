"use strict";
require("dotenv").config();
const mongoose = require("mongoose"),
Evidence = mongoose.model("Evidence");

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
  
};


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