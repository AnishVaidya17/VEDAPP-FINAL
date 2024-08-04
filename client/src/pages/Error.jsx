
import React from 'react'
import { Link, useRouteError } from 'react-router-dom';
import errimg from '../assets/images/not-found.svg';
import Wrapper from '../assets/wrappers/ErrorPage';

const Error = () => {
   const error = useRouteError();
   console.log(error)
   if (error.status == 404) {
      return (
         <Wrapper className='full-page'>
            <div>
               <img src={errimg} alt='not found'></img>
               <p>The Page you are looking for is not available</p>
               <Link to='/dashboard'>Go Home</Link>
            </div>
         </Wrapper>
      )
   }
   return (
      <Wrapper>
         <div>
            <h3>something went wrong</h3>
         </div>
      </Wrapper>
   )


}

export default Error
