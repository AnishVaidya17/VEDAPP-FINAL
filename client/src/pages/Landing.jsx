import React from 'react'
import maintwo from '../assets/images/maintwo.svg'
import Wrapper from '../assets/wrappers/LandingPage'
import Logo from '../components/Logo'

import { Link } from 'react-router-dom'


const Landing = () => {
    return (
        <Wrapper>
            <nav>
                {/* <img src={canvalogo} alt="Logo goes here" /> */}
                <Logo />
            </nav>
            <div className='container page'>
                {/* info */}
                <div className='info'>
                    <h1>the <span>ayurvedic</span> app</h1>
                    <p style={{paddingLeft:"60px", paddingBottom:"20px", fontSize:"larger", margin:'15px'}}>

                        || अभ्यासात्प्राप्यते दृष्टि: कर्मसिद्धिप्रकाशिनी ||

                    </p>
                    <Link to='/register'>
                        <button className='btn btn-hero'>Register</button>
                    </Link>
                    &nbsp; &nbsp;
                    <Link to='/login'>
                        <button className='btn btn-hero'>Login</button>
                    </Link>
                </div>
                {/* main_image */}
                <img src={maintwo} alt="job hunt" className='img main-img'></img>

            </div>
        </Wrapper>
    )
}

export default Landing