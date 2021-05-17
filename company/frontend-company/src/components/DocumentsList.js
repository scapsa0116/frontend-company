import React from "react";
import Document from "./Document.js";

class DocumentsList extends React.Component {
  render() {
    // const items = this.props.documents.map((document) => {
    //   return (
    //     <div>
    //       {document.customer_code}
    //       {document.company_name}
    //       {document.cnpj}
    //       {document.address}
    //       {document.customer_code}
    //       {document.email}
    //     </div>
    //   );
    // });
    console.log("here", this.props.documents);

    return (
      <div>
        {this.props.documents.map((document) => (
          <Document document={document} key={document.id} />
        ))}
      </div>
    );
  }
}

export default DocumentsList;
