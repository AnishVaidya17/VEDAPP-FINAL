
import React, { useState, useEffect } from 'react'
import Wrapper from '../assets/wrappers/RegisterPage'
import { Logo } from '../components'
import { Form, redirect, useNavigation, Link } from 'react-router-dom';
import customFetch from '../utils/customFetch'
import { toast } from 'react-toastify';


//ACTION - REGISTER
export const action = async ({ request }) => {
   const formData = await request.formData()
   const data = Object.fromEntries(formData)
   try {
      await customFetch.post('/auth/register', data);
      toast.success('Registration successful', { autoClose: 1200 });
      return redirect('/login');
   } catch (error) {
      toast.error(error?.response?.data?.msg, {autoClose: 1500});
      console.log(error);
      return error;
   }
}

//MAIN REGISTER FUNCTION
const Register = () => {
   const navigation = useNavigation();
   const isSubmitting = navigation.state === 'submitting';


   return (
      <Wrapper className='full-page'>
         <Form method='post' className='form'>
            <Logo />
            <h3>{'Register'}</h3>

            <div className="form-row">
               <label type='text' name='name' className='form-label'>Name</label>
               <input
                  type='text'
                  name='name'
                  className='form-input check'
                  required={true}

               // onChange={handleChange}
               ></input>
            </div>

            <div className="form-row">
               <label type='text' name='lastname' className='form-label'>Last Name</label>
               <input
                  type='text'
                  name='lastname'
                  className='form-input check'
                  required={true}

               // onChange={handleChange}
               ></input>
            </div>

            <div className="form-row">
               <label type='text' name='location' className='form-label'>Location</label>
               <input
                  type='text'
                  name='location'
                  className='form-input check'

               // onChange={handleChange}
               ></input>
            </div>


            <div className="form-row">
               <label type='text' name='email' className='form-label'>Email</label>
               <input
                  type='email'
                  name='email'
                  className='form-input check'
                  required={true}

               // onChange={handleChange}
               ></input>
            </div>

            <div className="form-row">
               <label type='text' name='password' className='form-label'>Password</label>
               <input
                  type='password'
                  name='password'
                  className='form-input check'
                  required={true}

               // onChange={handleChange}
               ></input>
            </div>


            <div className='btn-submit'>
               <button type='submit' className='btn btn-block' disabled={isSubmitting}> {isSubmitting ? 'submitting...' : 'Submit'}</button>
            </div>


            <p> Already a member?&nbsp;
               <Link to='/login'
                  // type='button'
                  className='member-btn'
               >Login</Link>
            </p>

            <p>
               <Link to='/'
                  // type='button'
                  className='member-btn'
               >Back</Link>
            </p>

         </Form>
      </Wrapper>
   )
}

export default Register