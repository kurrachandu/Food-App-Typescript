import React, { useState } from 'react';
import '../Auth/forminput.css';

interface FormInputProps {
  label: string;
  errorMessage: string;
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
  id?: string;
  name: string;
  type?: string;
  placeholder?: string; // Add placeholder property
  pattern?: string; // Add pattern property
  required?:boolean;
  value?:number|string;
}

const FormInput: React.FC<FormInputProps> = (props) => {
  const [focused, setFocused] = useState(false);
  const { label, errorMessage, onChange, id, ...inputProps } = props;

  const handleFocus = (e: React.FocusEvent<HTMLInputElement>) => {
    setFocused(true);
  }

  return (
    <div className="formInput">
      <label>{label}</label>
      <input {...inputProps} onChange={onChange} onFocus={handleFocus} className={focused ? 'focused' : ''} />
      <span>{errorMessage}</span>
    </div>
  )
}

export default FormInput;
