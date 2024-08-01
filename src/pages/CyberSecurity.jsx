import React from 'react'
import Card from '../components/Card'

const CyberSecurity = ({ datas }) => {
  const CSdata = datas.filter(item => item.course ==="Cyber security")
  return <>
    {
      CSdata.map((carddata, i) => <Card carddata={carddata} key={i} /> )
    }
  </>
}

export default CyberSecurity