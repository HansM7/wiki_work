import axios from 'axios'
import React, { useEffect } from 'react'
import { findTasksTemporal } from '../API/task.api'

function Task() {

    console.log("waiting data ....")

    useEffect(() => {
        (async()=>{
            const response = await findTasksTemporal()
            if(axios.isAxiosError(response)){
                console.log(response.code)

            }
        })()
    }, [])
    


    return (
        <div>

            

        </div>
    )
}

export default Task