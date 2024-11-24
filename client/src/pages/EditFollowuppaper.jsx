import React from 'react'
import Wrapper from '../assets/wrappers/DashboardFormPage';
import { useLoaderData } from 'react-router-dom';
import { Form, useNavigation, redirect, useParams } from 'react-router-dom';
import { toast } from 'react-toastify';
import customFetch from '../utils/customFetch';
import { Link } from 'react-router-dom';



//LOADER - EDIT FOLLOWUPPAPER
export const loader = async ({ params }) => {
   try {
      const { data } = await customFetch.get(`/followuppapers/${params.id}`);
      return data;
   } catch (error) {
      toast.error(error?.response?.data?.msg);
      return redirect('/dashboard/all-followuppapers');
   }
};


//ACTION - EDIT FOLLOWUPPAPER
export const action = async ({ request, params }) => {
   const formData = await request.formData();
   const data = Object.fromEntries(formData);

   try {
      await customFetch.patch(`/followuppapers/${params.id}`, data);
      toast.success('Followup Paper edited successfully');
      return null;
   } catch (error) {
      toast.error(error?.response?.data?.msg);
      return error;
   }
};


const EditFollowuppaper = () => {

   window.focus();
   window.scroll(0, 0, "smooth")

   const params = useParams();
   console.log(params);

   const navigation = useNavigation()
   const isSubmitting = navigation.state === 'submitting'

   const { followuppaper } = useLoaderData();
   console.log(followuppaper);



   return (
      <Wrapper>
         <Form method='post' className='form'>
            <h2>Edit Followup Paper</h2>

            {/* EMPTY SPACE CODE
                <div className="form-space">
                    <br />
                </div> */}


            {/* printing chikitsa */}
            <div className="btn-print">
               <Link to={`/print-followuppaper-chikitsa/${followuppaper._id}`}>
                  <button className='btn'>Print Chikitsa</button>
               </Link>
            </div>

            {/* EMPTY SPACE CODE */}
            <div className="form-space">
               <br />
            </div>

            <div className='followupdiv'>

               <div className="form-center">
                  <div className="form-row">
                     {/* date */}
                     <label type='text' name='followup_date' className='form-label'>Date</label>
                     <input
                        type='date'
                        name='followup_date'
                        className='form-input  followupdate'
                        defaultValue={followuppaper.followup_date?.slice(0, 10)}
                        
                     ></input>
                  </div>
               </div>

               <br />
               <div className="form-center">
                  <div className="form-row">
                     {/* name */}
                     <label type='text' name='followup_name' className='form-label'>First Name</label>
                     <input
                        type='text'
                        name='followup_name'
                        className='form-input followupinput'
                        required={true}
                        defaultValue={followuppaper.followup_name}
                     ></input>
                  </div>

                  <div className="form-row">
                     {/* middle name */}
                     <label type='text' name='followup_middlename' className='form-label'>Middle Name</label>
                     <input
                        type='text'
                        name='followup_middlename'
                        className='form-input followupinput'
                        defaultValue={followuppaper.followup_middlename}
                     ></input>
                  </div>

                  <div className="form-row">
                     {/* last name */}
                     <label type='text' name='followup_lastname' className='form-label'>Last Name</label>
                     <input
                        type='text'
                        name='followup_lastname'
                        className='form-input followupinput'
                        defaultValue={followuppaper.followup_lastname}
                     ></input>
                  </div>
               </div>


               <div className="followupcontent">
                  {/* lakshan */}
                  <div>
                     <div className="form-row">
                        <h5>Lakshan</h5>
                     </div>
                     <textarea
                        name="followup_lakshan"
                        id="followup_lakshan"
                        cols="70"
                        rows="25"
                        className='form-textarea-followup-big'
                        defaultValue={followuppaper.followup_lakshan}
                     >
                     </textarea>
                  </div>

                  {/* chikitsa */}
                  <div>
                     <div className="form-row">
                        <h5>Chikitsa</h5>
                     </div>
                     <textarea
                        name="followup_chikitsa"
                        id="followup_chikitsa"
                        cols="70"
                        rows="25"
                        className='form-textarea-followup-big'
                        defaultValue={followuppaper.followup_chikitsa}
                     >
                     </textarea>
                  </div>
               </div>

            </div>

            {/* submit button */}
            <button className='btn btn-block btn-print' disabled={isSubmitting} >{isSubmitting ? 'submitting...' : 'Submit'}</button>

         </Form>
      </Wrapper>
   )
}

export default EditFollowuppaper