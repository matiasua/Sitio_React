import React from 'react';
import LineField from './LineField';

export default function TextareaLine(props){
  const { label, rows, placeholder } = props;

  return(
    <LineField label={label}>
      <textarea rows={rows} placeholder={placeholder}></textarea>
    </LineField>
  );
}
