const projects = require('../Models/projectSchema')

//add projects
exports.addProject =async(req,res)=>{
    console.log("inside add project function");
    const {title,languages,github,website,overview,userId}=req.body
    const projectImage=req.file.filename
    // console.log(`${title},${languages},${github},${website},${overview},${projectImage} ,${userId}`);
    try{
        const existingProject = await projects.findOne({github})
        if(existingProject){
            res.status(406).json("project already exist")
        }else{
            const newProject=await projects({
                title,languages,github,website,overview,projectImage,userId
            })
            await newProject.save()
            res.status(200).json(newProject)
        }
    }catch(err){
    res.status(200).json(`Error!!! Transaction failed:${err}`)
    }
}