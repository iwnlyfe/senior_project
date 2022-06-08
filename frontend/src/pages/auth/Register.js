import React, {useState} from 'react'
// functions
import { register } from '../../functions/auth'

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
      alert('Password not match')
    } else {
      register(value).then(res => {
        console.log(res.data)
        alert(res.data)
      }).catch(err => {
        console.log(err.response.data)
        alert(err.response.data)
      })
    }
  }

  // console.log(value)
  return (
    <div>
      <h1>Register Page</h1>
      <form onSubmit={handleSubmit}>
        <label>Username</label>
        <input type="text" name="username" onChange={handleChange} />
        <label>Password</label>
        <input type='password' name='password' onChange={handleChange}/>
        <label>Confirm Password</label>
        <input type='password' name='confirmPassword' onChange={handleChange}/>

        <button disabled={value.password.length < 4}>Submit</button>
      </form>
    </div>
  )
}
