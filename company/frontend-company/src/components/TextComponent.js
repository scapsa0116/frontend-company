import React from "react";
import DocumentsList from "../components/DocumentsList";
// import Body from "../components/Body";

class TextComponent extends React.Component {
  state = {
    documents: [],
    customer_code: "",
    company_name: "",
    cnpj: "",
    address: "",
    email: ""
  };

  componentDidMount() {
    // we'd probably want to store the API_URL in an environment variable
    // so this would work in deployment as well but for now we'll hard code the hostname
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

  render() {
    return (
      <div>
        <DocumentsList documents={this.state.documents} />
        {/* <Body /> */}
      </div>
    );
  }
}

export default TextComponent;

// Button onDoubleClick={() => window.alert(‘Double clicked!’)}
