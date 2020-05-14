import React from 'react';

export default function SelectLine(props) {
   const { label, options, required } = props;

  return(
    <div>
      <label>{label}</label>
      <select value="" required={required} >
        {options.map(option => (
          <option
            value={option.value}
            disabled={option.value === ''}
            >{option.label}</option>)
          )}
      </select>
    </div>
  );
}
