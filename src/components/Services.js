import React from 'react';
// icon 
import { BsArrowUpRight } from 'react-icons/bs';
// motion
import { motion } from 'framer-motion';
// variants
import { fadeIn } from '../variants';

//services data 
const services = [{
    name: 'Front End Development',
    description: 'Worked on front end projects using CSS, ReactJS, Bootstrap, Chart.js, GSAP to make projects like Social Media Group landing page, Google Docs clone, Trading Profile Landing page.',
    link: 'Learn More',
  },
  {
    name: 'Machine Learning',
    description: 'Familiar with some Machine Learning Concepts and have made a project on a simple Artificail Neural Network to read handwritten alphabets, using the concept of backpropagation.',
    link: 'Learn More',
  },
  {
    name: 'Competitive Programming',
    description: 'Solved 1000+ problem solving questions on online platforms such as LeetCode, CodeChef, CodeForces, GFG, Hackerrank, etc. and have peaked 3 star rating on codechef.',
    link: 'Learn More',
  }
  
  // {
  //   name: 'Art',
  //   description: '',
  //   link: 'Learn More',
  // }
]

const Services = () => {
  return (
    <section className='section' id='services'>
      <div className="container mx-auto">
        <div className='flex flex-col lg:flex-row'>
          {/* text and image */}
          <motion.div 
            variants={fadeIn('right', 0.3)}
            initial='hidden'
            whileInView={'show'}
            viewport={{ once: false, amount: 0.3 }}
            className='flex-1 flex flex-col justify-center p-10'>

            <h2 className='h2 text-accent mb-6'>
              What I Do.
            </h2>
            <h3 className='h3 max-w-[550px] mb-16'>
              I'm a BTech undergrad with 2 years of experience in Competitive Programming and a year of experience in Front End Development.
            </h3>
            {/* <button className='btn btn-sm'>See My Work</button> */}
          </motion.div>

          {/* services  */}
          <motion.div
            variants={fadeIn('left', 0.5)}
            initial='hidden'
            whileInView={'show'}
            viewport={{ once: false, amount: 0.3 }}
            className='flex-1'>
            {/* services list  */}
            <div>
              {services.map((service, index) => {
                {/* destructure service  */}
                const {name, description, link} = service;
                return (
                  <div 
                    className='border-b border-white/20 h-[146px] mb-[38px] 
                    flex' 
                    key={index}>
                    <div className='max-w-[476px]'>
                      <h4 className='text-[20px] tracking-wider 
                      font-primary font-semibold mb-6'>
                        {name}
                      </h4>

                      <p className='font-secondary leading-tight'>
                        {description}
                      </p>
                    </div>

                    <div className='flex flex-col flex-1 items-end'>
                      <a href="#" className='btn w-9 h-9 mb-[42px] flex justify-center 
                        items-center'>
                        <BsArrowUpRight/>
                      </a>
                      <a href="#" className='text-gradient text-sm'>{link}</a>
                    </div>

                  </div>
                );
              })}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  )
};

export default Services;
