const movieRepo = require('../Repositary/movieRepo.js');
const errorcode = require('../errorcode.js');
const { checkBody, pagination } = require('../vali.js');
const { param, search } = require('../app.js');

exports.createMovie= async(data)=>{

    try{
        
        const response = await movieRepo.createMovie(data)
        return errorcode.CREATE_SUCESS ;
    }
    catch(err)
    {
        throw err;

    }
}
exports.getAllMovie = async(data)=>{
    try{
        const{page ,limit }= data
        const query = [{ $match: { isDeleted: false } }, { $skip: (page * 1 - 1) * (limit * 1) }, { $limit: limit * 1 }]
        const response = await movieRepo.getAllMovie(query);
        return response ;
        }
    catch(err)
    {
        throw err
    }

}
exports.isDeleteMovie = async(param)=>{
    try {
        const delQuery = [{movieId:param},{isDeleted:false}]
        const response = await movieRepo.isDeleteMovie(delQuery)
        return errorcode.DELETE_SUCESS ;
    } catch (error) {
       throw err ;
        }
    
}
exports.updateMovie = async(param, check)=>{
    try {
        await checkBody(check)
        const query = [{movieId:param},{isRunning:check}]
        const response = await movieRepo.updateMovie(query)
        return errorcode.UPDATE_SUCESS;
        
    } catch (error) {
        if(error.message === errorcode.INVALID_INPUT_FORMAT_ERROR.message)
        {
            return errorcode.INVALID_INPUT_FORMAT_ERROR
        }
    }
}
exports.searchByMovie = async(param)=>{
    try {
        // const {page,limit,param} = data ;
        const MovieName = new RegExp(`^${param}`,"i")
        const query =([
          {$match:{name:MovieName }//,$skip: (page * 1 - 1) * (limit * 1) }, { $limit: limit * 1 }
    }])
       //console.log('12233', query);
        const response = await movieRepo.searchByMovie(query)
        return response
    } catch (error) {
        throw error        
    }
}

exports.getMovieById = async(param)=>{
    try {
        const query =[{movieId:param},{isDeleted:false}];
        const response = await movieRepo.getMovieById(query);
        return response;
    } catch (error) {
        throw error
    }
}
    














