import React from 'react';
import {IoFolderOutline, IoHome} from "react-icons/io5";
import {Link} from "react-router-dom";

const Navigation = () => {
  return (
    <nav className=''>
      <ul className='list-none'>
          <li className='flex items-center p-[12px] mb-[2px] hover:bg-[#1F1F1F] rounded-[8px] cursor-pointer'>
            <IoHome className='mr-[16px]'/>
            <Link to='/'><span>Home</span></Link>
          </li>
          <li className='flex items-center p-[12px] hover:bg-[#1F1F1F] rounded-[8px] cursor-pointer'>
            <IoFolderOutline className='mr-[16px]'/>
            <Link to='/library'><span>Library</span></Link>
          </li>
      </ul>
    </nav>
  );
};

export default Navigation;