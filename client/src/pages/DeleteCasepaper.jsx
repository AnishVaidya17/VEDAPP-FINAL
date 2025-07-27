import React from 'react'
import { toast } from 'react-toastify';
import { Form, useNavigation, redirect, useParams } from 'react-router-dom';
import customFetch from '../utils/customFetch';


export const action = async ({ params }) => {
   try {
      await customFetch.delete(`/casepapers/${params.id}`);
      toast.success('Casepaper deleted successfully', { autoClose: 1000 });
   } catch (error) {
      toast.error(error?.response?.data?.msg, { autoClose: 1500 });
   }
   return redirect('/dashboard/');
}

const DeleteCasepaper = () => {
   return (
      <div>DeleteCasepaper</div>
   )
}

export default DeleteCasepaper
