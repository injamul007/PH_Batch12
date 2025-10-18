import React, { use, useState } from 'react';
import CountBox from '../CountBox/CountBox';
import TogglesBtns from "../Toggles_Btns/TogglesBtns"
import Issues from '../Issues/Issues';

const IssuesManagement = ({fetchPromise}) => {
  const [toggleStatus, setToggleStatus] = useState("All")
  const issuesData = use(fetchPromise)
  const [data, setData] = useState(issuesData)

  const filterData = toggleStatus == "All" ? data : data.filter((element) => element.status == toggleStatus)

  // console.log(filterData)

  return (
    <div>
      <CountBox data={data}></CountBox>

      {/* //? Toggle button design */}
      <TogglesBtns setToggleStatus={setToggleStatus}
      toggleStatus={toggleStatus}
      ></TogglesBtns>

    <div className='grid grid-cols-3 gap-4 container mx-auto mb-6'>
      {
      filterData.map(issue => <Issues key={issue.ticketId} issue={issue}
      data={data}
      setData={setData}></Issues>)
      }
    </div>

    </div>
  )
};

export default IssuesManagement;