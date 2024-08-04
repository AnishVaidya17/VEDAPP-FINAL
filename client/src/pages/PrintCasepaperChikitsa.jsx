import React, { useEffect } from 'react'
import Wrapper from '../assets/wrappers/DashboardFormPage'
import { Link } from 'react-router-dom';
import { toast } from 'react-toastify';
import customFetch from '../utils/customFetch';
import { useNavigate, useParams, useLoaderData } from 'react-router-dom'



//LOADER - PRINT CASEPAPER CHIKITSA
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


const PrintCasepaperChikitsa = () => {

    window.focus();
    window.scroll(0, 0, "smooth")

    const navigate = useNavigate()

    const params = useParams();
    //console.log(params);

    const { casepaper } = useLoaderData();
    console.log(casepaper);
    const vari = {
        date: new Date().toJSON().slice(0, 10)
    }

    return (
        <Wrapper>
            <h3>Dr. Vaidya Ayurveda Clinic</h3>
            <h4>Chikitsa for {casepaper.name} {casepaper.middlename} {casepaper.lastname}</h4>
            <h5>Date: {vari.date}</h5>
            {/* CHIKITSA */}
            <div className="form-row">
                <label type='text' name='chikitsa' className='form-label'>Chikitsa</label>
                <textarea
                    name='chikitsa'
                    className='diff-diff-textarea'
                    rows={20}
                    cols={100}
                    defaultValue={casepaper.chikitsa}
                ></textarea>

                <button className='btn btn-block btn-print' onClick={() => navigate(-1)}>Back</button>

            </div>
        </Wrapper>
    )
}

export default PrintCasepaperChikitsa
