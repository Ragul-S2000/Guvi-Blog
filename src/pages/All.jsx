import React from 'react'
import Card from '../components/Card'

const All = ({datas}) => {
  return (
    <>
     {datas.map((carddata,ind)=><Card carddata={carddata} key={ind}/>)}
    </>
  )
}

export default All