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
            alert(err.response)
          });
      }

  return (
    // <div className='page'>
    //   <h1 className=''>Login Page</h1>
    //   <form onSubmit={handleSubmit}>
    //     <label>Username</label>
    //     <input type="text" name="username" onChange={handleChange} className=""/>
    //     <label>Password</label>
    //     <input type='password' name='password' onChange={handleChange} className=""/>

    //     <button>Submit</button>
    //   </form>
    // </div>
    <div class="align">
        <div class="row">
            <div class="col-md-11 mt-60 mx-md-auto">
                <div class="login-box bg-white pl-0">
                <form class="form" onSubmit={handleSubmit}>
                    <div class="row no-gutters align-items-center">
                        <div class="col-md-6">
                            <div class="form-wrap bg-white">
                                <h4 class="btm-sep pb-3 mb-5">Login Page</h4>   
                                <div class="row">
                                    <div class="col-12">
                                        <div class="form-group position-relative">
                                            <span class="zmdi zmdi-account"></span>
                                            <input type="text" class="form-control" name='username' placeholder="username" onChange={handleChange}/>
                                        </div>
                                    </div>
                                    <div class="col-12">
                                        <div class="form-group position-relative">
                                            <span class="zmdi zmdi-email"></span>
                                            <input type="password" name='password' class="form-control" placeholder="Password" onChange={handleChange}/>
                                        </div>
                                    </div>
                                    <div className='col-12 mt-30'>
                                        <button type="submit" class="btn btn-lg btn-custom btn-dark btn-block efbutton">Login</button>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div class="col-md-6" style={{marginTop: '3.5rem'}}>
                            <div class="content text-center">
                                <div class="border-bottom pb-5 mb-5">
                                    <h3 class="c-black">First time here?</h3>
                                    <div class="col-12 mt-30">
                                        <button type="submit" class="btn btn-lg btn-custom btn-dark btn-block efbutton">Sign Up</button>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                     </form>
                </div>
            </div>
        </div>
    </div>
  )
}
