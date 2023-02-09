const errorcode = require("./errorcode.js");
const movieSchema = require("./Module/movieSchema.js");
const _ = require('lodash')


exports.pagination = async(page,limit)=>{
    console.log(typeof page,typeof limit);

    if(typeof (page =="string") && typeof (limit=="string")){
        page = parseInt(page);
        limit = parseInt(limit);
        if(isNaN(page) || isNaN(limit)){
            throw new Error(errorcode.INVALID_INPUT_FORMAT_ERROR.message)
        }
        else{
            return {page:page,limit:limit};
        }
    }
    else{
        return {page:page,limit:limit};
    }
    
}

exports.checkId = async(movieid)=>{
    const response = await movieSchema.find({movieId:movieid},{isDeleted:false});
    if(response.length == 0){
        throw new Error(errorcode.INVALID_ID.message)
    }
    
}
exports.checkBody = async(update)=>{
    if(_.isString(update)&& update !="" )
    {
         return {update} 
    }
    else{
        throw new Error(errorcode.INVALID_INPUT_FORMAT_ERROR.message)
    }
    
}