import React from 'react';


export const DocumentDetails = ({ document }) => {
       
    
    
    return (
        <div>
     
      <h1 className="mb-4 font-bold text-center text-blue-600 flex-wrap bg-grey-light" >2. Informações Gerais</h1>
      <div className="mb-8 p-2 w-full flex flex-wrap bg-grey-light">
      <h5 className="font-bold text-blue-600">Código do Cliente:</h5>
      <div className="h-16 border-8 w-full md:w-1/2 lg:w-1/4 bg-grey uppercase">{document.customer_code}</div>
      <h5 className="font-bold text-blue-600">Razão Social:</h5>
      <div className="h-16 border-8 w-full md:w-1/2 lg:w-1/4 bg-grey uppercase">{document.company_name}</div>
      <h5 className="font-bold text-blue-600">CNPJ</h5>
      <div className="h-16 border-8 w-full lg:w-1/2 bg-grey uppercase">{document.cnpj}</div>
      <h5 className="font-bold text-blue-600">Endereço</h5>
      <div className="h-16 border-8 w-full md:w-1/2 lg:w-1/4 bg-grey uppercase">{document.address}</div>
      <h5 className="font-bold text-blue-600">E-mail:</h5>
      <div className="h-16 border-8 w-full lg:w-1/2 bg-grey uppercase">{document.email}</div>
      <h5 className="font-bold text-blue-600">User</h5>
      <div className="h-16 border-8 w-full lg:w-1/2 bg-grey uppercase">{document.user_name}</div>
      </div>
      </div>
       )
       
}