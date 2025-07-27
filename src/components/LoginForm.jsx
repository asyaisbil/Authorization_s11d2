import React, { useContext, useState } from 'react';
import axios from 'axios';
import AuthContext from '../contexts/AuthContext';

function LoginForm() {
  const [form, setForm] = useState({
    username: '',
    password: '',
  });

  const { login } = useContext(AuthContext);

  const handleSubmit = (e) => {
    e.preventDefault();
    login(form);
  };

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  return (
    <div>
      <div className="loginFormMainDiv">
        <h1>LOGIN</h1>
        <form onSubmit={handleSubmit}>
          <div>
            <h2>USERNAME</h2>
            <input
              name="username"
              onChange={handleChange}
              type="text"
              value={form.username}
              placeholder="Username"
            />
          </div>
          <div>
            <h2>PASSWORD</h2>
            <input
              name="password"
              onChange={handleChange}
              type="password"
              value={form.password}
              placeholder="Password"
            />
          </div>
          <button type="submit">SUBMIT</button>
        </form>
      </div>
    </div>
  );
}
/*
return (
  <div className="loginFormMainDiv">
    <h1>ADD FRIEND</h1>
    <form onSubmit={handleSubmit(addFriendSubmit)}>
      <div>
        <input
          type="text"
          placeholder="name"
          {...register('name', { required: 'Ama adın ne?' })}
        />
        {errors?.name && <p>{errors.name.message}</p>}
      </div>
      <div>
        <input
          type="email"
          placeholder="email"
          {...register('email', {
            required: 'Epostanı ver  ki spamlayalım.',
          })}
        />
        {errors?.email && <p>{errors.email.message}</p>}
      </div>
      <div>
        <input
          type="number"
          placeholder="age"
          {...register('age', {
            required: 'yaş kaç',
          })}
        />
        {errors?.age && <p>{errors.age.message}</p>}
      </div>
      <button type="submit">ADD</button>
    </form>
  </div>
);*/

export default LoginForm;
