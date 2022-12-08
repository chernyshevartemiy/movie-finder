import React from 'react';
import Navigation from "./Navigation";
import {fetchMovies} from "../redux/movieSlice";
import {useDispatch} from "react-redux";
import debounce from 'lodash.debounce'
import Input from "./Input";

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
    <div className='flex flex-col h-auto bg-[#080808] min-h-screen text-white pl-[30px] pt-[30px] pr-[30px] max-w-[320px]'>
      <h1 className='mb-[20px] text-[#F33F3F] text-[30px] leading-none font-bold'>Movie Finder</h1>
      <Input onChangeInput={onChangeInput} search={search}/>
      <Navigation/>
    </div>
  );
};

export default Header;