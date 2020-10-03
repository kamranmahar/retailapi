const express = require("express");
const router = express.Router();
const mySqlConnection = require("../db/connection");

router.get('/',(req,res,next) => {
    mySqlConnection.query("select * from brands",(err,rows,fields) => {
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
    mySqlConnection.query(strquery,[obj.ID,obj.Name,obj.Description,obj.Slug,obj.Thumbnail],(err,rows,fields) => {
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
    mySqlConnection.query(strquery,[obj.ID,obj.Name,obj.Description,obj.Slug,obj.Thumbnail],(err,rows,fields) => {
        if(!err)
        {            
            res.status(200).send(rows);
        }else
        {
            console.log(err);
        }
});
});
router.get('/:brandid',(req,res,next)=>{
    id =req.params.brandid;
    mySqlConnection.query("select * from brands where brandid=?",[id],(err,rows,fields) => {
        if(!err)
        {            
            res.status(200).send(rows);
        }else
        {
            console.log(err);
        }
});

});
router.patch('/:brandid',(req,res,next)=>{
    id =req.params.brandid;
    mySqlConnection.query("select * from brands where brandid="+id,(err,rows,fields) => {
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
    mySqlConnection.query("Delete from brands where brandid=?",[id],(err,rows,fields) => {
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
