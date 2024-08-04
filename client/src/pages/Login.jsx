import React from 'react'
import { Link, Form, redirect, useNavigation, useActionData } from 'react-router-dom';
import Wrapper from '../assets/wrappers/RegisterPage'
import { Logo } from '../components'
import customFetch from '../utils/customFetch';
import { toast } from 'react-toastify';


//ACTION - LOGIN
export const action = async ({ request }) => {
   const formData = await request.formData()
   const data = Object.fromEntries(formData)

   try {
      await customFetch.post('/auth/login', data);
      toast.success('Login successful');
      return redirect('/dashboard');
   } catch (error) {
      toast.error(error?.response?.data?.msg);
      return error;
   }
}

//MAIN LOGIN FUNCTION
const Login = () => {
   const navigation = useNavigation();
   const isSubmitting = navigation.state === 'submitting';
   return (
      <Wrapper className='full-page'>
         <Form method='post' className='form'>
            <Logo />
            <h3>{'Login'}</h3>

            <div className="form-row">
               <label type='text' name='email' className='form-label'>Email</label>
               <input
                  type='email'
                  name='email'
                  className='form-input check'
                  
               ></input>
            </div>

            <div className="form-row">
               <label type='text' name='password' className='form-label'>Password</label>
               <input
                  type='password'
                  name='password'
                  className='form-input check'
                  
               ></input>
            </div>


            <div className="btn-submit">
               <button type='submit' className='btn btn-block' disabled={isSubmitting}> {isSubmitting ? 'submitting...' : 'submit'}</button>

            </div>
            <p>New Member?&nbsp;
               <Link to='/register'
                  // type='button'
                  className='member-btn'
               >Register</Link>
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

export default Login