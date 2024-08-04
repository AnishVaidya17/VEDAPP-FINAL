import React from 'react'
import { toast } from 'react-toastify';
import { CasepapersContainer, SearchContainer } from '../components/index';
import customFetch from '../utils/customFetch';
import { useLoaderData } from 'react-router-dom';
import { useContext, createContext } from 'react';


// LOADER - ALLCASEPAPERS
export const loader = async ({ request }) => {


  try {
    console.log(request.url);
    const params = Object.fromEntries([...new URL(request.url).searchParams.entries(),])
    console.log(params);

    const { data } = await customFetch.get('/casepapers', { params: params });
    //console.log(data);
    return {
      data,
      searchValues: { ...params }
    };
  } catch (error) {
    toast.error(error?.response?.data?.msg);
    return error;
  }
};

const AllCasepapersContext = createContext();


//MAIN ALLCASEPAPER FUNCTION
const AllCasepapers = () => {
  const { data, searchValues } = useLoaderData();
  return (
    <>
      <h2>All Casepapers</h2>
      <AllCasepapersContext.Provider value={{ data, searchValues }}>

        <SearchContainer />
        <CasepapersContainer />

      </AllCasepapersContext.Provider>

    </>

  )
}

export const useAllCasepapersContext = () => useContext(AllCasepapersContext);
export default AllCasepapers

