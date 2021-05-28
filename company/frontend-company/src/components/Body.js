import React from "react";
// import NewPageForm from "../pages/NewPageForm";

class Body extends React.Component {
  state = {
    customer_code: "",
    company_name: "",
    cnpj: "",
    address: "",
    email: "",
    distribuidor: "",
    responsavel: "",
    data: ""
  };

  handleSubmit = (e) => {
    e.preventDefault();
    const form = e.target;
    const body = new FormData();
    body.append("document[customer_code]", form.customer_code.value);
    body.append("document[company_name]", form.company_name.value);
    body.append("document[cnpj]", form.cnpj.value);
    body.append("document[address]", form.address.value);
    body.append("document[email]", form.email.value);
    body.append("document[distribuidor]", form.distribuidor.value);
    body.append("document[responsavel]", form.responsavel.value);
    body.append("document[data]", form.data.value);

    fetch(`http://localhost:3000/documents`, {
      credentials: "include",
      method: "POST",

      body: body
    })
      .then((res) => res.json())
      .then((documentsJson) => {
        // this.props.history.push("/");
      });
  };

  render() {
    return (
      <div>
        <form onSubmit={this.handleSubmit}>
          {/* <NewPageForm /> */}
          <div className='maw-w-6xl w-3/4 mx-auto mt-16 shadow-md px-4 py-6'>
            <h1 className='mb-4 font-bold text-center text-blue-600 items-stretch  bg-grey-light'>
              JBP 2021
            </h1>
            <h1 className='mb-4 font-bold text-center text-blue-600 items-stretch  bg-grey-light'>
              Canal Distribuidores
            </h1>

            <fieldset className='mb-8 p-2 w-full  bg-grey-light'>
              <h5 className='font-bold text-blue-600'>Distribuidor:</h5>
              <input
                type='text'
                name='distribuidor'
                ref='distribuidor'
                customer_code='distribuidor'
                id='distribuidor'
                placeholder='distribuidor'
                className='h-16 border-8 w-full md:w-1/2 lg:w-1/4 bg-grey uppercase'
              />

              <h5 className='font-bold text-blue-600'>Responsavel:</h5>
              <input
                type='text'
                name='responsavel'
                ref='responsavel'
                company_name='responsavel'
                id='responsavel'
                placeholder='responsavel'
                className='h-16 border-8 w-full md:w-1/2 lg:w-1/4 bg-grey uppercase'
              />

              <h5 className='font-bold text-blue-600'>Data:</h5>
              <input
                data-date-format='DD MMMM YYYY'
                type='date'
                ref='data'
                name='data'
                cnpj='data'
                id='data'
                placeholder='data'
                // defaultValue={this.data}
                className='h-16 border-8 w-full md:w-1/2 lg:w-1/4 bg-grey uppercase'
              />
            </fieldset>
          </div>

          <div className='maw-w-6xl w-3/4 mx-auto mt-16 shadow-md px-4 py-6'>
            <h1 className='mb-4 font-bold text-center text-blue-600 items-stretch  bg-grey-light'>
              2. Informações Gerais
            </h1>

            <fieldset className='mb-8 p-2 w-full  bg-grey-light'>
              <h5 className='font-bold text-blue-600'>Código do Cliente:</h5>
              <input
                type='text'
                name='customer_code'
                ref='customer_code'
                customer_code='customer_code'
                id='customer_code'
                placeholder='Código do Cliente'
                className='h-16 border-8 w-full md:w-1/2 lg:w-1/4 bg-grey uppercase'
              />

              <h5 className='font-bold text-blue-600'>Razão Social:</h5>
              <input
                type='text'
                name='company_name'
                ref='company_name'
                company_name='company_name'
                id='company_name'
                placeholder='Razão Social'
                className='h-16 border-8 w-full md:w-1/2 lg:w-1/4 bg-grey uppercase'
              />

              <h5 className='font-bold text-blue-600'>CNPJ:</h5>
              <input
                type='text'
                ref='cnpj'
                name='cnpj'
                cnpj='cnpj'
                id='cnpj'
                placeholder='CNPJ'
                className='h-16 border-8 w-full md:w-1/2 lg:w-1/4 bg-grey uppercase'
              />

              <h5 className='font-bold text-blue-600'>Endereço:</h5>
              <input
                type='text'
                name='address'
                ref='address'
                company_name='address'
                id='address'
                placeholder='address'
                className='h-16 border-8 w-full md:w-1/2 lg:w-1/4 bg-grey uppercase'
              />

              <h5 className='font-bold text-blue-600'>E-mail:</h5>
              <input
                type='text'
                name='email'
                ref='email'
                company_name='email'
                id='email'
                placeholder='email'
                className='h-16 border-8 w-full md:w-1/2 lg:w-1/4 bg-grey uppercase'
              />
            </fieldset>
            <button className=' p-4 bg-blue-300 mt-4 hover:bg-blue-400 transition-all duration-200'>
              Post It
            </button>
          </div>
        </form>
      </div>
    );
  }
}

export default Body;
