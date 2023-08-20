import React from 'react';
import ProjectCard from "./ProjectCard.js";

import { motion } from 'framer-motion';
import { fadeIn } from '../variants';
import Img1 from '../assets/portfolio-img1.png';
import Img2 from '../assets/portfolio-img2.png';
import Img3 from '../assets/portfolio-img3.png';


const Work = () => {
  return (
    <section className='section' id='work'>
      <div className="container mx-auto">
        <div className='flex flex-col lg:flex-row gap-x-10'>
          <motion.div 
          variants={fadeIn('right', 0.3)}
          initial='hidden'
          whileInView={'show'}
          viewport={{ once: false, amount: 0.3 }}
          className='flex-1 flex flex-col gap-y-12 mb-10 lg:mb-0'>
            {/* text */}
            <div>
              <h2 className='h2 leading-tight text-accent'>
              My Latest <br/>
              Work.
              </h2>
              <p className='max-w-sm mb-16'>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Magnam nulla ad maxime provident dolor beatae est ea sapiente. Quibusdam, eius?</p>
              <button className='btn btn-sm'>View All Projects</button>
            </div>

            {/* image */}
            <ProjectCard img= {Img1}
              imgPreTitle="ReactJS Frontend Project"
              imgTitle = "Social Group Landing Page Frontend" 
            />

          </motion.div>

          <motion.div 
          variants={fadeIn('left', 0.3)}
          initial='hidden'
          whileInView={'show'}
          viewport={{ once: false, amount: 0.3 }}
          className='flex-1 flex flex-col gap-y-10'>

            <ProjectCard img= {Img2}
              imgPreTitle="Frontend Project"
              imgTitle = "Trading Landing Page Frontend" 
            />

            <ProjectCard img= {Img3}
              imgPreTitle="API Project"
              imgTitle = "Weather App" 
            />
            
          </motion.div>
        </div>
      </div>
    </section>
  )
};

export default Work;
