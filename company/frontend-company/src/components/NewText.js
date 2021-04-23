// import React from 'react'

// const NewText = (props) => {

//     let formFields = {}
//     return (
//         <form onSubmit={ (e) => {e.preventDefault();
//             props.handleFormSubmit(
//                 formFields.company_name.value,
//                 formFields.customer_code.value,
//                 formFields.cnpj.value,
//                 formFields.address.value,
//                 formFields.email.value,); 
//                 e.target.reset();}}>
            
//             <input ref={input => formFields.company_name = input} placeholder='Enter the company_name'/>
//             <input ref={input => formFields.customer_code = input} placeholder='Enter customer_code' />
//             <input ref={input => formFields.cnpj = input} placeholder='Enter cnpj' />
//             <input ref={input => formFields.address = input} placeholder='Enter address' />
//             <input ref={input => formFields.email = input} placeholder='Enter email ' />
//             <button>Submit</button>
            
//         </form>
//     )
// }


// export default  NewText