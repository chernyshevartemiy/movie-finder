const Error = ({value = 'Error nothing was found try it again.'}) => {
  return (
    <div className='text-center'>
      <span className='text-[20px]'>{value}</span>
    </div>
  );
};

export default Error;