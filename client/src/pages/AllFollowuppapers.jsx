
import React from 'react'
import customFetch from '../utils/customFetch';
import { useLoaderData } from 'react-router-dom';
import { useContext, createContext } from 'react';
import { toast } from 'react-toastify';
import { FP_SearchContainer, FP_Container } from '../components/index';



// LOADER - FOLLOWUPPAPEPRS
export const loader = async ({ request }) => {

   console.log(request.url);
   const params = Object.fromEntries([...new URL(request.url).searchParams.entries(),])
   console.log(params);

   try {
      const { data } = await customFetch.get('/followuppapers', { params: params });
      return {
         data,
         searchValues: { ...params }
      };

   } catch (error) {
      toast.error(error?.response?.data?.msg)
      return error
   }
}

const AllFollowuppapersContext = createContext();

const AllFollowuppapers = () => {

   const { data, searchValues } = useLoaderData();

   return (
      <>
         <h2>All Followup Papers </h2>
         <AllFollowuppapersContext.Provider value={{ data, searchValues }}>
            <FP_SearchContainer />
            <FP_Container />
         </AllFollowuppapersContext.Provider>
      </>

   )
}

export const useAllFollowuppapersContext = () => useContext(AllFollowuppapersContext)

export default AllFollowuppapers