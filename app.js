const express = require("express");
const app = express();
var cors = require('cors');
const morgan =require('morgan');
const bodyParser = require("body-parser");
const brandRoutes = require("./api/routes/brands");
const categoriesRoutes=  require("./api/routes/categories");
const productRoutes = require("./api/routes/products");

app.use(cors());
app.use(morgan("dev"));
app.use(bodyParser.urlencoded({extended : false}));
app.use(bodyParser.json());

//app.use((req,res,next) => {res.header('Access-Control-Allow-Origin’,"*")}
//app.use((req,res,next) => {res.header('Access-Control-Allow-Origin',"*");});
// app.use((req,res,next) => {
//     res.header("Access-Control-Allow-Origin","*");
//     // res.header(
//     //     "Access-Control-Allow-Header",
//     //     "Origin, X-Resquested-with, Content-Type, Accept , Authorization"        
//     //     );
//     if(req.method==='OPTIONS')
//     {
//         res.header("Access-Control-Allow-Methods",'PUT,POST,PATCH,DELETE,GET');
//         return res.status(200).json({});
//     }
// });


app.use("/brands",brandRoutes);
app.use("/categories",categoriesRoutes);
app.use("/products",productRoutes);
app.use("/",(req,res,next)=>{
    res.status(200).json({
        message:"Welcome to xConsol Retail Api"
    });
});

app.use((req,res,next) => {
    const error = Error("Not Found");
    error.status = 404;
    next(error);    
});

app.use((error,req,res,next) => {
    res.status( error.status || 500);
    res.json({
        error:{
            message : error.message
        }
        
    });

});


module.exports = app;