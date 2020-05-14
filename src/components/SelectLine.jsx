import React from 'react';
import LineField from './LineField';

export default function SelectLine(props) {
   const { label, options, required } = props;

  return(
    <LineField label={label}>
      <select defaultValue="" required={required}>
        {options.map((option, key) => (
          <option
            key={key}
            value={option.value}
            disabled={option.value === ''}
            >{option.label}</option>)
          )}
      </select>
    </LineField>
  );
}
