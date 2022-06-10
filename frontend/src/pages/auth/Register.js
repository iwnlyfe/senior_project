import React, {useState} from 'react'
// functions
import { register } from '../../functions/auth'
import Swal from 'sweetalert2'
import { Link } from 'react-router-dom'

export default function Register() {
  const [value, setValue] = useState({
    username: "",
    password: "",
    confirmPassword: ""
  })

  const handleChange = (e) => {
    setValue({...value, 
      [e.target.name]: e.target.value
    })
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    // console.log(value)
    if (value.password !== value.confirmPassword){
      Swal.fire({
        icon: 'error',
        title: 'Password not match!!',
        text: 'Try again.'
      })
      // alert('Password not match')
    } else {
      register(value).then(res => {
        Swal.fire(
          'username: '+ value.username,
          res.data,
          'success'
        )
      }).catch(err => {
        Swal.fire('แจ้งเตือน',
          err.response.data,
          'error'
        )
        // console.log(err.response.data)
        // alert(err.response.data)
      })
    }
  }

  // console.log(value)
  return (
    
    // <div>
    //   <h1>Register Page</h1>
    //   <form onSubmit={handleSubmit}>
    //     <label>Username</label>
    //     <input type="text" name="username" onChange={handleChange} />
    //     <label>Password</label>
    //     <input type='password' name='password' onChange={handleChange}/>
    //     <label>Confirm Password</label>
    //     <input type='password' name='confirmPassword' onChange={handleChange}/>

    //     <button disabled={value.password.length < 4}>Submit</button>
    //   </form>
    // </div>
    <div class="align">
      <div class="row">
          <div class="col-md-11 mt-60 mx-md-auto">
              <div class="login-box bg-white pl-0">
                  <div class="row no-gutters align-items-center">
                      <div class="col-md-6">
                          <div class="form-wrap bg-white" >
                              <h4 class="btm-sep pb-3 mb-5">Register Page</h4>
                              <form class="form" onSubmit={handleSubmit}>
                                  <div class="row" style={{marginBottom: '-15px'}}>
                                      <div class="col-12">
                                          <div class="form-group position-relative">
                                              <span class="zmdi zmdi-account"></span>
                                              <input type="text" class="form-control" name='username' placeholder="username" onChange={handleChange} required/>
                                          </div>
                                      </div>
                                      <div class="col-12">
                                          <div class="form-group position-relative">
                                              <span class="zmdi zmdi-email"></span>
                                              <input type="password" name='password' class="form-control" placeholder="Password" onChange={handleChange} required/>
                                          </div>
                                      </div>
                                      <div class="col-12">
                                          <div class="form-group position-relative">
                                              <span class="zmdi zmdi-email"></span>
                                              <input type="password" name='confirmPassword' class="form-control" placeholder="confirm Password" onChange={handleChange} required/>
                                          </div>
                                      </div>
                                      <div class="col-12 mt-30 ">
                                        <button class="btn btn-lg btn-custom btn-dark btn-block efbutton" disabled={value.password.length < 4}>Sign Up</button>
                                    </div> 
                                  </div>
                              </form>
                          </div>
                      </div>
                      <div class="col-md-6" style={{marginTop: '3.5rem'}}>
                          <div class="content text-center">
                              <div class="border-bottom pb-5 mb-5">
                                  <h3 class="c-black">Have your account?</h3>
                                  <div class="col-12 mt-30 ">
                                      <Link to='/login'>
                                        <button type="submit" class="btn btn-lg btn-custom btn-dark btn-block efbutton">Sign In</button>
                                      </Link>
                                  </div>
                              </div>
                          </div>
                      </div>
                  </div>
              </div>
          </div>
      </div>
    </div>
  )
}
