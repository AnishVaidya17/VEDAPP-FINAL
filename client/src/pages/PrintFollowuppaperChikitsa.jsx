import React from 'react'
import Wrapper from '../assets/wrappers/DashboardFormPage'
import { Link } from 'react-router-dom';
import { toast } from 'react-toastify';
import customFetch from '../utils/customFetch';
import { useNavigate, useParams, useLoaderData } from 'react-router-dom'


//LOADER - PRINT FOLLOWUPPAPER CHIKITSA
export const loader = async ({ params }) => {
    try {
        const { data } = await customFetch.get(`/followuppapers/${params.id}`);
        console.log(data);
        return data;
    } catch (error) {
        toast.error(error?.response?.data?.msg);
        return redirect('/dashboard/all-followuppapers');
    }

};

const PrintFollowuppaperChikitsa = () => {

    window.focus();
    window.scroll(0, 0, "smooth")

    const navigate = useNavigate()

    const params = useParams();
    //console.log(params);

    const { followuppaper } = useLoaderData();
    console.log(followuppaper);

    const vari = {
        date: new Date().toJSON().slice(0, 10)
    }



    return (
        <Wrapper>
            <h3>Dr. Vaidya Ayurveda Clinic</h3>
            <h4>Followup Chikitsa for {followuppaper.followup_name} {followuppaper.followup_middlename} {followuppaper.followup_lastname}</h4>
            <h5>Date: {vari.date}</h5>
            {/* FOLLOWUP CHIKITSA */}
            <div className="form-row">
                <label type='text' name='followup_chikitsa' className='form-label'>Followup Chikitsa</label>
                <textarea
                    name='followup_chikitsa'
                    className='diff-diff-textarea'
                    rows={20}
                    cols={100}
                    value={followuppaper.followup_chikitsa}
                ></textarea>
                <button className='btn btn-block btn-print' onClick={() => navigate(-1)}>Back</button>
            </div>
        </Wrapper>
    )
}

export default PrintFollowuppaperChikitsa