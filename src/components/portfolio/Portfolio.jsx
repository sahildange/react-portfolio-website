import React from 'react'
import './portfolio.css'
import IMG1 from '../../assets/portfolio1.jpg'
import IMG2 from '../../assets/portfolio2.jpg'
import IMG3 from '../../assets/portfolio3.jpg'
import IMG4 from '../../assets/portfolio4.jpg'
import IMG5 from '../../assets/portfolio5.jpg'
import IMG6 from '../../assets/portfolio6.jpg'


const data = [
{
  id: 1,
  image: IMG1, 
  title: 'Hotel Booking Website',
  github: 'https://github.com/sahildange/Reactjs-Sahil-Hotel-Booking.git',
  demo: 'https://drive.google.com/file/d/1DwD9s85Ms8qXweAOB-N_u9k3dYLf5Or6/view?usp=sharing'
},
{
  id: 2,
  image: IMG2, 
  title: 'WILL BE DONE LATER',
  github: 'https://github.com/sahildange?tab=projects',
  demo: 'https://dribbble.com/shots/19314584-Orion-UI-kit-for-Figma'
},
{
  id: 3,
  image: IMG3, 
  title: 'WILL BE DONE LATER',
  github: 'https://github.com/sahildange?tab=projects',
  demo: 'https://dribbble.com/shots/19314636-Eclipse-Figma-dashboard-UI-kit-for-data-design-web-apps'
},
{
  id: 4,
  image: IMG4, 
  title: 'WILL BE DONE LATER',
  github: 'https://github.com/sahildange?tab=projects',
  demo: 'https://dribbble.com/shots/19314584-Orion-UI-kit-for-Figma'
},
{
  id: 5,
  image: IMG5, 
  title: 'WILL BE DONE LATER',
  github: 'https://github.com/sahildange?tab=projects',
  demo: 'https://dribbble.com/shots/19314530-Data-visualization-on-the-map'
},
{
  id: 6,
  image: IMG6, 
  title: 'WILL BE DONE LATER',
  github: 'https://github.com/sahildange?tab=projects',
  demo: 'https://dribbble.com/shots/19314622-Eclipse-Figma-dashboard-UI-kit-for-data-design-web-apps'
}

]

const Portfolio = () => {
  return (
    <section id='portfolio'>Portfolio
    <h5>Recent work</h5>
    <h2>Portfolio</h2>
    <div className="container portfolio_container">
      {
        data.map(({id, image, title, github, demo}) => {
          return(
            <article key={id} className='portfolio_item'>
            <div className="portfolio_item-image">
            <img src={image} alt="" />
            </div>
            <h3>{title}</h3> 
            <div className="portfolio_item-cta">
            <a href={github} className='btn'  target='blank'>GITHUB</a>
            <a href= {demo} className='btn btn-primary' target='blank'>LIVE DEMO</a>
            </div>
            </article>
          )
        })
      }
      </div>
    </section>
  
  )
}

export default Portfolio