import React from 'react';

export default function TextareaLine(props){
  const { label, rows, placeholder } = props;

  return(
    <div>
      <label>{label}</label>
      <textarea rows={rows} placeholder={placeholder}></textarea>
    </div>
  );
}
