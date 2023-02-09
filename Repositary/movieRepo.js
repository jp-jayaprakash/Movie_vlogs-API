//import movieSchema from '../Module/movieSchema'

const { query } = require('express');
const { response } = require('../app');
const movieSchema = require('../Module/movieSchema.js')


exports.createMovie = async (data)=>{
        try{
            const createdata = await movieSchema.create(data)
            return createdata;
        }
        catch(err){
            throw err;
        }
    }
exports.getAllMovie= async (query)=>{
    try {
        const data = await movieSchema.aggregate(query)
        return data;
        
    } 
    catch (error) 
    {
        throw error
    }
}

exports.isDeleteMovie = async(delQuery)=>{
    try{
        const data=  await movieSchema.findOneAndUpdate(delQuery[0],delQuery[1]);
        console.log('REPO',data)
        return data;
    }
    catch(err){
        throw err;
    }
}
exports.updateMovie = async(query)=>{
    try {
        const result = await movieSchema.findOneAndUpdate(query[0],query[1])
        return result
    } catch (error) {
        throw error
        
    }
}
exports.searchByMovie = async(query)=>{
    try{
        console.log(">>>>>>>>",query);
        const result = await movieSchema.aggregate(query)
        return result
    }
    catch(error)
    {
        throw error
    }
}
exports.getMovieById = async(query)=>{
    try {
        const result = await movieSchema.find(query[0],query[1])
        return result ;
        
    } catch (error) {
        
        throw error
    }
}