import React from 'react'


const Login = () => {
  return (
    <div className='login d-flex justify-content-center align-items-center'>


        <div className='text-center'>

          <div><input placeholder='Username' type='text' className='input px-3 my-2'></input></div>

          <div><input placeholder='password' type='password' className='input px-3 my-2'></input></div>

          <button type='submit' className='btn btn-danger px-5 my-2'>Login</button>

          <p className='text-white-50'>Or Login With</p>
          <div className='fs-2'>
            <span><i class="fa-brands fa-facebook facebook px-2"></i></span>
            <span><i class="fa-brands fa-google youtube"></i></span>
          </div>
              
        </div>

      </div>
        
  )
}

export default Login


