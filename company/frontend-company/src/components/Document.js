import React from "react";
import Body from "../components/Body";
import { Link } from "react-router-dom";

class Document extends React.Component {
  // state = {
  //   documents: [],
  //   customer_code: "",
  //   company_name: "",
  //   cnpj: "",
  //   address: "",
  //   email: ""
  // };

  // handleSubmit = (e) => {
  //   e.preventDefault();
  //   const form = e.target;
  //   const body = new FormData();
  //   body.append("document[customer_code]", form.customer_code.value);
  //   body.append("document[company_name]", form.company_name.value);
  //   body.append("document[cnpj]", form.cnpj.value);
  //   body.append("document[address]", form.address.value);
  //   body.append("document[email]", form.email.value);

  //   fetch(`http://localhost:3000/documents`, {
  //     credentials: "include",
  //     method: "POST",

  //     body: body
  //   })
  //     .then((res) => res.json())
  //     .then((documentsJson) => {
  //       //    this.props.history.push('/')
  //       console.log(documentsJson);
  //     });
  // };

  // renderAbout() {
  //   console.log("click");
  //   return (
  //     <div>

  //     </div>
  //   );
  // }

  render() {
    return (
      <div>
        <Link to={`/documents/${this.props.document.id}`}>
          <div>
            <form
              onSubmit={this.handleSubmit}
              className='maw-w-6xl w-3/4 mx-auto mt-16 shadow-md px-4 py-6'
            >
              <h1 className='mb-4 font-bold text-center text-blue-600 items-stretch  bg-grey-light'>
                2. Informações Gerais
              </h1>

              <fieldset className='mb-8 p-2 w-full  bg-grey-light'>
                <h5 className='font-bold text-blue-600'>Código do Cliente:</h5>
                <div className='h-16 border-8 w-full md:w-1/2 lg:w-1/4 bg-grey uppercase'>
                  {this.props.document.customer_code}
                </div>

                <h5 className='font-bold text-blue-600'>Razão Social:</h5>
                <div className='h-16 border-8 w-full md:w-1/2 lg:w-1/4 bg-grey uppercase'>
                  {this.props.document.company_name}
                </div>

                <h5 className='font-bold text-blue-600'>CNPJ:</h5>
                <div className='h-16 border-8 w-full md:w-1/2 lg:w-1/4 bg-grey uppercase'>
                  {this.props.document.cnpj}
                </div>

                <h5 className='font-bold text-blue-600'>Endereço:</h5>
                <div className='h-16 border-8 w-full md:w-1/2 lg:w-1/4 bg-grey uppercase'>
                  {this.props.document.address}
                </div>

                <h5 className='font-bold text-blue-600'>E-mail:</h5>
                <div className='h-16 border-8 w-full md:w-1/2 lg:w-1/4 bg-grey uppercase'>
                  {this.props.document.email}
                </div>
              </fieldset>
            </form>
          </div>
        </Link>
      </div>
    );
  }
}

export default Document;
