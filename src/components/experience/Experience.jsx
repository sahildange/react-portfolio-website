import React from 'react'
import './experience.css'
import {BsPatchCheckFill} from 'react-icons/bs'


const Experience = () => {
  return (
    <section id= 'experience'>
      <h5> Skills I have </h5>
      <h2> Experience </h2>

      <div className="container experience_container">
     <div className="experience_frontend">
     <h3> Frontend Dev  </h3>
     <div className="experience_content"> 
     <article className='experience_details'>
      <BsPatchCheckFill className='experience_details-icon'/>
      <div>
      <h4> HTML </h4>
      <small className='text-light'> Moderate </small>
      </div>
     </article>

     <article className='experience_details'>
      <BsPatchCheckFill className='experience_details-icon'/>
      <div>
      <h4>CSS</h4>
      <small className='text-light'> Moderate </small>
      </div>
     </article>

     <article className='experience_details'>
      <BsPatchCheckFill className='experience_details-icon'/>
      <div>
      <h4> Java </h4>
      <small className='text-light'> Experienced </small>
      </div>
     </article>

     <article className='experience_details'>
      <BsPatchCheckFill className='experience_details-icon'/>
      <div>
      <h4>JavaScript</h4>
      <small className='text-light'> Experienced </small>
      </div>
     </article>

     <article className='experience_details'>
      <BsPatchCheckFill className='experience_details-icon'/>
      <div>
      <h4>  React  </h4>
      <small className='text-light'> Experienced </small>
      </div>
     </article>

      </div>
     </div>

     {/* END OF FRONTEND */}
     
     <div className="experience_backend">
       
     <h3> Backend Dev</h3>
     <div className="experience_content"> 
     <article className='experience_details'>
      <BsPatchCheckFill className='experience_details-icon'/>
      <div>
      <h4> Oracle </h4>
      <small className='text-light'> Moderate </small>
      </div>
     </article>

     <article className='experience_details'>
      <BsPatchCheckFill className='experience_details-icon'/>
     <div>
     <h4> Firebase </h4>
      <small className='text-light'> Moderate </small>
     </div>
     </article>

     <article className='experience_details'>
      <BsPatchCheckFill className='experience_details-icon'/>
      <div>
      <h4> Spring Boot </h4>
      <small className='text-light'> Experienced </small>
      </div>
     </article>

     <article className='experience_details'>
      <BsPatchCheckFill className='experience_details-icon'/>
      <div>
      <h4> My SQL </h4>
      <small className='text-light'> Experienced </small>
      </div>
     </article>

     <article className='experience_details'>
      <BsPatchCheckFill className='experience_details-icon'/>
      <div>
      <h4> Mongo DB </h4>
      <small className='text-light'> Basic </small>
      </div>
     </article>
    </div>
     </div>
     </div>
    </section>
  )
}

export default Experience