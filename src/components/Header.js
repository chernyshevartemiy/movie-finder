import React from 'react';
import Navigation from "./Navigation";
import {fetchMovies} from "../redux/movieSlice";
import {useDispatch} from "react-redux";
import debounce from 'lodash.debounce'

const Header = () => {
  const dispatch = useDispatch();
  const [search, setSearch] = React.useState('')
  const searchHandler = React.useCallback(debounce((event) => {
    dispatch(fetchMovies(event))
  }, 1000), [])
  const onChangeInput = (event) => {
    setSearch(event.target.value)
    searchHandler(event.target.value, dispatch)
  }
  return (
    <div className='flex flex-col h-auto bg-[#080808] min-h-screen text-white pl-[30px] pt-[30px] pr-[30px]'>
      <h1 className='mb-[20px] text-[#F33F3F] text-[30px] leading-none font-bold'>Movie Finder</h1>
      <label htmlFor='first_name' className='block mb-[10px] text-white font-bold'>Find your favourite movie</label>
      <input onChange={(e) => onChangeInput(e)} value={search} type='text' id='first_name'
             className='mb-[20px] bg-[#000000] border border-gray-700 text-white text-[16px] rounded-[8px] focus:ring-gray-600 outline-none focus:border-gray-400 block w-full p-[12px]'
             placeholder='&#xF002;     Search'/>
      <Navigation/>
    </div>
  );
};

export default Header;