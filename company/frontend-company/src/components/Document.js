import React from "react";
// import { Link } from "react-router-dom";

class Document extends React.Component {
  // const [toggle, setToggle] = React.useState(true);
  // const [documents, setDocuments] = useState([]);
  // const [error, setError] = useState(null);
  // const [isLoaded, setIsLoaded] = useState(false);
  // const [toggle, setToggle] = useState(true);
  // const [text, setText] = React.useState("Sriram");

  // useEffect(() => {
  //   fetch("http://localhost:3000/documents")
  //     .then((res) => res.json())
  //     .then(
  //       (result) => {
  //         setIsLoaded(true);
  //         setDocuments(result);
  //       },
  //       (error) => {
  //         setIsLoaded(true);
  //         setError(error);
  //       }
  //     );
  // }, []);

  // useEffect(() => {
  //   // POST request using fetch inside useEffect React hook
  //   const requestOptions = {
  //     method: "POST",
  //     headers: { "Content-Type": "application/json" },
  //     body: JSON.stringify({ body: body })
  //   };
  //   fetch("http://localhost:3000/documents", requestOptions)
  //     .then((response) => response.json())
  //     .then((data) => setPostId(data.id));

  //   // empty dependency array means this effect will only run once (like componentDidMount in classes)
  // }, []);

  state = {
    documents: {},
    toggle: true,
    isLoaded: false,
    id: "",
    customer_code: "",
    company_name: "",
    cnpj: "",
    address: "",
    email: "",
    editable: true
  };

  componentDidMount() {
    fetch("http://localhost:3000/documents", {
      method: "GET",
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json"
      }
    })
      .then((res) => res.json())
      .then((documents) => {
        this.setState({
          documents: documents,
          isLoaded: true
        });
      });
  }

  toggleInput() {
    // const documentId = this.props.match.params.documentId;
    const documentId = document.id;
    fetch(`http://localhost:3000/documents/${documentId}`, {
      credentials: "include",
      method: "PUT",
      body: JSON.stringify({
        document: document
      }),

      headers: {
        Accept: "application/json",
        "Content-Type": "application/json"
      }
    })
      .then((res) => res.json())
      .then((response) => {
        this.setState(
          {
            id: response.id,
            customer_code: response.customer_code,
            company_name: response.company_name,
            cnpj: response.cnpj,
            address: response.address,
            email: response.email
          },
          () => {
            console.log(this.state);
          }
        );
      });
  }

  handleChange(event) {
    this.setState({
      documents: event.target.value
    });
  }

  render() {
    if (this.state.error) {
      return <div>Error: {this.state.error.message}</div>;
    } else if (!this.state.isLoaded) {
      return <div>Loading...</div>;
    } else {
      return (
        <div>
          {this.state.toggle ? (
            <ul onDoubleClick={this.toggleInput}>
              {this.state.documents.map((document) => (
                <li key={document.id}>
                  {document.email} {document.adress}
                </li>
              ))}
            </ul>
          ) : (
            <form>
              <input
                type='text'
                value={document.email}
                onChange={this.handleChange}
              />
              <input
                type='text'
                value={document.adress}
                onChange={this.handleChange}
              />
            </form>
          )}
        </div>
      );
    }
  }
}

export default Document;
