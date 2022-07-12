import React from 'react'
import MainImg from '../Utility/MainImg';
import blog1 from '../../images/blog-1.jpg'
import blog2 from '../../images/blog-2.jpg'
import blog3 from '../../images/blog-3.jpg'

const Blog = () => {
  return (
    <div className='container'>
        <div className='text-center'>
            <MainImg title={'Read Our Blog'} prag={'NEW STORIES'} />
            <div className='row'>
                <div className='col-md-6 col-lg-4 pb-1'>


                <div class="card">
                    <img src={blog1} class="card-img-top" alt="..." />
                    <div class="card-body">
                        <p class="card-text">Jan 17, 2022</p>
                        <h4>Some Awesome Blog Title Here</h4>
                    </div>
                </div>
                </div>

                <div className='col-md-6 col-lg-4 pb-1'>


                <div class="card">
                    <img src={blog2} class="card-img-top" alt="..." />
                    <div class="card-body">
                        <p class="card-text">Jan 17, 2022</p>
                        <h4>Some Awesome Blog Title Here</h4>
                    </div>
                </div>
                </div>

                <div className='col-md-6 col-lg-4 pb-'>


                <div class="card">
                    <img src={blog3} class="card-img-top" alt="..." />
                    <div class="card-body">
                        <p class="card-text">Jan 17, 2022</p>
                        <h4>Some Awesome Blog Title Here</h4>
                    </div>
                </div>
                </div>


            </div>

            <button className='btn btn-danger my-5 py-2 px-4 text-uppercase'>more stories</button>

        </div>
    </div>
  )
}

export default Blog