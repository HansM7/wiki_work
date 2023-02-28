import { validateSessionApi } from "../API/login.api"


export const validate=async()=>{
    const dataToken = window.localStorage.getItem(import.meta.env.VITE_TOKEN)

    if(dataToken===null){
        return false
    }

    const response = await validateSessionApi(dataToken)

    return response

}