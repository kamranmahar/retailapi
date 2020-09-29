const http = require('http');
const app = require('./app');
const port = process.env.Port || 4000;

const server = http.createServer(app);
// app.use((req,res,next) => {
//     res.status(200).json({
//         message :"Response from App"
//     });
// });
server.listen(port);

// const express = require("express");
// const bodyParser = require("body-parser");
// const Router = express.Router();
// const app = express();

// app.use(bodyParser.json());



// // Router.get('/', function(req, res) {
// //     res.json({ message: 'API is Online!' });   
// // });


// app.use('/api', Router);
// app.listen(4000);


// console.log('Listening on port ' );




