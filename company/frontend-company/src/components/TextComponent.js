import React from "react";
import { Link } from "react-router-dom";

class TextComponent extends React.Component {
  state = {
    documents: [],
    customer_code: "",
    company_name: "",
    cnpj: "",
    address: "",
    email: "",
    visao: "",
    missao: ""
  };

  componentDidMount() {
    fetch("http://localhost:3000/documents", {
      method: "get",
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json"
      }
    })
      .then((res) => res.json())
      .then((documentsJson) => {
        console.log("groups", documentsJson);
        this.setState({
          documents: documentsJson,
          loading: false
        });
      });
  }

  render() {
    return (
      <div>
        {this.state.documents.map((document, index) => (
          <div>
            <div className='maw-w-6xl w-3/4 mx-auto mt-16 shadow-md px-4 py-6'>
              <h1 className='mb-4 font-bold text-center text-blue-600 items-stretch  bg-grey-light'>
                JBP 2021
              </h1>
              <h1 className='mb-4 font-bold text-center text-blue-600 items-stretch  bg-grey-light'>
                Canal Distribuidores
              </h1>

              <fieldset className='mb-8 p-2 w-full  bg-grey-light'>
                <h5 className='font-bold text-blue-600'>Distribuidor:</h5>
                <div className='h-16 border-8 w-full md:w-1/2 lg:w-1/4 bg-grey uppercase'>
                  {document.distribuidor}
                </div>

                <h5 className='font-bold text-blue-600'>Responsavel:</h5>
                <div className='h-16 border-8 w-full md:w-1/2 lg:w-1/4 bg-grey uppercase'>
                  {document.responsavel}
                </div>

                <h5 className='font-bold text-blue-600'>Data:</h5>
                <div className='h-16 border-8 w-full md:w-1/2 lg:w-1/4 bg-grey uppercase'>
                  {document.data}
                </div>
              </fieldset>
            </div>

            <div className='maw-w-6xl w-3/4 mx-auto mt-16 shadow-md px-4 py-6'>
              <h1 className='mb-4 font-bold text-center text-blue-600 items-stretch  bg-grey-light'>
                1. Visao - Missao do Distribuidor
              </h1>

              <h5 className='font-bold text-black-600'>visao:</h5>
              <div className='h-20 border-2 w-full md:w-1/2 lg:w-1/4 bg-grey uppercase'>
                {document.visao}
              </div>

              <h5 className='font-bold text-black-600'>missao:</h5>
              <div className='h-20 border-2 w-full md:w-1/2 lg:w-1/4 bg-grey uppercase'>
                {document.missao}
              </div>
            </div>

            <Link to={`/documents/${document.id}`}>
              <div>
                <form className='maw-w-6xl w-3/4 mx-auto mt-16 shadow-md px-4 py-6'>
                  <h1 className='mb-4 font-bold text-center text-blue-600 items-stretch  bg-grey-light'>
                    2. Informações Gerais
                  </h1>

                  <fieldset className='mb-8 p-2 w-full  bg-grey-light'>
                    <h5 className='font-bold text-blue-600'>
                      Código do Cliente:
                    </h5>
                    <div className='h-16 border-8 w-full md:w-1/2 lg:w-1/4 bg-grey uppercase'>
                      {document.customer_code}
                    </div>

                    <h5 className='font-bold text-blue-600'>Razão Social:</h5>
                    <div className='h-16 border-8 w-full md:w-1/2 lg:w-1/4 bg-grey uppercase'>
                      {document.company_name}
                    </div>

                    <h5 className='font-bold text-blue-600'>CNPJ:</h5>
                    <div className='h-16 border-8 w-full md:w-1/2 lg:w-1/4 bg-grey uppercase'>
                      {document.cnpj}
                    </div>

                    <h5 className='font-bold text-blue-600'>Endereço:</h5>
                    <div className='h-16 border-8 w-full md:w-1/2 lg:w-1/4 bg-grey uppercase'>
                      {document.address}
                    </div>

                    <h5 className='font-bold text-blue-600'>E-mail:</h5>
                    <div className='h-16 border-8 w-full md:w-1/2 lg:w-1/4 bg-grey uppercase'>
                      {document.email}
                    </div>
                  </fieldset>
                </form>
              </div>
            </Link>
          </div>
        ))}
      </div>
    );
  }
}

export default TextComponent;

// Button onDoubleClick={() => window.alert(‘Double clicked!’)}
