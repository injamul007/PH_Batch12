import React, { use } from 'react';
import { Bar, BarChart, XAxis, YAxis } from 'recharts';

const MarksChart = ({marksPromise}) => {

  const marksDataRes = use(marksPromise)
  const marksData = marksDataRes.data
  // console.log(marksData)  

  //data processing for the chart
  const MarksChartData = marksData.map(studentData => {
    const student = {
      id: studentData.student_id,
      name: studentData.name,
      physics: studentData.marks.physics,
      chemistry: studentData.marks.chemistry,
      math: studentData.marks.math,
    }

    const average = (student.physics + student.chemistry + student.math) / 3

    student.average = average

    return student;
  })
  console.log(MarksChartData)

  return (
    <div>
      <BarChart width={700} height={500} data={MarksChartData}>
        <XAxis dataKey={'name'}></XAxis>
        <YAxis></YAxis>
        <Bar dataKey={'average'} fill='blue'></Bar>
        <Bar dataKey={'math'} fill='red'></Bar>
      </BarChart>
    </div>
  );
};

export default MarksChart;