import React from 'react'
import { useAllFollowuppapersContext } from '../pages/AllFollowuppapers'
import Wrapper from '../assets/wrappers/CasepapersContainer';
import FollowupPaper from './FollowupPaper';


const FP_Container = () => {
  const { data } = useAllFollowuppapersContext();
  const { followuppapers, totalFollowuppapers } = data

  if (followuppapers.length === 0) {
    return (

      <h3>No Followup Papers to display...</h3>
    );
  }

  return (
    <Wrapper>
      
      <div className="casepapers">
        {followuppapers.map((followuppaper) => {
          return <FollowupPaper key={followuppaper._id}{...followuppaper} />
        })}
      </div>
    </Wrapper>
  )
}

export default FP_Container