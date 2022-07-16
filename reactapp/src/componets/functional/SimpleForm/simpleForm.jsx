import React, { useState } from "react";
const SimpleForm = () => {
  //   const [name, setName] = useState("");
  //   const [surname, setSurname] = useState("");

  const [inputs, setInputs] = useState({ name: "", surname: "", password: "", agree : false});

  const handleChagne = (e) => {
    if(e.target.type === 'checkbox'){
        setInputs({
            ...inputs,
            [e.target.id]: e.target.checked,
          });
    } else {
        
        setInputs({
            ...inputs,
            [e.target.id]: e.target.value,
        });
    }
  };
  return (
    <form
      onSubmit={(e) => {
        e.preventDefault();
        // console.log({name, surname})
        console.log(inputs);
      }}
    >
      <label>Name:</label>
      <input
        type="text"
        value={inputs.name}
        onChange={handleChagne}
        id="name"
      ></input>
      <label>Surname:</label>
      <input
        type="text"
        value={inputs.surname}
        onChange={handleChagne}
        id="surname"
      ></input>
      <label>Password:</label>
      <input
        type="password"
        value={inputs.password}
        onChange={handleChagne}
        id="password"
      ></input>
      <label>I agree:</label>
      <input type="checkbox" checked={inputs.agree} onChange={handleChagne} id="agree"></input>
      <input type="submit" />
    </form>
  );
};

export default SimpleForm;
