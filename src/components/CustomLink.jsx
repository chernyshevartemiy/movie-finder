import React from 'react';
import {Link, useMatch} from "react-router-dom";
import {IoHome, IoFolderOutline} from "react-icons/io5";

const CustomLink = ({to, children}) => {
  const match = useMatch(to)
  const styles = match ? 'flex items-center p-[12px] hover:bg-[#1F1F1F] rounded-[8px] cursor-pointer mb-[10px] bg-[#1F1F1F]' : 'flex items-center p-[12px] hover:bg-[#1F1F1F] rounded-[8px] cursor-pointer mb-[10px]'
  return (
    <Link
      to={to}
    >
      <li
        className={styles}>
        {children === 'Home' ? <IoHome className='mr-[16px]'/> : <IoFolderOutline className='mr-[16px]' />}
        <span>{children}</span>
      </li>
    </Link>
  );
};

export default CustomLink;