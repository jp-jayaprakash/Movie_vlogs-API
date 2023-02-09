const mongoose = require('mongoose')
require('dotenv').config();

const DBconnect = async()=>{
    mongoose.set('strictQuery', false);
    const connect = await mongoose.connect(process.env.DB_CONNECTION)
    console.log(`DB connction sucessful ${connect.connection.host}`);
}
module.exports = DBconnect ;
