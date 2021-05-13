import React from "react";

const TextComponent = () => {
  const [state, setState] = React.useState({
    document: {},
    customer_code: "",
    company_name: "",
    cnpj: "",
    address: "",
    email: ""
  });

  function handleChange(event) {
    const value = event.target.value;
    const name = event.target.name;

    setState({ ...state, [name]: value });
  }

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("i am here", state);
    fetch("http://localhost:3000/documents", {
      credentials: "include",
      method: "POST",
      body: state
    });
  };

  return (
    <div>
      <h1>Helloooo</h1>
      <form onSubmit={handleSubmit}>
        <label>
          customer code
          <input
            type='text'
            name='customer_code'
            onChange={handleChange}
            value={this.state.customer_code}
          />
        </label>

        <label>
          cats
          <input
            type='text'
            name='email'
            onChange={handleChange}
            value={this.state.email}
          />
        </label>

        <label>
          hamsters
          <input
            type='text'
            name='cnpj'
            onChange={handleChange}
            value={this.state.cnpj}
          />
        </label>

        <label>
          comapny name
          <input
            type='text'
            name='company_name'
            onChange={handleChange}
            value={this.state.company_name}
          />
        </label>

        <label>
          address
          <input
            type='text'
            name='address'
            onChange={handleChange}
            value={this.state.address}
          />
        </label>

        <button type='submit'>Create something</button>
      </form>
    </div>
  );
};

export default TextComponent;
