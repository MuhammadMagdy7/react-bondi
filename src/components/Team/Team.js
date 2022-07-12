import React from 'react'
import team1 from '../../images/team-1.png'
import team2 from '../../images/team-2.png'
import team3 from '../../images/team-3.png'
import team4 from '../../images/team-4.png'


const Team = () => {
  return (
<div className='team'>
        <div className='container py-5'>
            <div className='text-center my-5'>
                <h2 className='title-color fw-bold'>
                    Meet The Team

                </h2>
                <p>
                    Donec rutrum congue leo eget malesuada. Mauris blandit aliquet elit, eget tincidunt nibh pulvinar a. Pellentesque in ipsum id orci porta dapibus. Proin eget tortor risus. Donec sollicitudin molestie malesuada.

                </p>
            </div>

            <div className='text-center row pb-3'>



                <div className='col-lg-3'>
                    <div className="card">
                    <img src={team1} className="card-img-top" />
                    <div className='name py-2 text-light'>
                    <h4>Luke Skywalker</h4>

                    </div>
                        <div className="card-body">

                    <p className="card-text">“I don't understand how we got by those troops. I thought we were dead.“</p>
                    </div>
                     </div>

                </div>

         


                <div className='col-lg-3 pb-2'>
                    <div className="card">
                    <img src={team2} className="card-img-top" />
                    <div className='name py-2 text-light'>
                    <h4>Luke Skywalker</h4>

                    </div>
                        <div className="card-body">

                    <p className="card-text">“I don't understand how we got by those troops. I thought we were dead.“</p>
                    </div>
                    </div>

                </div>
 
                <div className='col-lg-3 pb-2'>
                    <div className="card">
                    <img src={team3} className="card-img-top" />
                    <div className='name py-2 text-light'>
                    <h4>Luke Skywalker</h4>

                    </div>
                        <div className="card-body">

                    <p className="card-text">“I don't understand how we got by those troops. I thought we were dead.“</p>
                    </div>
                    </div>

                </div>
          

                <div className='col-lg-3 pb-2'>
                    <div className="card">
                    <img src={team4} className="card-img-top" />
                    <div className='name py-2 text-light'>
                    <h4>Luke Skywalker</h4>

                    </div>
                        <div className="card-body">

                    <p className="card-text">“I don't understand how we got by those troops. I thought we were dead.“</p>
                    </div>
                    </div>

                </div>
            </div>
            
          
        </div>
    </div>  
    )
}

export default Team