import React from 'react'
import { Form, useSubmit, Link } from 'react-router-dom';
import Wrapper from '../assets/wrappers/DashboardFormPage'
import { useAllFollowuppapersContext } from '../pages/AllFollowuppapers';




const FP_SearchContainer = () => {

   const { searchValues } = useAllFollowuppapersContext()
   const { followupQueryFirstName, followupQueryMiddleName, followupQueryLastName } = searchValues

   const submit = useSubmit();

   const debounce = (onChange) => {
      let timeout;
      return (e) => {
         const form = e.currentTarget.form;
         clearTimeout(timeout);
         timeout = setTimeout(() => {
            onChange(form);
         }, 0);
      };
   };

   return (
      <Wrapper>
         <Form className='form' >
            <h3>Search</h3>
            <div className="form-center">
               <div className='form-row'>
                  <label type='text' name='followupQueryFirstName' className='form-label'>First Name</label>
                  <input
                     type='search'
                     name='followupQueryFirstName'
                     className='form-input'
                     defaultValue={followupQueryFirstName}
                  ></input>
               </div>
               <div className='form-row'>
                  <label type='text' name='followupQueryMiddleName' className='form-label'>Middle Name</label>
                  <input
                     type='search'
                     name='followupQueryMiddleName'
                     className='form-input'
                     defaultValue={followupQueryMiddleName}
                  ></input>
               </div>
               <div className='form-row'>
                  <label type='text' name='followupQueryLastName' className='form-label'>Last Name</label>
                  <input
                     type='search'
                     name='followupQueryLastName'
                     className='form-input'
                     defaultValue={followupQueryLastName}
                  ></input>
               </div>

               <div className="btn-container-search">
                  <Link to={window.location.pathname}>
                     <button
                        className='btn btn-block clear-btn'
                     >
                        reset
                     </button>
                  </Link>
                  <button
                     className='btn btn-block submit-btn'
                     onClick={debounce((form) => { submit(form); })}
                  >
                     Submit
                  </button>
               </div>
               <div className="btn-container-search">

               </div>
            </div>
         </Form>
      </Wrapper>
   )
}

export default FP_SearchContainer