import React from 'react';
import {IoFolderOutline, IoHome} from "react-icons/io5";
import {NavLink, useLocation} from "react-router-dom";

const Navigation = ({clearInput}) => {
  const location = useLocation()
  const homeLocationStyle = ['flex items-center p-[12px] hover:bg-[#1F1F1F] rounded-[8px] cursor-pointer mb-[10px]', location.pathname === '/' ? 'bg-[#1F1F1F]' : '']
  const libraryLocationStyle = ['flex items-center p-[12px] hover:bg-[#1F1F1F] rounded-[8px] cursor-pointer mb-[10px]', location.pathname === '/library' ? 'bg-[#1F1F1F]' : '']
  return (
    <nav className=''>
      <ul className='list-none'>
        <NavLink to='/'>
          <li className={homeLocationStyle.join(' ')}>
            <IoHome className='mr-[16px]'/>
            <span>Home</span>
          </li>
        </NavLink>
        <NavLink to='/library'>
          <li className={libraryLocationStyle.join(' ')}>
            <IoFolderOutline className='mr-[16px]'/>
            <span>Library</span>
          </li>
        </NavLink>
      </ul>
    </nav>
  );
};

export default Navigation;