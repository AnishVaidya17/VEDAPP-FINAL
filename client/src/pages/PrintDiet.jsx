import React from 'react'
import { Link } from 'react-router-dom'
import { useNavigate, useParams, useLoaderData } from 'react-router-dom'
import { toast } from 'react-toastify';
import customFetch from '../utils/customFetch';

import Wrapper from '../assets/wrappers/DashboardFormPage'

import day from 'dayjs';
import advancedFormat from 'dayjs/plugin/advancedFormat';
day.extend(advancedFormat);

//LOADER - PRINT CASEPAPER DIET
export const loader = async ({ params }) => {
    try {
        const { data } = await customFetch.get(`/casepapers/${params.id}`);
        console.log(data);
        return data;
    } catch (error) {
        toast.error(error.response.data.msg);
        return redirect('/dashboard/');
    }

};

const PrintDiet = () => {
    window.focus();
    window.scroll(0, 0, "smooth")
    
    const params = useParams();
    //console.log(params);

    const { casepaper } = useLoaderData();
    console.log(casepaper);

    const navigate = useNavigate()

    const vari = {
        date: new Date().toJSON()
    }
    const date_created = day(vari.date)?.format('MMM Do, YYYY');
    console.log(date_created);

    return (
        <Wrapper>
            <h3>Dr. Vaidya Ayurveda Clinic</h3>
            <h4>{casepaper.name} {casepaper.middlename} {casepaper.lastname}</h4>
            <h5>Date: {date_created}</h5>
            {/* DONTS */}
            <h4 className='diff-h4'>Don'ts</h4>
            <div className="diff-center">
                <div className="form-row">
                    <label type='text' name='dontdiet' className='form-label'>Diet</label>
                    <textarea
                        name='dontDiet'
                        className='diff-diet-textarea'
                        rows={20}
                        cols={100}
                        defaultValue={casepaper.dontDiet}

                    ></textarea>
                </div>

                <div className="form-row">
                    <label type='text' name='dontRoutine' className='form-label'>Routine</label>
                    <textarea
                        name='dontRoutine'
                        className='diff-diet-textarea'
                        rows={20}
                        cols={100}
                        defaultValue={casepaper.dontRoutine}

                    ></textarea>
                </div>
            </div>
            {/* DOs */}
            <h4 className='diff-h4'>Dos</h4>
            <div className="diff-center">
                <div className="form-row">
                    <label type='text' name='dodiet' className='form-label'>Diet</label>
                    <textarea
                        name='doDiet'
                        className='diff-diet-textarea'
                        rows={20}
                        cols={100}
                        defaultValue={casepaper.doDiet}

                    ></textarea>
                </div>

                <div className="form-row">
                    <label type='text' name='doRoutine' className='form-label'>Routine</label>
                    <textarea
                        name='doRoutine'
                        className='diff-diet-textarea'
                        rows={20}
                        cols={100}
                        defaultValue={casepaper.doRoutine}
                    // value={doRoutine}
                    ></textarea>
                </div>
            </div>
            {/* <Link to='/dashboard/add-casepaper'>
                <button className='btn btn-block'>Back</button>
            </Link> */}

            <button className='btn btn-block btn-print' onClick={() => navigate(-1)}>Back</button>

        </Wrapper>

    )

}

export default PrintDiet

