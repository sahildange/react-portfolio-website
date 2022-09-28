import React from 'react'
import './services.css'
import {BsCheckLg} from 'react-icons/bs'

const Services = () => {
  return (
    <section id='services'>
    <h5>What i Offer</h5>
    <h2>Services</h2>

    <div className="container services_container">
      <article className="service">
        <div className="service_head">
          <h3>Web Development</h3>
        </div>

        <ul className='service_list'>
          <li>
            <BsCheckLg className='service_list-icon' />
            <p>  Lorem ipsum dolor sit amet.</p>
          </li>
          <li>
            <BsCheckLg className='service_list-icon' />
            <p>  Lorem ipsum dolor sit amet.</p>
          </li>
          <li>
            <BsCheckLg className='service_list-icon' />
            <p>  Lorem ipsum dolor sit amet.</p>
          </li>
          <li>
            <BsCheckLg className='service_list-icon' />
            <p>  Lorem ipsum dolor sit amet.</p>
          </li>
          <li>
            <BsCheckLg className='service_list-icon' />
            <p>  Lorem ipsum dolor sit amet.</p>
          </li>
          </ul>
      </article>

       {/* END OF WEB DEV */}

       <article className="service">
        <div className="service_head">
          <h3>App Development</h3>
        </div>

        <ul className='service_list'>
          <li>
            <BsCheckLg className='service_list-icon' />
            <p>  Lorem ipsum dolor sit amet.</p>
          </li>
          <li>
            <BsCheckLg className='service_list-icon' />
            <p>  Lorem ipsum dolor sit amet.</p>
          </li>
          <li>
            <BsCheckLg className='service_list-icon' />
            <p>Lorem ipsum dolor sit amet.</p>
          </li>
          <li>
            <BsCheckLg className='service_list-icon' />
            <p>  Lorem ipsum dolor sit amet.</p>
          </li>
          <li>
            <BsCheckLg className='service_list-icon' />
            <p>  Lorem ipsum dolor sit amet.</p>
          </li>
          <li>
            <BsCheckLg className='service_list-icon' />
            <p>  Lorem ipsum dolor sit amet.</p>
          </li>
          </ul>
      </article>

       {/* END OF APP DEV */}

       <article className="service">
        <div className="service_head">
          <h3>Packaging Services</h3>
        </div>

        <ul className='service_list'>
          <li>
            <BsCheckLg className='service_list-icon' />
            <p>  Lorem ipsum dolor sit amet.</p>
          </li>
          <li>
            <BsCheckLg className='service_list-icon' />
            <p>  Lorem ipsum dolor sit amet.</p>
          </li>
          <li>
            <BsCheckLg className='service_list-icon' />
            <p>  Lorem ipsum dolor sit amet.</p>
          </li>
          <li>
            <BsCheckLg className='service_list-icon' />
            <p>  Lorem ipsum dolor sit amet.</p>
          </li>
          <li>
            <BsCheckLg className='service_list-icon' />
            <p>  Lorem ipsum dolor sit amet.</p>
          </li>
          </ul>
      </article>

       {/* END OF Packaging  */}

    </div>
    </section>
    
  )
}

export default Services