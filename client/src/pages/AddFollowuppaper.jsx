// import React from 'react'

// const AddFollowuppaper = () => {
//   return (
//     <div>AddFollowuppaper</div>
//   )
// }

// export default AddFollowuppaper


import React, { useEffect } from 'react'
import Wrapper from '../assets/wrappers/DashboardFormPage'
// import { useAppContext } from '../../context/appContext'
// import { Alert } from '../../components/index.js'
import { Link } from 'react-router-dom'
import { Form, useNavigation, redirect } from 'react-router-dom';
import customFetch from '../utils/customFetch';
import { toast } from 'react-toastify';

//ACTION - ADDFOLLOWUPPAPER
export const action = async ({ request }) => {
   const formData = await request.formData()
   const data = Object.fromEntries(formData)
   console.log(data);
   try {
      await customFetch.post('/followuppapers/', data);
      toast.success('Added Followuppaper successfully');
      window.focus();
      window.scroll(0, 0, "smooth")
      return redirect('/dashboard/all-followuppapers');
   } catch (error) {
      toast.error(error?.response?.data?.msg);
      console.log(error);
      return error;
   }
}




const AddFollowuppaper = () => {

   const navigation = useNavigation()
   const isSubmitting = navigation.state === 'submitting'


   useEffect(() => {
      window.focus();
      window.scroll(0, 0, "smooth")
   }, [])



   //    const handleSubmit = (e) => {
   //       e.preventDefault();

   //       //edit followuppaper code, if isEditing is true, then, call editFollowuppaper ftn
   //       if (isFollowupEditing) {
   //          editFollowuppaper()
   //          window.focus();
   //          window.scroll(0, 0, "smooth")
   //          return
   //       }

   //       if (!followup_date) {
   //          displayAlert()
   //          window.focus();
   //          window.scroll(0, 0, "smooth")
   //          return
   //       }
   //       else if (!followup_name) {
   //          displayAlert()
   //          window.focus();
   //          window.scroll(0, 0, "smooth")
   //          return
   //       }

   //       createFollowuppaper()
   //       window.focus();
   //       // window.scrollTo(0, 800);
   //       window.scroll(0, 0, "smooth")
   //       console.log('Followuppaper submitted!');
   //       clearAlert()
   //    }


   //    //clear all values
   //    const clearAll = (e) => {
   //       e.preventDefault();
   //       console.log('clear btn pressed');
   //       clearValues()
   //    }


   return (
      <Wrapper>
         <Form method='post' className='form'>
            <h2>Add Followup Paper</h2>


            {/* printing chikitsa */}
            {/* <div className="btn-print">
               <Link to='/print-followup-chikitsa'>
                  <button className='btn'>Print Chikitsa</button>
               </Link>
            </div> */}

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
                        defaultValue={new Date().toJSON().slice(0, 10)}
                     ></input>
                  </div>
               </div>

               <br />
               <div className="form-center">
                  <div className="form-row">
                     {/* name */}
                     <label type='text' name='followup_name' className='form-label'>Name</label>
                     <input
                        type='text'
                        name='followup_name'
                        className='form-input followupinput'
                        required={true}
                     // value={followup_name}
                     // onChange={handleFollowupPaperInput}
                     ></input>
                  </div>

                  <div className="form-row">
                     {/* middle name */}
                     <label type='text' name='followup_middlename' className='form-label'>Middle Name</label>
                     <input
                        type='text'
                        name='followup_middlename'
                        className='form-input followupinput'
                     // value={followup_middlename}
                     // onChange={handleFollowupPaperInput}
                     ></input>
                  </div>

                  <div className="form-row">
                     {/* last name */}
                     <label type='text' name='followup_lastname' className='form-label'>Last Name</label>
                     <input
                        type='text'
                        name='followup_lastname'
                        className='form-input followupinput'
                     // value={followup_lastname}
                     // onChange={handleFollowupPaperInput}
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
                     // value={followup_lakshan}
                     // onChange={handleFollowupPaperInput}
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
                     // value={followup_chikitsa}
                     // onChange={handleFollowupPaperInput}
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

export default AddFollowuppaper