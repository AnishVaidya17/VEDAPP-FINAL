
import React, { useEffect } from 'react'
import Wrapper from '../assets/wrappers/DashboardFormPage'
import { Link, useOutlet, useOutletContext } from 'react-router-dom'
import { Form, useNavigation, redirect } from 'react-router-dom';
import { toast } from 'react-toastify';
import customFetch from '../utils/customFetch';


//ACTION - ADDCASEPAPER
export const action = async ({ request }) => {
  const formData = await request.formData()
  const data = Object.fromEntries(formData)
  console.log(data);
  try {
    await customFetch.post('/casepapers/', data);
    toast.success('Added Casepaper successfully');
    window.focus();
    window.scroll(0, 0, "smooth")
    return redirect('/dashboard');
  } catch (error) {
    toast.error(error?.response?.data?.msg);
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



  return (
    <Wrapper>
      <Form method='post' className='form'>
        <h2>Add Casepaper</h2>

        {/* <div className="form-center">
          <button className='btn btn-block clear-btn'>Clear All</button>
        </div> */}

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
            ////value={lastname}
            //onChange={handleCasepaperInput}
            ></input>
          </div>

          {/* gender */}
          <div className='form-row'>
            <label type='text' name='gender' className='form-label'>Gender</label>
            <input
              type='text'
              name='gender'
              className='form-input'
            ////value={gender}
            //onChange={handleCasepaperInput}
            ></input>
          </div>

          {/* address */}
          <div className='form-row'>
            <label type='text' name='address' className='form-label'>Address</label>
            <input
              type='text'
              name='address'
              className='form-input'
            ////value={address}
            //onChange={handleCasepaperInput}
            ></input>
          </div>

          {/* mobile number */}
          <div className='form-row'>
            <label type='text' name='mobilenumber' className='form-label'>Mobile no.</label>
            <input
              type='text'
              name='mobilenumber'
              className='form-input'
            ////value={mobilenumber}
            //onChange={handleCasepaperInput}
            ></input>
          </div>

          {/* occupation */}
          <div className='form-row'>
            <label type='text' name='occupation' className='form-label'>Occupation</label>
            <input
              type='text'
              name='occupation'
              className='form-input'
            ////value={occupation}
            //onChange={handleCasepaperInput}
            ></input>
          </div>

          {/* birthdate */}
          <div className='form-row'>
            <label type='text' name='birthdate' className='form-label'>Birthdate</label>
            <input
              type='date'
              name='birthdate'
              className='form-input'
            ////value={birthdate}
            //onChange={handleCasepaperInput}
            ></input>
          </div>

          {/* weight */}
          <div className='form-row'>
            <label type='text' name='weight' className='form-label'>Weight (KG)</label>
            <input
              type='text'
              name='weight'
              className='form-input'
            ////value={weight}
            //onChange={handleCasepaperInput}
            ></input>
          </div>

          {/* height */}
          <div className='form-row'>
            <label type='text' name='height' className='form-label'>Height(CM)</label>
            <input
              type='text'
              name='height'
              className='form-input'
            ////value={height}
            //onChange={handleCasepaperInput}
            ></input>
          </div>

          {/* age */}
          <div className='form-row'>
            <label type='text' name='age' className='form-label'>Age</label>
            <input
              type='text'
              name='age'
              className='form-input'
            ////value={age}
            //onChange={handleCasepaperInput}
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


          {/* casepapernumber */}
          <div className='form-row'>
            <label type='text' name='casepaperNumber' className='form-label'>CP no.</label>
            <input
              type='number'
              name='casepaperNumber'
              className='form-input'
            ////value={casepaperNumber}
            //onChange={handleCasepaperInput}
            ></input>
          </div>
        </div>


        {/* EMPTY SPACE CODE */}
        <div className="form-space">
          <br />
        </div>

        <div className="form-center">
          {/* pulse */}
          <div className="form-row">
            <label type='text' name='pulse' className='form-label'>Nadi/Pulse</label>
            <input
              type='text'
              name='pulse'
              className='form-input'
            ////value={pulse}
            //onChange={handleCasepaperInput}
            ></input>
          </div>

          {/* bloodPressure */}
          <div className="form-row">
            <label type='text' name='bloodPressure' className='form-label'>Blood Pressure(Sys/Dys)</label>
            <input
              type='text'
              name='bloodPressure'
              className='form-input'
            ////value={bloodPressure}
            //onChange={handleCasepaperInput}
            ></input>
          </div>


          {/* bloodOxyLvl */}
          <div className="form-row">
            <label type='text' name='bloodOxyLvl' className='form-label'>bloodOxyLvl</label>
            <input
              type='text'
              name='bloodOxyLvl'
              className='form-input'
            ////value={bloodOxyLvl}
            //onChange={handleCasepaperInput}
            ></input>
          </div>

          {/* respiration */}
          <div className="form-row">
            <label type='text' name='respiration' className='form-label'>respiration</label>
            <input
              type='text'
              name='respiration'
              className='form-input'
            ////value={respiration}
            //onChange={handleCasepaperInput}
            ></input>
          </div>
        </div>


        {/* EMPTY SPACE CODE */}
        <div className="form-space">
          <br />
        </div>


        {/* presentIllness */}
        <label type='text' name='presentIllness' className='form-label'>PresentIllness</label>
        <textarea
          name='presentIllness'
          className='form-textarea-two'
          rows={20}
          cols={100}
        ////value={presentIllness}
        //onChange={handleCasepaperInput}
        ></textarea>

        {/* chestExam */}
        <label type='text' name='chestExam' className='form-label'>Chest Exam</label>
        <textarea
          name='chestExam'
          className='form-textarea-small'
          rows={20}
          cols={100}
        ////value={chestExam}
        //onChange={handleCasepaperInput}
        ></textarea>

        {/* abdominalExam */}
        <label type='text' name='abdominalExam' className='form-label'>Abdominal Exam </label>
        <textarea
          name='abdominalExam'
          className='form-textarea-small'
          rows={20}
          cols={100}
        ////value={abdominalExam}
        //onChange={handleCasepaperInput}
        ></textarea>


        {/* investigations */}
        <label type='text' name='investigations' className='form-label'> Investigations </label>
        <textarea
          name='investigations'
          className='form-textarea-small'
          rows={20}
          cols={100}
        ////value={investigations}
        //onChange={handleCasepaperInput}
        ></textarea>

        <br />
        <br />


        {/* HETU */}
        <div className="diff-hetu">
          <div className="form-row">
            <label type='text' name='hetu' className='form-label'>Hetu</label>
            {/* <textarea
						name='hetu'
						className='diff-textarea'
						rows={20}
						cols={100}
						//value={hetu}
						//onChange={handleCasepaperInput}
					></textarea> */}
            <div className="form-row">
              <input
                type='text'
                name='hetu'
                className='diff-input'
              //value={hetu}
              //onChange={handleCasepaperInput}
              ></input>
            </div>

          </div>
        </div>




        <div className="diff-center">
          {/* DOOSHYA */}
          <div className='form-row'>
            <label type='text' name='dooshya' className='form-label'>Dooshya</label>
            {/* <textarea
							name='dooshya'
							className='diff-textarea'
							rows={20}
							cols={100}
							//value={dooshya}
							onChange={handleCasepaperInput}
						></textarea> */}
            <input
              type='text'
              name='dooshya'
              className='diff-input'
            //value={dooshya}
            //onChange={handleCasepaperInput}
            ></input>
          </div>

          {/* DOSH */}
          <div className='form-row'>
            <label type='text' name='dosh' className='form-label'>dosh</label>
            {/* <textarea
							name='dosh'
							className='diff-textarea'
							rows={20}
							cols={100}
							//value={dosh}
							//onChange={handleCasepaperInput}
						></textarea> */}
            <input
              type='text'
              name='dosh'
              className='diff-input'
            //value={dosh}
            //onChange={handleCasepaperInput}
            ></input>
          </div>
        </div>


        {/* NIDAN */}
        <label type='text' name='nidan' className='form-label'>Nidan/Diagnosis</label>
        <div className="diff-center">
          <div className="form-row">
            <input
              type='text'
              name='nidanOne'
              className='diff-input'
            //value={nidanOne}
            //onChange={handleCasepaperInput}
            ></input>
          </div>
          <div className="form-row">
            <input
              type='text'
              name='nidanTwo'
              className='diff-input'
            //value={nidanTwo}
            //onChange={handleCasepaperInput}
            ></input>
          </div>
        </div>


        {/* AVASTHA */}
        <div className="diff-avastha">
          <div className="form-row">
            <label type='text' name='avastha' className='form-label'>Avastha</label>
            {/* <textarea
						name='avastha'
						className='diff-textarea'
						rows={20}
						cols={100}
						//value={avastha}
						//onChange={handleCasepaperInput}
					></textarea> */}
            <input
              type='text'
              name='avastha'
              className='diff-input'
            //value={avastha}
            //onChange={handleCasepaperInput}
            ></input>
          </div>
        </div>


        {/* CHIKITSATATVA */}
        <div className="diff-chikitsatatva">
          <div className="form-row">
            <label type='text' name='chikitsaTatva' className='form-label'>ChikitsaTatva</label>
            {/* <textarea
						name='chikitsaTatva'
						className='diff-textarea'
						rows={20}
						cols={100}
						//value={chikitsaTatva}
						//onChange={handleCasepaperInput}
					></textarea> */}
            <input
              type='text'
              name='chikitsaTatva'
              className='diff-input'
            //value={chikitsaTatva}
            //onChange={handleCasepaperInput}
            ></input>
          </div>
        </div>


        {/* CHIKITSA */}
        <div className="form-row">
          <label type='text' name='chikitsa' className='form-label'>Chikitsa</label>
          <textarea
            name='chikitsa'
            className='diff-textarea-big'
            rows={20}
            cols={100}
          //value={chikitsa}
          //onChange={handleCasepaperInput}
          ></textarea>
        </div>

        {/* for printing Chikitsa */}
        {/* <div className='btn-print'>
          <Link to='/print-chikitsa'>
            <button className='btn btn-block submit-btn'>Print Chikitsa</button>
          </Link>
        </div> */}

        {/* EMPTY SPACE CODE */}
        <div className="form-space">
          <br />
        </div>

        {/* DONTS */}
        <h4 className='diff-h4'>Don'ts</h4>
        <div className="diff-diet-center">
          <div className="form-row">
            <label type='text' name='dontdiet' className='form-label'>Diet</label>
            <textarea
              name='dontDiet'
              className='diff-textarea-small'
              rows={20}
              cols={100}
            ////value={dontDiet}
            //onChange={handleCasepaperInput}
            ></textarea>
          </div>

          <div className="form-row">
            <label type='text' name='dontRoutine' className='form-label'>Routine</label>
            <textarea
              name='dontRoutine'
              className='diff-textarea-small'
              rows={20}
              cols={100}
            ////value={dontRoutine}
            //onChange={handleCasepaperInput}
            ></textarea>
          </div>
        </div>


        {/* DOs */}
        <h4 className='diff-h4'>Dos</h4>
        <div className="diff-diet-center">
          <div className="form-row">
            <label type='text' name='dodiet' className='form-label'>Diet</label>
            <textarea
              name='doDiet'
              className='diff-textarea-small'
              rows={20}
              cols={100}
            ////value={doDiet}
            //onChange={handleCasepaperInput}
            ></textarea>
          </div>

          <div className="form-row">
            <label type='text' name='doRoutine' className='form-label'>Routine</label>
            <textarea
              name='doRoutine'
              className='diff-textarea-small'
              rows={20}
              cols={100}
            ////value={doRoutine}
            //onChange={handleCasepaperInput}
            ></textarea>
          </div>
        </div>


        {/* EMPTY SPACE CODE
        <div className="form-space">
          <br />
        </div> */}

        {/* SANPRAPTI */}
        <div className="form-row">
          <label type='text' name='sanprapti' className='form-label'>Sanprapti</label>
          <textarea
            name='sanprapti'
            className='form-textarea-small'
            rows={20}
            cols={100}
          //value={sanprapti}
          //onChange={handleCasepaperInput}
          ></textarea>
        </div>



        {/* EMPTY SPACE CODE */}
        <div className="form-space">
          <br />
        </div>

        {/* BUTTONS */}

        <div className="form-row">
          <button
            type='submit'
            className='btn btn-block casepaper-submit'
            disabled={isSubmitting}
          >
            {isSubmitting ? 'submitting...' : 'submit'}
          </button>

          {/* <button className='btn btn-block clear-btn'>Clear All</button> */}
        </div>



      </Form>
    </Wrapper>
  )
}

export default AddCasepaper