import React, { useState } from "react";

function Signup() {
  const data = {
    name: "",
    email: "",
  };

  const [inputData, setInputData] = useState(data);
  const [msg, setmsg] = useState(false);

  const handleinput = (event) => {
    setInputData({ ...inputData, [event.target.name]: event.target.value });
  };
  const submit = (event) => {
    event.preventDefault();
    if (!inputData.name || !inputData.email) {
      alert("All Feilds are mandatory");
    } else {
      setmsg(true);
      setTimeout(() => {
        setmsg(false);
      }, 4000);
    }
  };

  return (
    <form onSubmit={submit} className="container">
      <h2>{msg ? inputData.name + ":Signup Successfully" : null}</h2>
      <h1>Sign Up</h1>
      <div className="input">
        <input
          type="text"
          placeholder="Name"
          name="name"
          value={inputData.name}
          onChange={handleinput}
        ></input>
        <input
          type="email"
          placeholder="Email"
          name="email"
          value={inputData.email}
          onChange={handleinput}
        ></input>
      </div>
      <button>Submit</button>
    </form>
  );
}

export default Signup;
