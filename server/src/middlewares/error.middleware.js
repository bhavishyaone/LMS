export const errrorHandler = (err,req,res,next)=>{
    console.log(err)
    return res.status(500).json({message:"Server Error"})
}
