
import React, { useEffect } from 'react'
import Wrapper from '../assets/wrappers/DashboardFormPage'
import { Link, useOutlet, useOutletContext } from 'react-router-dom'
import { Form, useNavigation, redirect } from 'react-router-dom';
import { toast } from 'react-toastify';
import customFetch from '../utils/customFetch';
import { useLoaderData } from 'react-router-dom';
import timeCalculate from '../utils/calculateTime';

//LOADER - GET HIGHEST CASEPAPER NUMBER 
export const loader = async () => {
   try {
      const { data } = await customFetch.get(`/casepapers/add-casepaper`);
      return data.casepaper;
   } catch (error) {
      toast.error(error.response.data.msg, { autoClose: 1500 });
      return redirect('/dashboard/');
   }
}


//ACTION - ADDCASEPAPER
export const action = async ({ request }) => {
   const formData = await request.formData()
   const data = Object.fromEntries(formData)
   try {
      await customFetch.post('/casepapers/', data);
      toast.success('Added Casepaper successfully', { autoClose: 1000 });
      window.focus();
      window.scroll(0, 0, "smooth")
      return redirect('/dashboard');
   } catch (error) {
      toast.error(error?.response?.data?.msg, { autoClose: 1500 });
      console.log(error);
      return error;
   }
}


