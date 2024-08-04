// import React, { useEffect } from 'react'
// import { useAppContext } from '../context/appContext'
// import Wrapper from '../assets/wrappers/DashboardFormPage'
// import { Link } from 'react-router-dom';


// export const PrintFollowupChikitsa = () => {
//     const { followup_name, followup_middlename, followup_lastname, followup_chikitsa } = useAppContext();

//     useEffect(() => {
//         window.focus();
//         window.scroll(0, 0, "smooth")
//     }, [])

//     const vari = {
//         date: new Date().toJSON().slice(0, 10)
//     }


//     return (
//         <Wrapper>
//             <h3>Dr. Vaidya Ayurveda Clinic</h3>
//             <h4>Followup Chikitsa for {followup_name} {followup_middlename} {followup_lastname}</h4>
//             <h5>Date: {vari.date}</h5>
//             {/* FOLLOWUP CHIKITSA */}
//             <div className="form-row">
//                 <label type='text' name='followup_chikitsa' className='form-label'>Followup Chikitsa</label>
//                 <textarea
//                     name='followup_chikitsa'
//                     className='diff-diff-textarea'
//                     rows={20}
//                     cols={100}
//                     value={followup_chikitsa}
//                 ></textarea>
//                 <Link to='/add-followuppaper'>
//                     <button className='btn btn-block'>Back</button>
//                 </Link>
//             </div>
//         </Wrapper>
//     )
// }

