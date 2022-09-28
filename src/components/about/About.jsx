import React from 'react'
import './about.css'
import ME from '../../assets/about.jpg'
import {RiAwardFill} from 'react-icons/ri'
import {FiUsers} from 'react-icons/fi'
import {GiOpenFolder} from 'react-icons/gi'


const About = () => {
  return (
    <section id= 'about'>
    <h5>Get To Know</h5>
    <h2>About Me</h2>
    <div className="container about_container">
    <div className="about_me">
    <div className="about_me-image">
      <img src= {ME}  alt="About Image" />
    </div>

    </div>

     <div className="about_content">
      <div className="about_cards">
        <article className='about_card'>
          <RiAwardFill className='about_icon'/>
         <h5>Experience</h5>
        <small>Fresher </small>
        </article>

       <article className='about_card'>
          <FiUsers className='about_icon'/>
         <h5>Company </h5>
        <small>Infovision</small>
        </article>


        <article className='about_card'>
          <GiOpenFolder className='about_icon'/>
         <h5>Projects</h5>
        <small>10+ Projects </small>
       </article> 
        </div>
           
           <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. 
            Quam eum incidunt dolores debitis culpa soluta fugiat, 
            veritatis quibusdam nam nulla voluptas eligendi porro unde facilis voluptates officia, 
            beatae laudantium. Rerum?
           </p>

           <a href="#contact" className='btn btn-primary'>Lets Talk </a>

     </div>
    </div>
    
    </section>
    
  )
}

export default About