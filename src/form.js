import React, { useState } from 'react';

function SimpleForm() {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [errors, setErrors] = useState({});

  const validateForm = () => {
    let tempErrors = {};
    tempErrors.name = name ? "" : "This field is required.";
    tempErrors.email = email ? (/\S+@\S+\.\S+/.test(email) ? "" : "Email is not valid.") : "This field is required.";
    setErrors(tempErrors);
    return Object.values(tempErrors).every(x => x === "");
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if(validateForm()) {
      alert(`Name: ${name}, Email: ${email}`);
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <label>
        Name:
        <input 
          type="text" 
          value={name} 
          onChange={(e) => setName(e.target.value)} 
        />
        {errors.name && <div style={{color: "red"}}>{errors.name}</div>}
      </label>
      <br />
      <label>
        Email:
        <input 
          type="email" 
          value={email} 
          onChange={(e) => setEmail(e.target.value)} 
        />
        {errors.email && <div style={{color: "red"}}>{errors.email}</div>}
      </label>
      <br />
      <button type="submit">Submit</button>
    </form>
  );
}

export default SimpleForm;
