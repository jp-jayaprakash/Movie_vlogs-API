const express = require("express");
const DBconnect = require("./dbConnect.js");
const app = express();
const  router  = require("./routes/index.js");

const swaggerJSDoc= require ('./swagger.json')
const swaggerUi = require ('swagger-ui-express')

//const swaggerspec = swaggerJSDoc(option)
    app.use ('/api-docs', swaggerUi.serve ,swaggerUi.setup(swaggerJSDoc))


 app.use(express.json());
 app.use('/v1', router)

 DBconnect();
const port = process.env.PORT|| 4004;
app.listen  (port,()=>{
    console.log(`app is running on port ${port}`);
})
module.exports= app