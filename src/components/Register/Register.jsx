import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom';
import { useAuth } from '../../context/authContext';

const Register = () => {
  const [user, setUser] = useState({
    email: "",
    password: "",
  });

  const { signup } = useAuth();
  const navigate = useNavigate();
  const [error, setError] = useState();

  const handleChange = ({ target: { name, value } }) => {
    setUser({ ...user, [name]: value })
  }

  const handleSubmit = async (e) => {
    e.preventDefault();
    setError('');
    try {
      await signup(user.email, user.password);
      navigate('/');
    }
    catch (error) {
      if (error.code == "auth/internal-error") {
        setError('Invalid email');
      }
    }
  }

  return (
    <div className='register-page'>
      {error && <p className='error-text'>{error}</p>}
      <form className='card' onSubmit={handleSubmit}>
        <div className='card-header'>
          <h2>Register</h2>
        </div>
        <div className='card-content'>
          <label className='labelForm' htmlFor="email">Email</label>
          <input className='inputForm' type="email" name='email' placeholder='awesomemail@email.com' onChange={handleChange} />

          <label className='labelForm' htmlFor="password">Password</label>
          <input className='inputForm' type="password" name='password' id='password' onChange={handleChange} />
        </div>
        <div className="card-footer">
          <button className='submitForm'>Enviar</button>
        </div>
      </form>
    </div>
  )
}

export default Register