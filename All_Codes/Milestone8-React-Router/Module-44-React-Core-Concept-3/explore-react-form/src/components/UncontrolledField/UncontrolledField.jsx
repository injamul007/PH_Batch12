import React, { useRef } from 'react';

const UncontrolledField = () => {
  const emailRef = useRef('')
  const passwordRef = useRef('')

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(emailRef.current.value)
    console.log(passwordRef.current.value)
    // const email = emailRef.current.value
  }
  return (
    <div>
      <form onSubmit={handleSubmit}>
        <input ref={emailRef} type="email" name="email" placeholder='email' required />
        <br />
        <input ref={passwordRef} type="password" name="password" placeholder='password' required />
        <br />
        <input type="submit" value="submit" />
      </form>
    </div>
  );
};

export default UncontrolledField;