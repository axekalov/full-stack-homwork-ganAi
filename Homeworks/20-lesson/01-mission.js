// middlewares/requestId.js  
export default (req, res, next) => {  
    try {

        const id = Math.floor(Math.random() * 9000) + 1000;
        
       
        res.locals.requestId = id;
        
       
        console.log({ message: 'Incoming request', requestId: id });
        
        
        next();
    } catch (error) {
        
        console.error(error);
    }
}
//app.use(requestId)
//router.use(requestId)