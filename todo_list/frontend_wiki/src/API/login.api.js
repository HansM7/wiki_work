import axios from "axios";

const base = axios.create({
    baseURL:'http://localhost:4000/api',
    headers:{"Content-Type": "application/json"},
})



export const validateSessionApi=async(data)=>{
    try {
        let headers = {
            "Content-type": "application/json; charset=UTF-8",
            "Authorization": JSON.stringify(data)
        };  
        const reponse = await base.get('/validate_session', {headers:headers})
    } catch (error) {
        
    }
}

export const loginApi=async(data)=>{
    try {
        const response = await base.post('/users/login', data)
        return response
    } catch (error) {
        return error
    }
}