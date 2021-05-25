import React, { useEffect, useState } from "react";
// import { Link } from "react-router-dom";

function Document() {
  // const [toggle, setToggle] = React.useState(true);
  const [documents, setDocuments] = useState([]);
  const [error, setError] = useState(null);
  const [isLoaded, setIsLoaded] = useState(false);
  const [toggle, setToggle] = React.useState(true);
  const [text, setText] = React.useState("Sriram");

  useEffect(() => {
    fetch("http://localhost:3000/documents")
      .then((res) => res.json())
      .then(
        (result) => {
          setIsLoaded(true);
          setDocuments(result);
        },
        (error) => {
          setIsLoaded(true);
          setError(error);
        }
      );
  }, []);

  function toggleInput() {
    setToggle(false);
  }

  function handleChange(event) {
    setDocuments(event.target.value);
  }

  if (error) {
    return <div>Error: {error.message}</div>;
  } else if (!isLoaded) {
    return <div>Loading...</div>;
  } else {
    return (
      <div>
        {toggle ? (
          <ul onDoubleClick={toggleInput}>
            {documents.map((document) => (
              <li key={document.id}>
                {document.email} {document.adress}
              </li>
            ))}
          </ul>
        ) : (
          <form>
            {documents.map((document) => (
              <input
                type='text'
                value={document.email}
                onChange={handleChange}
              />
            ))}
          </form>
        )}
      </div>
    );
  }
}

export default Document;
