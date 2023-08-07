import React from 'react';
//images
import logo from '../assets/logo.svg';

const Header = () => {
  return <div className='py-8'>
    <div className="container mx-auto">
      <div className='flex justify-between items-center'>
        {/* logo */}
        <h1 className='uppercase text-accent text-[45px] font-medium'>
          HARSH<br />
          <span className='text-white'>
            BISHT
          </span>
        </h1>
        {/* <a href="#">
          <img src={logo} alt="" />
        </a> */}
        {/* button */}
        <button className='btn btn-sm'>Work with me</button>
      </div>
    </div>
  </div>;
};

export default Header;
