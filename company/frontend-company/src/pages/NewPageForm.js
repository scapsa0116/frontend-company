import React from "react";

class NewPageForm extends React.Component {
  state = {
    distribuidor: "",
    responsavel: "",
    data: ""
  };

  handleSubmit = (e) => {
    e.preventDefault();
    const form = e.target;
    const body = new FormData();
    body.append("page[distribuidor]", form.distribuidor.value);
    body.append("page[responsavel]", form.responsavel.value);
    body.append("page[data]", form.Date());

    fetch(`http://localhost:3000/pages`, {
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
        <form
          onSubmit={this.handleSubmit}
          className='maw-w-6xl w-3/4 mx-auto mt-16 shadow-md px-4 py-6'
        >
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
              name='customer_code'
              ref='customer_code'
              customer_code='customer_code'
              id='customer_code'
              placeholder='Código do Cliente'
              className='h-16 border-8 w-full md:w-1/2 lg:w-1/4 bg-grey uppercase'
            />

            <h5 className='font-bold text-blue-600'>Responsavel:</h5>
            <input
              type='text'
              name='company_name'
              ref='company_name'
              company_name='company_name'
              id='company_name'
              placeholder='Razão Social'
              className='h-16 border-8 w-full md:w-1/2 lg:w-1/4 bg-grey uppercase'
            />

            <h5 className='font-bold text-blue-600'>Data:</h5>
            <input
              type='text'
              ref='cnpj'
              name='cnpj'
              cnpj='cnpj'
              id='cnpj'
              placeholder='CNPJ'
              className='h-16 border-8 w-full md:w-1/2 lg:w-1/4 bg-grey uppercase'
            />
          </fieldset>
          <button className=' p-4 bg-blue-300 mt-4 hover:bg-blue-400 transition-all duration-200'>
            Post It
          </button>
        </form>
      </div>
    );
  }
}

export default NewPageForm;
