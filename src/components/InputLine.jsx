import React from 'react';
import LineField from './LineField';


export default function InputLine(props){
  const {
    label,
    type,
    placeholder,
    required,
    minLength,
    maxLength,
    min,
    max,
    step,
    list,
    onChange,
    name

  } = props;
  /*
  const label = props.label;
  const type = props.type;
  const placeholder = props.placeholder;
  cons required = props.required;
  */

  return (
    <LineField label={label}>
    <input
        type={type}
        name={name}
        placeholder={placeholder}
        required={required}
        minLength={minLength}
        maxLength={maxLength}
        min={min}
        max={max}
        step={step}
        list={list && list.id}
        onChange={(event) => onChange(name, event)} />
      {list &&
         <datalist id={list.id}>
           {list.options.map((option, key) => <option key={key}>{option}</option>)}
           </datalist>
         }
    </LineField>
  );
}
