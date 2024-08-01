import React from 'react'
import Card from '../components/Card'

const Career = ({datas}) => {
  const careerData = datas.filter(item => item.course === "Career")
  return <>
    {
      careerData.map((carddata, i) => {
        return <Card carddata={carddata} key={i} />

      })
    }
  </>
}

export default Career