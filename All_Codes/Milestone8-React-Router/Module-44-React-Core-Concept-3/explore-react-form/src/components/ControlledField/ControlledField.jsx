import React, { useState } from 'react';

const ControlledField = () => {
  const [name, setName] = useState('')
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('');
  const [error, setError] = useState('')

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(name ,email, password)

    if(password.length < 6) {
      setError('password must be 6 characters or more')
    } else {
      setError('')
    }
  }

  const handleNameChange = (e) => {
    setName(e.target.value)
  }

  const handleEmailOnChange = (e) => {
    console.log(e.target.value)
    setEmail(e.target.value)

    // if(email.length < 8) {
      
    // }
  }

  const handlePasswordOnChange = (e) => {
    console.log(e.target.value)
    setPassword(e.target.value)

    // if(password.length < 6) {
    //   setError('Password must be 6 characters or longer')
    // } else {
    //   setError('')
    // }
  }

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <input type="text" name="name" placeholder='name' onChange={handleNameChange}  defaultValue={name}/>
        <br />
        <input type="email" name="email" id="" onChange={handleEmailOnChange} placeholder='email' defaultValue={email} required />
        <br />
        <input type="password" onChange={handlePasswordOnChange} defaultValue={password} name="password" id="" placeholder='password' required />
        <br />
        <input type="submit" value="submit" />
      </form>
      <p style={{color: 'red'}}><small>{error}</small></p>
    </div>
  );
};

export default ControlledField;