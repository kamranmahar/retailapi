const express = require("express");
const router = express.Router();
const mySqlConnection = require("../db/connection");

router.get('/',(req,res,next) => {
    mySqlConnection.query("select * from Categories",(err,rows,fields) => {
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
    let category = req.body;
    let strquery="CALL AddCategory(?,?,?,?,?);";
    mySqlConnection.query(strquery,[category.ID,category.Name,category.Description,category.Slug,category.Thumbnail],(err,rows,fields) => {
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
    let category = req.body;
    let strquery="CALL AddCategory(?,?,?,?,?);";
    mySqlConnection.query(strquery,[category.ID,category.Name,category.Description,category.Slug,category.Thumbnail],(err,rows,fields) => {
        if(!err)
        {            
            res.status(200).send(rows);
        }else
        {
            console.log(err);
        }
});
});
router.get('/:categoryid',(req,res,next)=>{
    id =req.params.categoryid;
    mySqlConnection.query("select * from Categories where ID=?",[id],(err,rows,fields) => {
        if(!err)
        {            
            res.status(200).send(rows);
        }else
        {
            console.log(err);
        }
});

});
router.patch('/:categoryid',(req,res,next)=>{
    id =req.params.categoryid;
    mySqlConnection.query("select * from Categories where ID="+id,(err,rows,fields) => {
        if(!err)
        {            
            res.status(200).send(rows);
        }else
        {
            console.log(err);
        }
});

});

router.delete('/:categoryid',(req,res,next)=>{
    id =req.params.categoryid;
    mySqlConnection.query("Delete from Categories where ID=?",[id],(err,rows,fields) => {
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
