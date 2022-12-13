import React from 'react';
import CustomLink from "./CustomLink";

const Navigation = () => {
  return (
    <nav className=''>
      <ul className='list-none'>
        <CustomLink to='/'>
          Home
        </CustomLink>
        <CustomLink to='/library'>
          Library
        </CustomLink>
      </ul>
    </nav>
  );
};

export default Navigation;