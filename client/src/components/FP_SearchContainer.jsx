import React from 'react'
import { Form, useSubmit, Link } from 'react-router-dom';
import Wrapper from '../assets/wrappers/DashboardFormPage'
import { useAllFollowuppapersContext } from '../pages/AllFollowuppapers';




const FP_SearchContainer = () => {


   const { searchValues } = useAllFollowuppapersContext()
   const { followupQueryName } = searchValues
   console.log(searchValues);

   const submit = useSubmit();

   const debounce = (onChange) => {
      let timeout;
      return (e) => {
         const form = e.currentTarget.form;
         clearTimeout(timeout);
         timeout = setTimeout(() => {
            onChange(form);
         }, 1000);
      };
   };

   return (
      <Wrapper>
         <Form className='form' >
            <h3>Search</h3>
            <div className="form-center">
               <div className='form-row'>
                  <label type='text' name='followupQueryName' className='form-label'>Patient Name</label>
                  <input
                     type='search'
                     name='followupQueryName'
                     className='form-input'
                     defaultValue={followupQueryName}
                     onChange={debounce((form) => {
                        submit(form);
                     })}

                  ></input>
               </div>
               {/* <div className='form-row'>
            <label type='text' name='queryName' className='form-label'>Patient Middle Name</label>
            <input
              type='search'
              name='queryName'
              className='form-input'

            ></input>
          </div> */}

               <div className="btn-container">
                  <Link to='/dashboard/all-followuppapers'>
                     <button
                        className='btn btn-block submit-btn'
                     >
                        reset
                     </button>
                  </Link>


               </div>
            </div>
         </Form>


      </Wrapper>
   )
}

export default FP_SearchContainer