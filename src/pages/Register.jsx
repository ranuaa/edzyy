import React from 'react'
import { Link } from 'react-router-dom'
import '../styles/Login.css'

const Register = () => {
  return (
    <div style={{ backgroundColor: 'black', color: 'white', width: '100%', height: '100vh' }}>
      <form style={{ display: 'flex', flexDirection: 'column', justifyContent: 'center', alignItems: 'center' }} >
        <h1 style={{ marginTop: '20%' }} >Sign up</h1>

        <input
          style={{ width: '273px', height: '51px', background: 'rgba(255, 255, 255, 0.42)', boxShadow: '4px 7px 8px rgba(0, 0, 0, 0.25)', borderRadius: '10px', marginTop: '30px', color: 'white', fontSize: '18px' }}
          type="text"
          name="firstName"
          id=""
          required
          placeholder='First name' />

        <input
          style={{ width: '273px', height: '51px', background: 'rgba(255, 255, 255, 0.42)', boxShadow: '4px 7px 8px rgba(0, 0, 0, 0.25)', borderRadius: '10px', marginTop: '10px', color: 'white', fontSize: '18px' }}
          type="text"
          name="lastName"
          id=""
          required
          placeholder='Last name' />

        <input
          style={{ width: '273px', height: '51px', background: 'rgba(255, 255, 255, 0.42)', boxShadow: '4px 7px 8px rgba(0, 0, 0, 0.25)', borderRadius: '10px', marginTop: '10px', color: 'white', fontSize: '18px' }}
          type="email"
          name="email"
          id=""
          required
          placeholder='Email' />

        <input
          style={{ width: '273px', height: '51px', background: 'rgba(255, 255, 255, 0.42)', boxShadow: '4px 7px 8px rgba(0, 0, 0, 0.25)', borderRadius: '10px', marginTop: '10px', color: 'white', fontSize: '18px' }}
          type="password"
          name="password"
          id=""
          required
          placeholder='Password' />

        <input
          style={{ width: '273px', height: '51px', background: 'rgba(255, 255, 255, 0.42)', boxShadow: '4px 7px 8px rgba(0, 0, 0, 0.25)', borderRadius: '10px', marginTop: '10px', color: 'white', fontSize: '18px' }}
          type="password"
          name="confirmPassword"
          id=""
          required
          placeholder='Confrim password' />


        <button style={{
          marginTop: '35px', width: '215px', height: '40px', borderRadius: '36px', backgroundColor: '#F28705', color: 'white'
        }} >Sign Up</button>
      </form>
      <p style={{
        marginTop: '50px'
      }} >Already have any account ?
        <Link to='/login' >
          <span style={{ color: 'white', fontWeight: 'bold' }} > Sign in</span>
        </Link>
      </p>
    </div>
  )
}

export default Register