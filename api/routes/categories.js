const express = require("express");
const router = express.Router();
const mySqlConnection = require("../db/connection");

router.get('/',(req,res,next) => {
    mySqlConnection.query("select * from categories",(err,rows,fields) => {
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
    let strquery="CALL AddCategory(?,?,?,?,?,?);";
    const categoryid=0;
    mySqlConnection.query(strquery,[categoryid,category.name,category.description,category.slug,category.thumbnail,category.parent],(err,rows,fields) => {
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
    let strquery="CALL AddCategory(?,?,?,?,?,?);";
    mySqlConnection.query(strquery,[category.categoryid,category.name,category.description,category.slug,category.thumbnail,category.parent],(err,rows,fields) => {
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
    mySqlConnection.query("select * from categories where categoryid=?",[id],(err,rows,fields) => {
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
    mySqlConnection.query("select * from categories where categoryid="+id,(err,rows,fields) => {
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
    mySqlConnection.query("Delete from categories where categoryid=?",[id],(err,rows,fields) => {
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
