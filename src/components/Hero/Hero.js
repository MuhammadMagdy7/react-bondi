import React from 'react'
import MainImg from '../Utility/MainImg';

const Hero = () => {
  return (
    <div className='container text-center'>
        <MainImg title={'We are Good at'} prag={'SOME OF THESE STUFF UNDER'}/>
        <div className='row'>
            <div className='col-lg-4 col-md-6'>
                <div className='feat'>
                    <div className='holder-icon position-relative mb-3'>
                        <i class="fa-solid fa-1 position-absolute bottom-0 number"></i>
                        <i class="fa-solid fa-pencil position-absolute bottom-0 icon "></i>
                    </div>
                    <h4 className='text-uppercase title-color'>GRAPHIC design</h4>
                    <p className='text-black-50 lh-lg'>Pellentesque in ipsum id orci porta dapibus. Vivamus magna justo, lacinia eget consectetur sed, convallis at tellus.</p>
                </div>
            </div>
            <div className='col-lg-4 col-md-6 pb-3'>
                <div className='feat'>
                    <div className='holder-icon position-relative my-4'>
                        <i class="fa-solid fa-2 position-absolute bottom-0 number"></i>
                        <i class="fa-solid fa-tv position-absolute bottom-0 icon "></i>
                    </div>
                    <h4 className='text-uppercase title-color'>GRAPHIC design</h4>
                    <p className='text-black-50 lh-lg'>Pellentesque in ipsum id orci porta dapibus. Vivamus magna justo, lacinia eget consectetur sed, convallis at tellus.</p>
                </div>
            </div>
            <div className='col-lg-4 col-md-6'>
                <div className='feat'>
                    <div className='holder-icon position-relative mb-3'>
                        <i class="fa-solid fa-3 position-absolute bottom-0 number"></i>
                        <i class="fa-solid fa-plug position-absolute bottom-0 icon "></i>
                    </div>
                    <h4 className='text-uppercase title-color'>GRAPHIC design</h4>
                    <p className='text-black-50 lh-lg'>Pellentesque in ipsum id orci porta dapibus. Vivamus magna justo, lacinia eget consectetur sed, convallis at tellus.</p>
                </div>
            </div>
        </div> 
    </div>
  )
}


export default Hero;