import React, { useState } from 'react';
import '../Auth/Create.css'
import { useNavigate } from 'react-router-dom';
import FormInput from './FormInput';

const Create: React.FC = () => {
  const navigate = useNavigate();
  const [UnameOrEmail, setUnameOrEmail] = useState({
    username: "",
    password: ""
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const existingData = JSON.parse(localStorage.getItem('CustomerData') || '[]') as any[];
    const userData = existingData.find(data =>
      data.username === UnameOrEmail.username || data.email === UnameOrEmail.username
    );

    if (!userData || userData.password !== UnameOrEmail.password) {
      alert('Invalid credentials');
      return;
    } else {
      // localStorage.setItem('loggedUserData', JSON.stringify(UnameOrEmail));
      navigate('/home');
    }
  };

  const onChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setUnameOrEmail({ ...UnameOrEmail, [e.target.name]: e.target.value });
  };

  return (
    <div className="app">
      <form onSubmit={handleSubmit}>
        <h1>Login</h1>

        <FormInput
          name="username"
          placeholder="Username or Email"
          errorMessage="Username or email should be valid"
          label="Username or Email"
          required={true}
          value={UnameOrEmail.username}
          onChange={onChange}
        />

        <FormInput
          name="password"
          type="password"
          placeholder="Password"
          errorMessage="Password should be 8 characters"
          pattern="^(?=.*[0-9])(?=.*[a-zA-Z])(?=.*[!@#$%^&*])[a-zA-Z0-9!@#$%^&*]{8,20}$"
          label="Password"
          required={true}
          value={UnameOrEmail.password}
          onChange={onChange}
        />
        <button className="btn" type="submit">Login</button>
        <p className="Login-btn" onClick={() => navigate("/login")}>Don't have an account? Register Here</p>
      </form>
    </div>
  );
};

export default Create;
