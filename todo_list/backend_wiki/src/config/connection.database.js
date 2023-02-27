import mongoose from "mongoose"

export const instanceConnection= async()=>{
    const URL='mongodb://127.0.0.1:27017/wikitask_bueno'
    mongoose.set("strictQuery", false)
    let rta= mongoose.connect(URL,{
        useNewUrlParser:true,
        useUnifiedTopology:true
    })
    console.log('base de datos conectada...')
}
