const Input = ({onChangeInput, search}) => {

  return (
    <>
      <label htmlFor='first_name' className='block mb-[10px] text-white font-bold'>
        Find your favourite movie
      </label>
      <input onChange={(event) => onChangeInput(event)} value={search} type='text' id='first_name' className='mb-[20px] bg-[#000000] border border-gray-700 text-white text-[16px] rounded-[8px] focus:ring-gray-600 outline-none focus:border-gray-400 block w-full p-[12px]' placeholder='&#xF002;     Search'/>
    </>
  );
};

export default Input;