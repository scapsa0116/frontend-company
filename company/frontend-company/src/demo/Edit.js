import React from "react";

class Edit extends React.Component {
  state = {
    document: {},
    id: "",
    customer_code: "",
    company_name: "",
    cnpj: "",
    address: "",
    email: "",
    loading: true,
    isInEditMode: false
  };

  componentDidMount() {
    const documentId = this.props.match.params.documentId;
    fetch(`http://localhost:3000/documents/${documentId}`, {
      // credentials: "include",
      method: "PUT",
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json"
      },
      body: JSON.stringify({
        document: document
      })
    })
      .then((res) => res.json())
      .then((response) => {
        console.log(response);
        this.setState({
          id: response.id,
          customer_code: response.customer_code,
          company_name: response.company_name,
          cnpj: response.cnpj,
          address: response.address,
          email: response.email
        });
      });
  }

  changeEditMode = () => {
    console.log("clicked");
    this.setState({
      isInEditMode: !this.state.isInEditMode
    });
  };

  renderEditView = () => {
    return (
      <div>
        <form className='maw-w-6xl w-3/4 mx-auto mt-16 shadow-md px-4 py-6'>
          <h1 className='mb-4 font-bold text-center text-blue-600 items-stretch  bg-grey-light'>
            2. Informações Gerais
          </h1>

          <fieldset className='mb-8 p-2 w-full  bg-grey-light'>
            <h5 className='font-bold text-blue-600'>Código do Cliente: </h5>
            <input
              type='text'
              defaultValue={this.state.customer_code}
              ref='customer_code'
              name='customer_code'
              customer_code='customer_code'
              id='customer_code'
              className='h-16 border-8 w-full md:w-1/2 lg:w-1/4 bg-grey uppercase'
            />

            <h5 className='font-bold text-blue-600'>Razão Social: </h5>
            <input
              defaultValue={this.state.company_name}
              type='text'
              ref='company_name'
              name='company_name'
              company_name='company_name'
              id='company_name'
              className='h-16 border-8 w-full md:w-1/2 lg:w-1/4 bg-grey uppercase'
            />

            <h5 className='font-bold text-blue-600'>CNPJ: </h5>
            <input
              defaultValue={this.state.cnpj}
              type='text'
              ref='cnpj'
              name='cnpj'
              cnpj='cnpj'
              id='cnpj'
              className='h-16 border-8 w-full md:w-1/2 lg:w-1/4 bg-grey uppercase'
            />

            <h5 className='font-bold text-blue-600'>Endereço: </h5>
            <input
              defaultValue={this.state.address}
              type='text'
              name='address'
              ref='address'
              company_name='address'
              id='address'
              className='h-16 border-8 w-full md:w-1/2 lg:w-1/4 bg-grey uppercase'
            />

            <h5 className='font-bold text-blue-600'>E-mail: </h5>
            <input
              defaultValue={this.state.email}
              type='text'
              ref='email'
              name='email'
              company_name='email'
              id='email'
              className='h-16 border-8 w-full md:w-1/2 lg:w-1/4 bg-grey uppercase'
            />
          </fieldset>
          {/* <button className=' p-4 bg-blue-300 mt-4 hover:bg-blue-400 transition-all duration-200'>
            Edit
          </button> */}
        </form>
      </div>
    );
  };
  // onDoubleClick={this.changeEditMode}

  renderDefaultView = () => {
    return (
      <div key={this.state.document.id} onDoubleClick={this.changeEditMode}>
        <h1 className='mb-4 font-bold text-center text-blue-600 items-stretch  bg-grey-light'>
          2. Informações Gerais
        </h1>
        <div className='mb-8 p-2 w-full  bg-grey-light'>
          <h5 className='font-bold text-blue-600'>Código do Cliente:</h5>
          <div
            className='h-16 border-8 w-full md:w-1/2 lg:w-1/4 bg-grey uppercase'
            onDoubleClick={this.changeEditMode}
          >
            {this.state.document.customer_code}
          </div>
          <h5 className='font-bold text-blue-600'>Razão Social:</h5>
          <div
            className='h-16 border-8 w-full md:w-1/2 lg:w-1/4 bg-grey uppercase'
            onDoubleClick={this.changeEditMode}
          >
            {this.state.document.company_name}
          </div>
          <h5 className='font-bold text-blue-600'>CNPJ</h5>
          <div
            onDoubleClick={this.changeEditMode}
            className='h-16 border-8 w-full lg:w-1/2 lg:w-1/4 bg-grey uppercase'
          >
            {this.state.document.cnpj}
          </div>
          <h5 className='font-bold text-blue-600'>Endereço</h5>
          <div
            onDoubleClick={this.changeEditMode}
            className='h-16 border-8 w-full md:w-1/2 lg:w-1/4 bg-grey uppercase'
          >
            {this.state.document.address}
          </div>
          <h5
            onDoubleClick={this.changeEditMode}
            className='font-bold text-blue-600'
          >
            E-mail:
          </h5>
          <div className='h-16 border-8 w-full lg:w-1/2 lg:w-1/4 bg-grey uppercase'>
            {this.state.document.email}
          </div>
          <h5 className='font-bold text-blue-600'>User</h5>
          <div className='h-16 border-8 w-full lg:w-1/2 lg:w-1/4 bg-grey uppercase'>
            {this.state.document.user_name}
          </div>
        </div>
      </div>
    );
  };

  render() {
    return this.state.isInEditMode
      ? this.renderEditView()
      : this.renderDefaultView();
  }
}

export default Edit;
