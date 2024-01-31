

// import Image from './Images/img4.png'

import React from 'react'

export default function Home() {
  return (
    
  <>
  
  {/* <div className='my-5 align-items-center justify-content-center middle'>

   <h1 className="">This is React Project</h1>
   
   <table>
    <tr>
      <th className='my-2 p-2'>Name</th>
      <th className='my-2 p-2'>Class </th>
      <th className='my-2 p-2'>Roll</th>
    </tr>
    <tr>
      <td className='my-2 p-2'>Aniket Kumar Singh</td>
      <td className='my-2 p-2'>MCA</td>
      <td className='my-2 p-2'>16971022003</td>
    </tr>
   
   </table> */}


   <div id="carouselExampleIndicators" className="carousel slide">
  <div className="carousel-indicators">
    <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="0" className="active" aria-current="true" aria-label="Slide 1"></button>
    <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="1" aria-label="Slide 2"></button>
    <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="2" aria-label="Slide 3"></button>
  </div>
  <div className="carousel-inner">
    <div className="carousel-item active">
      <img src="https://source.unsplash.com/featured?technician" className="img1 d-block w-100" alt="..."/>
    </div>
    <div className="carousel-item">
      <img src="https://source.unsplash.com/featured?carpainter" className=" img2 d-block w-100" alt="..."/>
    </div>
    <div className="carousel-item">
      <img src="https://source.unsplash.com/featured?labour" className=" img 3 d-block w-100" alt="..."/>
    </div>
  </div>
  <button className="carousel-control-prev" type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide="prev">
    <span className="carousel-control-prev-icon" aria-hidden="true"></span>
    <span className="visually-hidden">Previous</span>
  </button>
  <button className="carousel-control-next" type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide="next">
    <span className="carousel-control-next-icon" aria-hidden="true"></span>
    <span className="visually-hidden">Next</span>
  </button>
</div>




  
  
  {/* </div> */}
  </>
  )
}
