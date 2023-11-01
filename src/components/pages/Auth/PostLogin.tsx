import React, { useState } from 'react';
import '../Auth/PostLogin.css';
import { useNavigate } from 'react-router-dom';
import FormInput from './FormInput';

const PostLogin: React.FC = () => {
  const navigate = useNavigate();
  const [values, setValues] = useState({
    username: "",
    email: "",
    // DateofBirth: "",
    // mobileNumber: "", // Add the mobileNumber field
    password: "",
    // confirmPassword: "",
    gender: "",
  });

  const [duplicateError, setDuplicateError] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const existingData = JSON.parse(localStorage.getItem('CustomerData') || '[]') as any[];
    const isDuplicate = existingData.some(data =>
      JSON.stringify(data.username) === JSON.stringify(values.username)
    );

    if (isDuplicate) {
      alert('Data already exists, please login');
      navigate('/');
      return;
    }

    const newData = [...existingData, values];
    localStorage.setItem('CustomerData', JSON.stringify(newData));
    navigate('/');
  };

  const onChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setValues({ ...values, [e.target.name]: e.target.value });
    setDuplicateError(false);
  };

  return (
    <div className="app">
      <form onSubmit={handleSubmit}>
        <h1>Registration</h1>

        <FormInput
          name="username"
          placeholder="Username"
          errorMessage="Username should be a combination of letters and digits of 3 to 16 characters"
          label="Username"
          pattern="^[A-Za-z]{3,16}$"
          required={true}
          value={values.username}
          onChange={onChange}
        />

        <FormInput
          name="email"
          placeholder="Email"
          errorMessage="It should be a valid email address"
          label="Email"
          required={true}
          value={values.email}
          onChange={onChange}
        />

        {/* <FormInput
          name="mobileNumber"
          placeholder="Mobile Number"
          errorMessage="Mobile number should be 10 digits"
          label="Mobile Number"
          pattern="[0-9]{10}"
          required={true}
          value={values.mobileNumber || ''}
          onChange={onChange}
        /> */}

        {/* <FormInput
          name="DateofBirth"
          type="date"
          placeholder="Date of Birth"
          errorMessage="Please enter a valid date"
          label="Date of Birth"
          required={true}
          value={values.DateofBirth}
          onChange={onChange}
        /> */}

        <FormInput
          name="password"
          placeholder="Password"
          errorMessage="Password should be 8 characters"
          pattern="^(?=.*[0-9])(?=.*[a-zA-Z])(?=.*[!@#$%^&*])[a-zA-Z0-9!@#$%^&*]{8,20}$"
          label="Password"
          required={true}
          value={values.password}
          onChange={onChange}
        />

        <div className='gender'>
          <p>Gender</p>
          <input
            type="radio"
            name="gender"
            value="male"
            onChange={onChange}
          />
          <label htmlFor="Male">Male</label>
          <input
            type="radio"
            name="gender"
            value="female"
            onChange={onChange}
          />
          <label htmlFor="female">Female</label>
        </div>

        {/* <FormInput
          name="confirmPassword"
          placeholder="Confirm Password"
          errorMessage="Passwords do not match"
          label="Confirm Password"
          pattern={values.password}
          required={true}
          value={values.confirmPassword}
          onChange={onChange}
        /> */}

        <button className="btn" type="submit" onClick={() => navigate("/login")}>
          Submit
        </button>
      </form>
    </div>
  );
};

export default PostLogin;
