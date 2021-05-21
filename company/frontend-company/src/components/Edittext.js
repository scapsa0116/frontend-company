import React from "react";

class Edittext extends React.Component {
  state = {
    document: {},
    id: "",
    customer_code: "",
    company_name: "",
    cnpj: "",
    address: "",
    email: "",
    editable: true
  };

  componentDidMount() {
    const documentId = this.props.match.params.documentId;

    fetch(`http://localhost:3000/documents/${documentId}`, {
      credentials: "include",
      method: "PUT",
      body: JSON.stringify({
        document: document
      }),

      headers: {
        Accept: "application/json",
        "Content-Type": "application/json"
      }
    })
      .then((res) => res.json())
      .then((response) => {
        this.setState(
          {
            id: response.id,
            customer_code: response.customer_code,
            company_name: response.company_name,
            cnpj: response.cnpj,
            address: response.address,
            email: response.email
          },
          () => {
            console.log(this.state);
          }
        );
      });
  }

  handleInputChange(e) {
    const target = e.target;
    const value = target.value;
    const name = target.name;

    this.setState({
      [name]: value
    });
  }

  handleSubmit = (e) => {
    e.preventDefault();
    const form = e.target;
    const body = new FormData();
    body.append("document[customer_code]", form.customer_code.value);
    body.append("document[company_name]", form.company_name.value);
    body.append("document[cnpj]", form.cnpj.value);
    body.append("document[address]", form.address.value);
    body.append("document[email]", form.email.value);
    const documentId = this.props.match.params.documentId;

    fetch(`http://localhost:3000/documents/${documentId}`, {
      credentials: "include",
      method: "PUT",

      body: body
    })
      .then((res) => res.json())
      .then((documentsJson) => {
        console.log(documentsJson);
        this.props.history.push("/");
      });
  };

  render() {
    return (
      <div>
        <form
          onSubmit={this.handleSubmit}
          className='maw-w-6xl w-3/4 mx-auto mt-16 shadow-md px-4 py-6'
        >
          <h1 className='mb-4 font-bold text-center text-blue-600 items-stretch  bg-grey-light'>
            2. Informações Gerais
          </h1>

          <fieldset className='mb-8 p-2 w-full  bg-grey-light'>
            <h5 className='font-bold text-blue-600'>Código do Cliente: </h5>
            <input
              type='text'
              onChange={this.handleInputChange.bind(this)}
              value={this.state.customer_code}
              ref='customer_code'
              name='customer_code'
              customer_code='customer_code'
              id='customer_code'
              className='h-16 border-8 w-full md:w-1/2 lg:w-1/4 bg-grey uppercase'
            />

            <h5 className='font-bold text-blue-600'>Razão Social: </h5>
            <input
              onChange={this.handleInputChange.bind(this)}
              value={this.state.company_name}
              type='text'
              ref='company_name'
              name='company_name'
              company_name='company_name'
              id='company_name'
              className='h-16 border-8 w-full md:w-1/2 lg:w-1/4 bg-grey uppercase'
            />

            <h5 className='font-bold text-blue-600'>CNPJ: </h5>
            <input
              onChange={this.handleInputChange.bind(this)}
              value={this.state.cnpj}
              type='text'
              ref='cnpj'
              name='cnpj'
              cnpj='cnpj'
              id='cnpj'
              className='h-16 border-8 w-full md:w-1/2 lg:w-1/4 bg-grey uppercase'
            />

            <h5 className='font-bold text-blue-600'>Endereço: </h5>
            <input
              onChange={this.handleInputChange.bind(this)}
              value={this.state.address}
              type='text'
              name='address'
              ref='address'
              company_name='address'
              id='address'
              className='h-16 border-8 w-full md:w-1/2 lg:w-1/4 bg-grey uppercase'
            />

            <h5 className='font-bold text-blue-600'>E-mail: </h5>
            <input
              onChange={this.handleInputChange.bind(this)}
              value={this.state.email}
              type='text'
              ref='email'
              name='email'
              company_name='email'
              id='email'
              className='h-16 border-8 w-full md:w-1/2 lg:w-1/4 bg-grey uppercase'
            />
          </fieldset>
          <button className=' p-4 bg-blue-300 mt-4 hover:bg-blue-400 transition-all duration-200'>
            Edit
          </button>
        </form>
      </div>
    );
  }
}

export default Edittext;
