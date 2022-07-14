import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom';
import { useAuth } from '../../context/authContext';
import GoogleIcon from '@mui/icons-material/Google';
import ArrowCircleRightIcon from '@mui/icons-material/ArrowCircleRight';

const Login = () => {
  const [user, setUser] = useState({
    email: "",
    password: "",
  });

  const { login, loginWithGoogle } = useAuth();
  const navigate = useNavigate();
  const [error, setError] = useState();

  const handleChange = ({ target: { name, value } }) => {
    setUser({ ...user, [name]: value })
  }

  const handleSubmit = async (e) => {
    e.preventDefault();
    setError('');
    try {
      await login(user.email, user.password);
      navigate('/');
    }
    catch (error) {
      setError(error.message);
    }
  };

  const handleGoogleSignIn = async () => {
    try {
      await loginWithGoogle();
      navigate('/');
    }
    catch (error) {
      setError(error.message);
    }
  }

  const handleSignUp = () => {
    navigate('/register');
  }

  const handleResetPassword = () => {
    if (!user.email) return setError("Please enter your email");
    console.log('reset pswd');
  }

  return (
    <div className='register-page'>
      {error && <p className='error-text'>{error}</p>}
      <div className='card' >
        <div className='card-header'>
          <h2>Login</h2>
        </div>
        <form className='card-form' onSubmit={handleSubmit}>
          <div className='card-content'>
            <label className='labelForm' htmlFor="email">Email</label>
            <input className='inputForm' type="email" name='email' placeholder='awesomemail@email.com' onChange={handleChange} />

            <label className='labelForm' htmlFor="password">Password</label>
            <input className='inputForm' type="password" name='password' id='password' onChange={handleChange} />
          </div>
          <div className="card-footer">
            <button className='submitForm'>Continuar</button>
          </div>
        </form>
        <button className='submitForm-Google' onClick={handleGoogleSignIn}>
          <GoogleIcon color='#1e9df7' fontSize='small' />
          Continuar con Google</button>
      </div>
      <div className='outter-card-section'>
        <div className='flex-row'>
          <div className='flex-column-50'>
            <span className='no-account'>¿No tienes cuenta?</span>
          </div>
          <div className='flex-column-50'>
            <button className='btn-primary' onClick={handleSignUp}>
              Crear cuenta
              <ArrowCircleRightIcon color='#ffffff' fontSize='small' />
            </button>
          </div>
        </div>
        <div className='flex-row'> ó
          <div className='flex-column-50'>
            
          </div>
        </div>
      </div>
    </div>
  )
}

export default Login