

import React from 'react'
import Wrapper from '../assets/wrappers/DashboardFormPage'
import { useLoaderData } from 'react-router-dom';
import { Form, useNavigation, redirect, useParams } from 'react-router-dom';
import { toast } from 'react-toastify';
import customFetch from '../utils/customFetch';
import { StatItem } from '../components';
import { useOutletContext } from 'react-router-dom';

//LOADER - EDIT PROFILE
export const loader = async ({ params }) => {
  try {
    const { data } = await customFetch.get(`/users/current-user`);
    console.log(data);
    return data;
  } catch (error) {
    toast.error(error?.response?.data?.msg);
    return redirect('/dashboard/');
  }
};


//ACTION - EDIT PROFILE
export const action = async ({ request, params }) => {
  const formData = await request.formData()
  const data = Object.fromEntries(formData)
  
  try {
    await customFetch.patch(`/users/update-user/${params.id}`, data);
    toast.success('User edited successfully');
    return redirect('/dashboard/profile');
  } catch (error) {
    toast.error(error?.response?.data?.msg);
    return error;
  }
};



const Profile = () => {

  const { user } = useOutletContext()
  const navigation = useNavigation();
  const isSubmitting = navigation.state === 'submitting';


  return (
    <Wrapper>
      <Form method='post' className='form' encType='multipart/form-data'>
        <h2>Profile</h2>

        <div className="form-center">

          <div className="form-row">
            <label className='form-label'>Name:</label>
            <input
              type='text'
              name='name'
              className='form-input'
              defaultValue={user.name}

            ></input>
          </div>
          <div className="form-row">
            <label className='form-label'>LastName:</label>
            <input
              type='text'
              name='lastname'
              className='form-input'
              defaultValue={user.lastname}

            ></input>
          </div>
          <div className="form-row">
            <label className='form-label'>Email:</label>
            <input
              type='text'
              name='email'
              className='form-input'
              defaultValue={user.email}

            ></input>
          </div>
          <div className="form-row">
            <label className='form-label'>Location:</label>
            <input
              type='text'
              name='location'
              className='form-input'
              defaultValue={user.location}

            ></input>
          </div>

          <button type='submit' className='btn btn-block' disabled={isSubmitting}>
            {isSubmitting ? 'submitting...' : 'submit'}
          </button>

        </div>
      </Form>

    </Wrapper>
  )
}

export default Profile