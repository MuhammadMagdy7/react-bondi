import React from 'react'
import MainImg from '../Utility/MainImg';
import work1 from '../../images/work-01.jpg'
import work2 from '../../images/work-02.jpg'
import work3 from '../../images/work-03.jpg'
import work4 from '../../images/work-04.jpg'
import work5 from '../../images/work-05.jpg'
import work6 from '../../images/work-06.jpg'
import work7 from '../../images/work-07.jpg'
import work8 from '../../images/work-08.jpg'


const Portfolio = () => {
  return (
    <div className='text-center portfolio py-3'>
        <div className='container'>
        <MainImg title={'We Make This'} prag={'PREPARE TO BE AMAZED'}/>
       <ui className='list-unstyled d-flex justify-content-center'>
            <li className='active rounded-pill'>All</li>
            <li>Design</li>
            <li>Code</li>
            <li>Photo</li>
            <li>App</li>
        </ui>
        <div className='row'>
            <div className='col-sm-6 col-md-4 col-lg-3'>
                <div className='box my-4 bg-white' data-work='Appliction'>
                    <img className='img-fluid' src={work1} />
                </div>

            </div>
            <div className='col-sm-6 col-md-4 col-lg-3'>
                <div className='box my-4 bg-white' data-work='Appliction'>
                    <img className='img-fluid' src={work2} />
                </div>

            </div>
            <div className='col-sm-6 col-md-4 col-lg-3'>
                <div className='box my-4 bg-white' data-work='Appliction'>
                    <img className='img-fluid' src={work3} />
                </div>

            </div>
            <div className='col-sm-6 col-md-4 col-lg-3'>
                <div className='box my-4 bg-white' data-work='Appliction'>
                    <img className='img-fluid' src={work4} />
                </div>

            </div>
            <div className='col-sm-6 col-md-4 col-lg-3'>
                <div className='box my-4 bg-white' data-work='Appliction'>
                    <img className='img-fluid' src={work5} />
                </div>

            </div>
            <div className='col-sm-6 col-md-4 col-lg-3'>
                <div className='box my-4 bg-white' data-work='Appliction'>
                    <img className='img-fluid' src={work6} />
                </div>

            </div>
            <div className='col-sm-6 col-md-4 col-lg-3'>
                <div className='box my-4 bg-white' data-work='Appliction'>
                    <img className='img-fluid' src={work7} />
                </div>

            </div>
            <div className='col-sm-6 col-md-4 col-lg-3'>
                <div className='box my-4 bg-white' data-work='Appliction'>
                    <img className='img-fluid' src={work8} />
                </div>

            </div>
        </div>
        <button className='btn btn-danger py-2 my-4 px-4 text-uppercase'>I want more</button>
        </div>

    </div>
  )
}

export default Portfolio