import axios from "axios";

const base = axios.create({
    baseURL:'http://localhost:4000/api',
    headers:{"Content-Type": "application/json"},
})

export const findTasksTemporal=async()=>{
    try {
        const tasks = await base.get('/tasks/temporal')
        console.log(tasks)
    } catch (error) {
        return error
    }
}


