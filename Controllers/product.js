exports.read = async(req,res)=>{
    res.send('Hello Controller Read')
}

exports.list = async(req,res)=>{
    try{
        //code
        res.send('Hello List')

    } catch(err){
        // error
        console.log(err)
        res.status(500).send('Server Error')

    }
}