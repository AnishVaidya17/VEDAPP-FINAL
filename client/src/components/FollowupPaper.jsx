import React from 'react'
import Wrapper from '../assets/wrappers/Casepaper'
import { FaLocationArrow, FaBriefcase, FaCalendarAlt, FaPlusSquare } from 'react-icons/fa'
import { Form, Link } from 'react-router-dom'
import { useAllFollowuppapersContext } from '../pages/AllFollowuppapers';
import CasepaperInfo from './CasepaperInfo'
import Popup from 'reactjs-popup';
import 'reactjs-popup/dist/index.css';
import day from 'dayjs';
import advancedFormat from 'dayjs/plugin/advancedFormat';
day.extend(advancedFormat);


const FollowupPaper = ({ _id, followup_name, followup_middlename, followup_lastname, createdAt, followup_date, followup_lakshan, followup_chikitsa }) => {

   const date_created = day(followup_date)?.format('MMM Do, YYYY');
   const contentStyle = { background: '#3f3f3f', color: 'white', borderRadius: '10px', padding: '15px', width: '500px' };


   return (
      <Wrapper>
         <header>
            <div className='main-icon'>{followup_name?.charAt(0)}{followup_lastname?.charAt(0)}</div>
            <div className='info'>
               <h5>{followup_name} {followup_middlename} {followup_lastname}</h5>
            </div>
         </header>

         <div className='content'>
            {/* Content code */}
            <div className="content-center">

               <CasepaperInfo icon={<FaPlusSquare />} text={followup_lakshan.split('\n')[0]} />
               <CasepaperInfo icon={<FaCalendarAlt />} text={date_created} />
               {/* <CasepaperInfo icon={<FaBriefcase />} text={followup_chikitsa.split('\n')[0]} /> */}

            </div>
            <footer>
               <div className="actions">
                  <Link to={`/dashboard/edit-followuppaper/${_id}`} className='btn edit-btn'>
                     Edit
                  </Link>

                  <Popup contentStyle={contentStyle} trigger=
                     {<button type='button' className='btn delete-btn'>
                        Delete
                     </button>}
                     modal nested>
                     {
                        close => (
                           <div className='modal'>
                              <div className='content'>
                                 <label className='form-label'>Are you sure you want to delete Followuppaper?</label>
                              </div>
                              <div className='btn-container'>
                                 <button className='btn btn-space' onClick=
                                    {() => [close()]}>
                                    No, go back
                                 </button>
                                 <br />
                                 <br />
                                 <Form method='post' action={`/dashboard/delete-followuppaper/${_id}`}>
                                    <button type='submit' className='btn-delete-btn'> Delete</button>
                                 </Form>
                              </div>
                           </div>
                        )
                     }
                  </Popup>

               </div>
            </footer>
         </div >
      </Wrapper >
   )
}

export default FollowupPaper