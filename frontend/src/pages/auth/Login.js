import React, {useState} from 'react'

// functions
import {login } from '../../functions/auth'

// redux
import {useDispatch } from 'react-redux'
import {useNavigate } from 'react-router-dom'

export default function Login() {
    const dispatch =  useDispatch()
    const navigate = useNavigate()

    const [value, setValue] = useState({
        username: "",
        password: "",
      })
    
    const roleBaseRedirect = (role) => {
      if(role === 'admin'){
        navigate('/admin/index')
      }else {
        navigate('/user/index')
        
      }
    };

    const handleChange = (e) => {
        setValue({...value, 
          [e.target.name]: e.target.value
        })
      }

      const handleSubmit = (e) => {
        e.preventDefault()
        // console.log(value)
          login(value).then(res => {
            console.log(res.data)
            // alert(res.data)
            dispatch({type: 'LOGIN',
            payload: {
                token: res.data.token,
                username: res.data.payload.user.username,
                role: res.data.payload.user.role
            }
        });
        localStorage.setItem('token', res.data.token)
        roleBaseRedirect(res.data.payload.user.role)
          }).catch(err => {
            console.log(err.response)
            alert(err.response.data)
          });
      }

  return (
    <div>
      <h1>Login Page</h1>
      <form onSubmit={handleSubmit}>
        <label>Username</label>
        <input type="text" name="username" onChange={handleChange} />
        <label>Password</label>
        <input type='password' name='password' onChange={handleChange}/>

        <button>Submit</button>
      </form>
    </div>
  )
}
