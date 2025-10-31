import React from 'react';
import useInputField from '../../Hooks/UseInputField';

const HookForm = () => {
  const [name, nameOnChange] = useInputField('')
  const [email, emailOnChange] = useInputField('')
  const [password, passwordOnChange] = useInputField('')

  const handleSubmit = (e) => {
    e.preventDefault()
    console.log('submit',name, email, password)
  }


  return (
    <div>
      <form onSubmit={handleSubmit}>
        <input type="text" placeholder='Name' onChange={nameOnChange} defaultValue={name}/>
        <br />
        <input type="email" onChange={emailOnChange} name="email" defaultValue={email} placeholder='email' />
        <br />
        <input type="password" name="password" onChange={passwordOnChange} placeholder='passwrods' defaultValue={password} />
        <br />
        <input type="submit" value="submit" />
      </form>
    </div>
  );
};

export default HookForm;