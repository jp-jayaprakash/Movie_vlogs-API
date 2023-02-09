
const movieService = require('../Service/movieService.js')
const { v4: uuidv4 } = require('uuid');
const  {pagination, checkId } = require('../vali.js');
const errorcode = require('../errorcode.js');

//async function createMovie(req, res){
exports.createMovie= async(req, res)=>{    
    try{
         req.body.movieId = uuidv4();
        //let data = req.body;
       
        const result = await movieService.createMovie(req.body);
        
        res.status(201).json({
            result
        })
    }
    catch(err)
    {
        throw err
    }
}

exports.getAllMovie = async(req, res)=>{
    try{
        let page  = req.query.page || 1;
        let limit =req.query.limit || 10;
        const data =await pagination(page,limit);
        const result = await movieService.getAllMovie(data)
        
        res.status(200).json({
            result
        })
    }
    catch(err){
        
        if(err.message == errorcode.INVALID_INPUT_FORMAT_ERROR.message){
            console.log(err.message == errorcode.INVALID_INPUT_FORMAT_ERROR.message);
            res
            .status(errorcode.INVALID_INPUT_FORMAT_ERROR.status)
            .send(errorcode.INVALID_INPUT_FORMAT_ERROR)
        }

    }
}
exports.isDeleteMovie= async(req, res)=>{
    try{
        let param = req.params.id;
      await checkId(param)
        const key = await movieService.isDeleteMovie(param)
        res.status(200).json({
            key
        })
    }
    catch(err)
    {
        if(err.message === errorcode.INVALID_ID.message){
            res
            .status(errorcode.INVALID_ID.status)
            .send(errorcode.INVALID_ID)
        }
    }
}
exports.updateMovie= async(req, res)=>{
    try {
        let param = req.params.id;
        let check = req.body.isRunning;
        await checkId(param)
        const value = await movieService.updateMovie(param,check)
        res.status(200).json({
            value
        })
        
    } catch (error) {
        if(error.message === errorcode.INVALID_ID.message){
            res
            .status(errorcode.INVALID_ID.status)
            .send(errorcode.INVALID_ID)
        }
        
    }
}
exports.searchByMovie = async(req, res)=>{
    try{
        console.log(">>>>>>>>>",req.query.name);
        // let limit = req.query.limit;
        // let page = req.query.page;
        let param = req.query.search;
        // const data = await pagination(limit,page,param)
        const result = await movieService.searchByMovie(param)
        res.status(200).json({
            result
        })
    }
    catch(error)
    {
        throw error
    } 
}
exports.getMovieById = async (req, res)=>{
    try {
       
        let param = req.params.id;
       await checkId(param)
        const get = await movieService.getMovieById(param)
        res.status(200).json({
            get
        })
    } catch (error) {
        if(error.message=== errorcode.INVALID_ID.message){
            res
            .status(errorcode.INVALID_ID.status)
            .send(errorcode.INVALID_ID)

        }
        
        
    }
}
//exports.module(createMovie)