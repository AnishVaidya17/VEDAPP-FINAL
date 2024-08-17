import React from 'react'
// import moment from 'moment'
import { FaLocationArrow, FaBriefcase, FaCalendarAlt, FaPlusSquare, FaMinusSquare } from 'react-icons/fa'
import { Form, Link } from 'react-router-dom'
import Wrapper from '../assets/wrappers/Casepaper'
import CasepaperInfo from './CasepaperInfo'
import Popup from 'reactjs-popup';
import 'reactjs-popup/dist/index.css';
import day from 'dayjs';
import advancedFormat from 'dayjs/plugin/advancedFormat';
day.extend(advancedFormat);


const Casepaper = ({ _id, name, middlename, lastname, occupation, address, createdAt, date, nidanOne, casepaperNumber }) => {

   const date_created = day(date)?.format('MMM Do, YYYY');
   const contentStyle = { background: '#3f3f3f', color: 'white', borderRadius: '10px', padding: '15px', width: '500px' };

   return (
      <Wrapper>
         <header>
            <div className='main-icon'>{name.charAt(0)}{lastname?.charAt(0)}</div>
            <div className='info'>
               <h5>{name} {middlename} {lastname}</h5>
            </div>
         </header>
         <div className='content'>
            {/* Content code */}
            <div className="content-center">

               <CasepaperInfo icon={<FaPlusSquare />} text={nidanOne} />
               <CasepaperInfo icon={<FaCalendarAlt />} text={date_created} />
               <CasepaperInfo icon={<FaMinusSquare />} text={`CP: ${casepaperNumber}`} />

            </div>
            <footer>
               <div className="actions">
                  <Link to={`/dashboard/edit-casepaper/${_id}`} className='btn edit-btn'>
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
                                 <label className='form-label'>Are you sure you want to delete Casepaper: {name} {middlename} {lastname}?</label>
                              </div>
                              <div className='btn-container'>
                                 <button className='btn btn-space' onClick=
                                    {() => [close()]}>
                                    No, go back
                                 </button>
                                 <br />
                                 <br />
                                 <Form method='post' action={`/dashboard/delete-casepaper/${_id}`}>
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

export default Casepaper