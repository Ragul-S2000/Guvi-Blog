import React from 'react'
import Card from '../components/Card'

const Fsd = ({datas}) => {
  const FSDdata = datas.filter(item => item.course === "FSD")
  return <>
    {
      FSDdata.map((carddata, i) => {
        return <Card carddata={carddata} key={i} />

      })
    }
  </>
}

export default Fsd