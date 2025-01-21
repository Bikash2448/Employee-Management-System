import { userModel } from "../Model/userModel.js";
export const getUser = async (req,res) => {
    try{
        const user = await userModel.find();
        res.json(user);
    }
    catch(e){
        res.status(500).json({message:"Error in fetching user data"});
    }
}
export const getuserByid = async (req,res)=>{
    try{
        const user = await userModel.findById(req.params.id);
        res.json(user)
    }
    catch(e){
        console.log("fail in controller")
        res.status(400).json({message:e.message})
    }
}

export const saveUser = async (req,res)=>{

    const user = new userModel(req.body);
    

    try{
        const inserteuser = await user.save();
        res.status(201).json(inserteuser)
    }catch(e){
        res.status(400).json({message:e.message})
    }
}

export const updateUser = async (req,res)=>{
    try{
        const user = await userModel.updateOne({_id:req.params.id},{$set:req.body})
        res.status(200).json(user)
    }
    catch(e){
        res.status(400).json({message:e.message})
    }
}

export const deleteUser = async (req, res)=>{
    try{
        const user = await userModel.deleteOne({_id:req.params.id})
        res.status(200).json(user)
    }
    catch(e){
        res.status(400).json({message:e.message})
    }
}