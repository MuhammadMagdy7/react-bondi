import React from 'react'
import MainImg from '../Utility/MainImg';
import laptop from '../../images/laptop.png'

const About = () => {
  return (
    <div className='container'>
        <div className='text-center'>
            <MainImg title={'Some Stuff About Us'} prag={'THE GREAT TEAM'} />
        </div>
        <div className='row d-flex justify-content-center text-center pb-5'>
            <p className='col-6 text-black-50 '>Donec rutrum congue leo eget malesuada. Mauris blandit aliquet elit, eget tincidunt nibh pulvinar a. Pellentesque in ipsum id orci porta dapibus. Proin eget tortor risus. Donec sollicitudin molestie malesuada.
            </p>
        </div>
        <div className='row'>
            <div className='col-lg-4 d-flex flex-column justify-content-center align-content-center'>
                <h4>Retina Design</h4>
                <p>Vestibulum ac diam sit amet quam vehicula elementum sed sit amet dui. Mauris blandit aliquet elit, eget tincidunt nibh pulvinar a.</p>
                <p>Donec rutrum congue leo eget malesuada. Mauris blandit aliquet elit, eget tincidunt nibh pulvinar a. Pellentesque in ipsum id orci porta dapibus. Proin eget tortor risus. Donec sollicitudin molestie malesuada.</p>
                <button className='btn btn-danger py-2 px-4 text-uppercase'>ORDER me one</button>

            </div>
            <div className='col-md-12 col-lg-8 mt-2'>
                <img className='img-fluid' src={laptop} />

            </div>
        </div>


    
    </div>
  )
}

export default About