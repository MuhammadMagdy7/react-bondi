import React from 'react'
import img from '../../images/title.png'
 
const Mainimg = ({title, prag}) => {
  return (
    <div className='hero d-flex justify-content-center my-5 border-bottom-5'>

        <div>
            <img className='my-4' src={img}/>
            <h2>{title}</h2> 
            <p className='text-black-50 text-uppercase'>{prag}</p>
            <div className='line-bottom'></div>
        
        </div>
    </div>
  )
}

export default Mainimg