import React from 'react'
import logo from '../../images/logo.png'
const Footer = () => {
  return (
    <>
    <div className='footer-top'>
        <div className='container'>
            <div className='row py-5 align-items-center'>
                <div className='col-md-6 col-lg-4'>
                    <h4>Subscribe to our Newsletter:</h4>
                </div>
                <div className='col-md-6 col-lg-6'>
                    <input type='text' className='Email w-100 p-2 bg-transparent' placeholder='Enter your Email'></input>
                </div>
                <div className='col-md-6 col-lg-2'>
                <button type='submit' className='btn btn-danger py-2 my-4 px-4 text-uppercase'>submit</button>
                </div>
            </div>

        </div>
    </div>
    <div className='footer'>
        <div className='container'>
            <div className='row py-4 text-white-50'>
                <div className='col-md-6 col-lg-4 pb-5'>
                    <img src={logo} className='py-4' />
                    <p className=' fw-normal'>Pellentesque in ipsum id orci porta dapibus. Vivamus magna justo, lacinia eget consectetur sed, convallis at tellus.</p>
                    <br />
                    <p>Created By <span className='created'>Graphberry</span><br />© 2022 - <span className='Bondi'>Bondi Inc</span></p>
                    <p></p>
                </div>
                <div className='col-md-3 col-lg-2 pb-5'>

                    <ul className='lh-lg list-unstyled'>
                        <li className='text-light fs-4 fw-bold'>Links</li>
                        <li>Home</li>
                        <li>Our Services</li>
                        <li>Portfolio</li>
                        <li>Testimonials</li>
                        <li>Support</li>
                        <li>Terms and Condition</li>

                    </ul>

                </div>
                <div className='col-md-3 col-lg-2 pb-5'>
                    <ul className='lh-lg list-unstyled'>
                        <li className='text-light fs-4 fw-bold'>About us</li>
                        <li>Sign In</li>
                        <li>Register</li>
                        <li>About Us</li>
                        <li>Blog</li>
                        <li>Contact Us</li>
                    </ul>


                </div>
                <div className='col-md-6 col-lg-4 py-4'>
                    <h4 className='text-light'>Contact Us</h4>
                    <p>Get in touch with us via mail phone.We are <br /> waiting for your call or message</p>
                    <button type='submit' className='btn btn-danger py-2 my-4 px-4 w-100'>Melhossiny645@gmail.com</button>
                    <div className='d-flex gap-5 fs-2 pt-3'>
                    <i class="fa-brands fa-facebook-square facebook"></i>
                    <i class="fa-brands fa-twitter-square twitter"></i>
                    <i class="fa-brands fa-linkedin linkedin"></i>
                    <i class="fa-brands fa-youtube-square youtube"></i>
                    </div>
                
                </div>


            </div>
        </div>
    </div>
    </>
  )
}

export default Footer