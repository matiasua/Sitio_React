import React from 'react';


export default function InputLine(props){
  const {
    label,
    type,
    placeholder,
    required,
    minlength,
    maxlength,
    min,
    max,
    step,

  } = props;
  /*
  const label = props.label;
  const type = props.type;
  const placeholder = props.placeholder;
  cons required = props.required;
  */
  return (
    <div>
      <label>{props.title}</label>
      <input
          type={type}
          placeholder={placeholder}
          required={required}
          minlength={minlength}
          maxlength={maxlength}
          min={min}
          max={max}
          step={step}/>
    </div>
  );
}
