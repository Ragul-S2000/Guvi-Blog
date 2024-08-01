import React from 'react'

const Card = ({carddata,ind}) => {
  return (
    <div style={{ width: '65vh' }}  className=" card col-sm-12  col-lg-4 col-md-4 col-xl-4 mx-2 mt-3  ">
      <a href={carddata.link} style={{ textDecoration: 'none' }} >
        
      <img className='card-img-top' style={{ height: '35vh' }} src={carddata.img} alt="" />
      <div className="card-body ">
          <h5 className="card-text text-black ">{carddata.content}</h5>
        </div>
        <div className="card-footer bg-transparent  border-0 ">
          <p className='text-muted mb-0 '>By<span className='mx-2'>{carddata.Author}</span></p>
          <div className='d-flex flex-row'>
          <p className='text-black '>{carddata.Date}</p>
            <p className='text-black position-absolute end-0 me-3'>{carddata.Read}</p>
          </div>
        </div>
    
      </a>

    </div>
   
  
  
  )
}

export default Card