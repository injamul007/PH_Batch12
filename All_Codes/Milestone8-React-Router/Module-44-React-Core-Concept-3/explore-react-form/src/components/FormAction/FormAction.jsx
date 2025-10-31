import React from "react";

const FormAction = () => {
  const handleFromAction = (formData) => {
    console.log(formData.get('name'))
    console.log(formData.get('email'))
  }
  return (
    <div>
      <form action={handleFromAction}>
        <input type="text" name="name" placeholder="Name" />
        <br />
        <input type="email" name="email"  placeholder="Email" />
        <br />
        <input type="submit" value="submit" />
      </form>
    </div>
  )
};

export default FormAction;