import React from 'react'
import tech1 from '../../images/tech-1.png'
import tech2 from '../../images/tech-2.png'
import tech3 from '../../images/tech-3.png'
import tech4 from '../../images/tech-4.png'

const Tech = () => {
  return (
    <>
    <div className='container py-3'>
        <div className='d-none d-lg-flex justify-content-between py-5'>
            <div className=' '>
                <img src={tech1} />
            </div>
            <div className=''>
                <img src={tech2} />
            </div>
            <div className=''>
                <img src={tech3} />
            </div>
            <div className=''>
                <img src={tech4} />
            </div>
            <div className=''>
                <img src={tech1} />
            </div>
            <div className=''>
                <img src={tech2} />
            </div>
        </div>

    </div>
            <div className='start text-center py-5'>
            <h2 className='text-white'>
                Start Your Project Now

            </h2>
            <p className='text-white-50'>
                Leave your description and we start the engine.Don't worry,you can cancel anytime

            </p>
            <button className='btn btn-danger my-5 py-2 px-4 text-uppercase'>Start project</button>

        </div>
        </>
  )
}

export default Tech