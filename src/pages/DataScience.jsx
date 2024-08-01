import React from 'react'
import Card from '../components/Card' 

const DataScience = ({datas}) => {
  const DSdata = datas.filter(item => item.course === "Data science")
  return <>
    {
      DSdata.map((carddata, i) => {
        return <Card carddata={carddata} key={i} />

      })
    }
  </>
}

export default DataScience