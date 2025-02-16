import React from 'react'
import { Form, useSubmit, Link } from 'react-router-dom';
import Wrapper from '../assets/wrappers/DashboardFormPage'
import { useAllCasepapersContext } from '../pages/AllCasepapers';



const SearchContainer = () => {


   const { searchValues } = useAllCasepapersContext()
   const { queryFirstName, queryMiddleName, queryLastName } = searchValues
   console.log(searchValues);

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
                  <label type='text' name='queryFirstName' className='form-label'>First Name</label>
                  <input
                     type='search'
                     name='queryFirstName'
                     className='form-input'
                     defaultValue={queryFirstName}
                  ></input>
               </div>
               <div className='form-row'>
                  <label type='text' name='queryMiddleName' className='form-label'>Middle Name</label>
                  <input
                     type='search'
                     name='queryMiddleName'
                     className='form-input'
                     defaultValue={queryMiddleName}
                  ></input>
               </div>
               <div className='form-row'>
                  <label type='text' name='queryLastName' className='form-label'>Last Name</label>
                  <input
                     type='search'
                     name='queryLastName'
                     className='form-input'
                     defaultValue={queryLastName}
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
                     onClick={debounce((form) => {submit(form);})}
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

export default SearchContainer