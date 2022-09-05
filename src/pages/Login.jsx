import React from 'react'
import { Link, useNavigate } from 'react-router-dom'
import '../styles/Login.css'


const Login = () => {

  const navigate = useNavigate();


  const handleLogin = (e) => {
    e.preventDefault();
    navigate('/home')
  }

  return (
    <div
      style={{ backgroundColor: 'black', color: 'white', width: '100%', height: '100%' }}>
      <form style={{ display: 'flex', flexDirection: 'column', justifyContent: 'center', alignItems: 'center' }}
        onSubmit={handleLogin}
      >
        <h1 style={{ marginTop: '50%' }} >Login</h1>
        <input
          style={{ width: '273px', height: '51px', background: 'rgba(255, 255, 255, 0.42)', boxShadow: '4px 7px 8px rgba(0, 0, 0, 0.25)', borderRadius: '10px', marginTop: '30px', color: 'white', fontSize: '18px' }}
          type="email"
          name="email"
          id=""
          required
          placeholder='Email' />
        <input
          style={{ width: '273px', height: '51px', background: 'rgba(255, 255, 255, 0.42)', boxShadow: '4px 7px 8px rgba(0, 0, 0, 0.25)', borderRadius: '10px', marginTop: '20px', color: 'white', fontSize: '18px' }}
          type="password"
          name="password"
          id=""
          required
          placeholder='Password' />

        <button style={{
          marginTop: '35px', width: '215px', height: '40px', borderRadius: '36px', backgroundColor: '#0455C0', color: 'white'
        }}
          type='submit'
        >Login</button>


      </form>
      <p style={{
        marginTop: '155px'
      }} >Don’t have any account ?
        <Link to='/register' >
          <span style={{ color: 'white', fontWeight: 'bold' }} > Sign up</span>
        </Link>
      </p>
      <br />
      <br />
    </div>
  )
}

export default Login