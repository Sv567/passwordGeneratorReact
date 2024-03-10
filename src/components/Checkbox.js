import React from 'react';

const Checkbox = (props) => {
    const{value , onChange} = props ;
  return (
    <>
    <input type='checkbox' checked={value} onChange={onChange}/>
    </>
  )
}

export default Checkbox ;