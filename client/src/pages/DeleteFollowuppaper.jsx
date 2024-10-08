import React from 'react'
import { toast } from 'react-toastify';
import { Form, useNavigation, redirect, useParams } from 'react-router-dom';
import customFetch from '../utils/customFetch';


// ACTION - DELETE FOLLOWUPPAPER
export const action = async ({ params }) => {
    try {
       await customFetch.delete(`/followuppapers/${params.id}`);
       toast.success('Followup Paper Deleted Successfully');
    } catch (error) {
       toast.error(error?.response?.data?.msg);
    }
    return redirect('/dashboard/all-followuppapers');
}

const DeleteFollowuppaper = () => {
  return (
    <div>DeleteFollowuppaper</div>
  )
}

export default DeleteFollowuppaper