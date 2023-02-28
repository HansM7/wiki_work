import React, { useEffect, useState } from 'react'
import { useNavigate } from 'react-router-dom'
import { loginApi } from '../API/login.api'
import { validate } from '../hooks/ValidateSession'

function Login() {

    const navigate = useNavigate()

    const [data, setData] = useState({
        username:'',
        password:''
    })

    const [errors, setErrors] = useState({
        connection:false,
        login:false
    })
    
    useEffect(() => {

        (async()=>{
            const response = await validate()
            console.log(response)
        })()

    }, [])

    const handleChange=(e)=>{
        setData({...data,[e.target.name]:e.target.value})
    }

    const handleLogin=async()=>{
        const response = await loginApi(data)

        if(response.response){
            const {error} = response.response.data
            if(error) setErrors({...errors,login:true})
            
        }else{
            setErrors({...errors,login:false})

            const token = response.data.token

            window.localStorage.setItem(import.meta.env.VITE_TOKEN,token)

            // navigate('/task')
            
        }

    }


    return (
        <div className='mt-5' style={{width:'100%',display:'flex', justifyContent:'center'}}>
            <div className='col-6 card p-5'>
                <h1 className='text-muted'>Login</h1>
                <input 
                className='form-control mb-3'
                placeholder='Enter username'
                type="text" 
                name='username'
                autoComplete='off'
                onChange={(e)=>{handleChange(e)}}
                />

                <input 
                className='form-control mb-3'
                placeholder='Enter password'
                type="password"
                name='password'
                onChange={(e)=>{handleChange(e)}}
                />
                <button onClick={()=>handleLogin()} className='btn btn-primary'>Ingresar</button>

                {
                    (errors.login)?(<div className='alert alert-danger mt-3'>
                        Error login
                    </div>):""
                }
                
            </div>
        </div>
    )
}

export default Login