//MAIN ADDCASEPAPER FUNCTION
const AddCasepaper = () => {

   const { user } = useOutletContext()
   const navigation = useNavigation()
   const isSubmitting = navigation.state === 'submitting'

   useEffect(() => {
      window.focus();
      window.scroll(0, 0, "smooth")
   }, [])

   const calculatedTime = timeCalculate()

   const { casepaperNumber } = useLoaderData();
   let intValue = +casepaperNumber
   let addedValue = intValue + 1
   let stringValue = addedValue.toString()


   return (
      <Wrapper>
         <Form method='post' className='form'>
            <h2>Add Casepaper</h2>


            {/* EMPTY SPACE CODE */}
            <div className="form-space">
               <br />
            </div>

            <div className="form-center">

               {/* name */}
               <div className='form-row'>
                  <label type='text' name='name' className='form-label'>First Name</label>
                  <input
                     type='text'
                     name='name'
                     className='form-input'
                     required={true}

                  ></input>
               </div>

               {/* middlename */}
               <div className='form-row'>
                  <label type='text' name='middlename' className='form-label'>Middle Name</label>
                  <input
                     type='text'
                     name='middlename'
                     className='form-input'

                  ></input>
               </div>

               {/* lastname */}
               <div className='form-row'>
                  <label type='text' name='lastname' className='form-label'>Last Name</label>
                  <input
                     type='text'
                     name='lastname'
                     className='form-input'
                  ></input>
               </div>

               {/* gender */}
               <div className='form-row'>
                  <label type='text' name='gender' className='form-label'>Gender</label>
                  <input
                     type='text'
                     name='gender'
                     className='form-input'

                  ></input>
               </div>

               {/* address */}
               <div className='form-row'>
                  <label type='text' name='address' className='form-label'>Address</label>
                  <input
                     type='text'
                     name='address'
                     className='form-input'
                  ></input>
               </div>

               {/* mobile number */}
               <div className='form-row'>
                  <label type='text' name='mobilenumber' className='form-label'>Mobile no.</label>
                  <input
                     type='text'
                     name='mobilenumber'
                     className='form-input'
                  ></input>
               </div>

               {/* occupation */}
               <div className='form-row'>
                  <label type='text' name='occupation' className='form-label'>Occupation</label>
                  <input
                     type='text'
                     name='occupation'
                     className='form-input'
                  ></input>
               </div>

               {/* birthdate */}
               <div className='form-row'>
                  <label type='text' name='birthdate' className='form-label'>Birthdate</label>
                  <input
                     type='date'
                     name='birthdate'
                     className='form-input'
                  ></input>
               </div>

               {/* weight */}
               <div className='form-row'>
                  <label type='text' name='weight' className='form-label'>Weight (KG)</label>
                  <input
                     type='text'
                     name='weight'
                     className='form-input'
                  ></input>
               </div>

               {/* height */}
               <div className='form-row'>
                  <label type='text' name='height' className='form-label'>Height(CM)</label>
                  <input
                     type='text'
                     name='height'
                     className='form-input'
                  ></input>
               </div>

               {/* age */}
               <div className='form-row'>
                  <label type='text' name='age' className='form-label'>Age</label>
                  <input
                     type='text'
                     name='age'
                     className='form-input'
                  ></input>
               </div>

               {/* date */}
               <div className='form-row'>
                  <label type='text' name='date' className='form-label'>Date</label>
                  <input
                     type='date'
                     name='date'
                     className='form-input'
                     defaultValue={new Date().toJSON().slice(0, 10)}
                  ></input>
               </div>


               {/* time */}
               <div className='form-row'>
                  <label type='text' name='time' className='form-label'>Time</label>
                  <input
                     type='text'
                     name='time'
                     className='form-input'
                     defaultValue={calculatedTime}
                  ></input>
               </div>


               {/* casepapernumber */}
               <div className='form-row'>
                  <label type='text' name='casepaperNumber' className='form-label'>CP no.</label>
                  <input
                     type='text'
                     name='casepaperNumber'
                     className='form-input'
                     defaultValue={stringValue}
                  ></input>
               </div>
            </div>


            <br />
            <br />

            <div className="form-center">
               {/* pulse */}
               <div className="form-row">
                  <label type='text' name='pulse' className='form-label'>नाडी / Pulse</label>
                  <input
                     type='text'
                     name='pulse'
                     className='form-input'
                  ></input>
               </div>

               {/* bloodPressure */}
               <div className="form-row">
                  <label type='text' name='bloodPressure' className='form-label'>Blood Pressure(Sys/Dys)</label>
                  <input
                     type='text'
                     name='bloodPressure'
                     className='form-input'
                  ></input>
               </div>


               {/* bloodOxyLvl */}
               <div className="form-row">
                  <label type='text' name='bloodOxyLvl' className='form-label'>bloodOxyLvl</label>
                  <input
                     type='text'
                     name='bloodOxyLvl'
                     className='form-input'
                  ></input>
               </div>

               {/* respiration */}
               <div className="form-row">
                  <label type='text' name='respiration' className='form-label'>श्वसनम् / Respiration</label>
                  <input
                     type='text'
                     name='respiration'
                     className='form-input'
                  ></input>
               </div>
            </div>


            <br />
            <br />


            {/* presentIllness */}
            <label type='text' name='presentIllness' className='form-label'>वर्तमान व्याधी वृत्त / Present Illness</label>
            <textarea
               name='presentIllness'
               className='form-textarea-big'
               rows={20}
               cols={100}
            ></textarea>

            {/* chestExam */}
            <label type='text' name='chestExam' className='form-label'>उर: परीक्षण / Chest Exam</label>
            <textarea
               name='chestExam'
               className='form-textarea-small'
               rows={20}
               cols={100}
            ></textarea>

            {/* abdominalExam */}
            <label type='text' name='abdominalExam' className='form-label'>उदर परीक्षण / Abdominal Exam</label>
            <textarea
               name='abdominalExam'
               className='form-textarea-small'
               rows={20}
               cols={100}
            ></textarea>


            {/* investigations */}
            <label type='text' name='investigations' className='form-label'> Investigations </label>
            <textarea
               name='investigations'
               className='form-textarea-small'
               rows={20}
               cols={100}
            ></textarea>

            <br />
            <br />


            {/* HETU */}
            <div className="diff-hetu">
               <div className="form-row">
                  <label type='text' name='hetu' className='form-label'>हेतु / Hetu</label>
                  <div className="form-row">
                     <input
                        type='text'
                        name='hetu'
                        className='diff-input'
                     ></input>
                  </div>

               </div>
            </div>




            <div className="diff-center">
               {/* DOOSHYA */}
               <div className='form-row'>
                  <label type='text' name='dooshya' className='form-label'>दूष्यं / Dooshya</label>
                  <input
                     type='text'
                     name='dooshya'
                     className='diff-input'
                  ></input>
               </div>

               {/* DOSH */}
               <div className='form-row'>
                  <label type='text' name='dosh' className='form-label'>दोषं / Dosh</label>
                  <input
                     type='text'
                     name='dosh'
                     className='diff-input'
                  ></input>
               </div>
            </div>


            {/* NIDAN */}
            <label type='text' name='nidan' className='form-label'>निदानं / Diagnosis</label>
            <div className="diff-center">
               <div className="form-row">
                  <input
                     type='text'
                     name='nidanOne'
                     className='diff-input'
                  ></input>
               </div>
               <div className="form-row">
                  <input
                     type='text'
                     name='nidanTwo'
                     className='diff-input'
                  ></input>
               </div>
            </div>


            {/* AVASTHA */}
            <div className="diff-avastha">
               <div className="form-row">
                  <label type='text' name='avastha' className='form-label'>अवस्था / Avastha</label>
                  <input
                     type='text'
                     name='avastha'
                     className='diff-input'
                  ></input>
               </div>
            </div>


            {/* CHIKITSATATVA */}
            <div className="diff-chikitsatatva">
               <div className="form-row">
                  <label type='text' name='chikitsaTatva' className='form-label'>चिकित्सा तत्व / ChikitsaTatva</label>
                  <input
                     type='text'
                     name='chikitsaTatva'
                     className='diff-input'
                  ></input>
               </div>
            </div>


            {/* CHIKITSA */}
            <div className="form-row">
               <label type='text' name='chikitsa' className='form-label'>चिकित्सा / Chikitsa</label>
               <textarea
                  name='chikitsa'
                  className='diff-textarea-big'
                  rows={20}
                  cols={100}
               ></textarea>
            </div>

            {/* EMPTY SPACE CODE */}
            <div className="form-space">
               <br />
            </div>

            {/* DONTS */}
            <h4 className='diff-h4'>अपथ्य / Don'ts</h4>
            <div className="diff-diet-center">
               <div className="form-row">
                  <label type='text' name='dontdiet' className='form-label'>आहार / Diet</label>
                  <textarea
                     name='dontDiet'
                     className='diff-textarea-small'
                     rows={20}
                     cols={100}
                  ></textarea>
               </div>

               <div className="form-row">
                  <label type='text' name='dontRoutine' className='form-label'>विहार / Routine</label>
                  <textarea
                     name='dontRoutine'
                     className='diff-textarea-small'
                     rows={20}
                     cols={100}
                  ></textarea>
               </div>
            </div>


            {/* DOs */}
            <h4 className='diff-h4'>पथ्य / Dos</h4>
            <div className="diff-diet-center">
               <div className="form-row">
                  <label type='text' name='dodiet' className='form-label'>आहार / Diet</label>
                  <textarea
                     name='doDiet'
                     className='diff-textarea-small'
                     rows={20}
                     cols={100}
                  ></textarea>
               </div>

               <div className="form-row">
                  <label type='text' name='doRoutine' className='form-label'>विहार / Routine</label>
                  <textarea
                     name='doRoutine'
                     className='diff-textarea-small'
                     rows={20}
                     cols={100}
                  ></textarea>
               </div>
            </div>


            {/* SAMPRAPTI */}
            <div className="form-row">
               <label type='text' name='sanprapti' className='form-label'>सम्प्राप्ती / Samprapti</label>
               <textarea
                  name='sanprapti'
                  className='form-textarea-small'
                  rows={20}
                  cols={100}
               ></textarea>
            </div>

            {/* EMPTY SPACE CODE */}
            <div className="form-space">
               <br />
            </div>

            {/* BUTTONS */}

            <div className="caseSubmit">
               <button
                  type='submit'
                  className='btn btn-block casepaper-submit'
                  disabled={isSubmitting}
               >
                  {isSubmitting ? 'submitting...' : 'submit'}
               </button>
            </div>

         </Form>
      </Wrapper>
   )
}

export default AddCasepaper