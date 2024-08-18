import React from 'react'
import { useAllCasepapersContext } from '../pages/AllCasepapers';
import Wrapper from '../assets/wrappers/CasepapersContainer';
import Casepaper from './Casepaper'

const CasepapersContainer = () => {
  const { data } = useAllCasepapersContext();
  const { casepapers, totalCasepapers } = data

  if (casepapers.length === 0) {
    return (

      <h3>No casepapers to display...</h3>
    );
  }
  return (
    <Wrapper>
      <h5>{totalCasepapers} casepaper{totalCasepapers > 1 && 's'} found</h5>
      <div className="casepapers">
        {casepapers.map((casepaper) => {
          return <Casepaper key={casepaper._id}{...casepaper} />
        })}
      </div>
    </Wrapper>
  )
}

export default CasepapersContainer
