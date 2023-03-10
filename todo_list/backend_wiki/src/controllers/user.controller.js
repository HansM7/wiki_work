import { userService } from "../services/user.service.js"
import jwt from 'jsonwebtoken'
import 'dotenv/config'


/*
    {
        username:"",
        password: "dawdwadawdwadadadawdawdwadawpidjawpdojwa´pdoaj"
    }
    */
export const createUserController=async(req,res)=>{
    const response = await userService.createUserService(req.body)
    res.status(response.code).json(response.content)
}


export const loginController=async(req,res)=>{
    const response = await userService.loginService(req.body)
    
    if(response.success){
        const user ={
            username: response.user.username,
            password: response.user.password
        }
        const token = jwt.sign(user, process.env.TOKEN_ENTRY)
        res.status(response.code).json({...response.content,token})
    }else{
        res.status(response.code).json(response.content)
    }
}



export const validateSessionController=async(req,res)=>{
    const token = req.get('authorization')
    const decode = jwt.decode(token, process.env.VAL_TOK_ENTRY)

    /*
    
    {
        username,
        password
    }
    */

    if(decode){
        const response = await userService.validateSession(decode)
        res.status(response.code).json(response.content)
    }
    else{
        console.log("token is not available");
    }
}