const express = require("express");
const router = express.Router();

 const mySqlConnection = require("../db/connection");

router.get('/',(req,res,next)=>{
    mySqlConnection.query("select * from Products",(err,rows,fields) => {
        if(!err)
        {            
            res.status(200).send(rows);
        }else
        {
            console.log(err);
        }
});
});
router.post('/',(req,res,next)=>{
    res.status(200).json({
        message:"Message from post Route"
    });
});
router.patch('/:productid',(req,res,next)=>{
    id =req.params.productid;
    res.status(200).json({
        message:"Message from patch Route"+id
    });
//     query ="select * from Products where ID="+id;
//     mySqlConnection.query(query,(err,rows,fields) => {
//         if(!err)
//         {            
//             res.status(200).send(rows);
//         }else
//         {
//             console.log(err);
//         }
// });
});

router.delete('/:productid',(req,res,next)=>{
    id =req.params.productid;
    res.status(200).json({
        message:"Message from delete Route"+id
    });
});
module.exports = router;
