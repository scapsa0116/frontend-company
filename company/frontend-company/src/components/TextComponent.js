import React from 'react'
 import { Link } from 'react-router-dom'



class TextComponent extends React.Component{

    state = {
        documents: [],
        loading: true
    }
    
      componentDidMount() {
          fetch(`http://localhost:3000/documents`, {
            // credentials: "include",
            method: 'GET',
            headers: {
                "Accept": "application/json",
                "Content-Type": "application/json"
            }
          })
          .then(res => res.json())
          .then(documentsJson => {
              this.setState({
                    documents: documentsJson,
                    loading: false
              })
          })


      }

     
    
    
    
      render(){
          const documents = this.state.documents.map((document) => {
              return(
                <div key = {document.id}>
                <h1 className="mb-4 font-bold text-center text-blue-600 items-stretch  bg-grey-light" >2. Informações Gerais</h1>
                <div className="mb-8 p-2 w-full  bg-grey-light">
                <h5 className="font-bold text-blue-600">Código do Cliente:</h5>
                <div className="h-16 border-8 w-full md:w-1/2 lg:w-1/4 bg-grey uppercase">{document.customer_code}</div>
                <h5 className="font-bold text-blue-600">Razão Social:</h5>
                <div className="h-16 border-8 w-full md:w-1/2 lg:w-1/4 bg-grey uppercase">{document.company_name}</div>
                <h5 className="font-bold text-blue-600">CNPJ</h5>
                <div className="h-16 border-8 w-full lg:w-1/2 lg:w-1/4 bg-grey uppercase">{document.cnpj}</div>
                <h5 className="font-bold text-blue-600">Endereço</h5>
                <div className="h-16 border-8 w-full md:w-1/2 lg:w-1/4 bg-grey uppercase">{document.address}</div>
                <h5 className="font-bold text-blue-600">E-mail:</h5>
                <div className="h-16 border-8 w-full lg:w-1/2 lg:w-1/4 bg-grey uppercase">{document.email}</div>
                <h5 className="font-bold text-blue-600">User</h5>
                <div className="h-16 border-8 w-full lg:w-1/2 lg:w-1/4 bg-grey uppercase">{document.user_name}</div>
                <Link to = {`/documents/${document.id}`}>
                <button className="inline-block bg-blue-500 px-2 py-1 text-white font-semibold text-sm rounded">Edit</button>
                </Link>
                <Link to = {`/documents/${document.id}`}>
                <button className="object-right bg-purple-500 hover:bg-red-700 focus:outline-none focus:ring-2 focus:ring-purple-600 focus:ring-opacity-50 px-2 py-1 rounded text-sm text-white" >Delete</button>
                </Link>
                </div>
                </div>
              )
          })
            
        return(
            <div>
                {documents}
            </div>
                
                
        )
    }
}


export default TextComponent
