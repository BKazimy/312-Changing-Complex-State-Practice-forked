import React, { useState } from "react";

function App() {
  const [contact, setContact] = useState({
    fName: "",
    lName: "",
    email: "",
  });

  function changed(event) {
    let { value, name } = event.target;
    console.log(value);
    console.log(name);

    setContact((prev) => {
      if (name == "fName") {
        return {
          fName: value,
          lName: prev.lName,
          email: prev.email,
        };
      } else if (name == "lName") {
        return {
          fName: prev.fName,
          lName: value,
          email: prev.email,
        };
      } else if (name == "email") {
        return {
          fName: prev.fName,
          lName: prev.lName,
          email: value,
        };
      }
      console.log(prev);
    });
  }

  return (
    <div className="container">
      <h1>
        Hello {contact.fName} {contact.lName}
      </h1>
      <p>{contact.email}</p>
      <form
        onSubmit={(event) => {
          event.preventDefault();
        }}
      >
        <input
          name="fName"
          placeholder="First Name"
          onChange={changed}
          value={contact.fName}
        />
        <input
          name="lName"
          placeholder="Last Name"
          onChange={changed}
          value={contact.lName}
        />
        <input
          name="email"
          placeholder="Email"
          onChange={changed}
          value={contact.email}
        />
        <button>Submit</button>
      </form>
    </div>
  );
}

export default App;
