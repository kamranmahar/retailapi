const express = require("express");
const router = express.Router();
const mySqlConnection = require("../db/connection");

router.get('/',(req,res,next) => {
    mySqlConnection.query("select * from media",(err,rows,fields) => {
        if(!err)
        {            
            res.status(200).send(rows);
        }else
        {
            console.log(err);
        }
});
});

router.post('/',(req,res,next) => {
    let  obj= req.body;
    
    let strquery="CALL AddUpdateBrands(?,?,?,?,?);";
    let id=0;
    mySqlConnection.query(strquery,[id,obj.name,obj.description,obj.slug,obj.thumbnail],(err,rows,fields) => {
        if(!err)
        {            
            res.status(200).send(rows);
        }else
        {
            console.log(err);
        }
});
});
router.put('/',(req,res,next) => {
    let obj = req.body;
    let strquery="CALL AddUpdateBrands(?,?,?,?,?);";
    console.log(obj);
    mySqlConnection.query(strquery,[obj.brandid,obj.name,obj.description,obj.slug,obj.thumbnail],(err,rows,fields) => {
        if(!err)
        {            
            res.status(200).send(rows);
        }else
        {
            console.log(err);
        }
});
});
router.get('/:mediaid',(req,res,next)=>{
    id =req.params.mediaid;
    mySqlConnection.query("select * from media where mediaid=?",[id],(err,rows,fields) => {
        if(!err)
        {            
            res.status(200).send(rows);
        }else
        {
            console.log(err);
        }
});

});
router.patch('/:mediaid',(req,res,next)=>{
    id =req.params.mediaid;
    mySqlConnection.query("select * from brands where mediaid="+id,(err,rows,fields) => {
        if(!err)
        {            
            res.status(200).send(rows);
        }else
        {
            console.log(err);
        }
});

});

router.delete('/:brandid',(req,res,next)=>{
    id =req.params.brandid;
    mySqlConnection.query("Delete from brands where mediaid=?",[id],(err,rows,fields) => {
        if(!err)
        {            
            res.status(200).json({
                message:"category Deleted",                
            });
        }else
        {
            console.log(err);
        }
});

});

module.exports = router;
