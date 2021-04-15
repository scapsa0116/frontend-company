import React from 'react'
import { DocumentsList } from '../components/DocumentsList'



class TextComponent extends React.Component{

    state = {
        documents: [],
        loading: true
    }
    
      componentDidMount() {
          fetch(`http://localhost:3000/documents`, {
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
            
        return(
            <div>
               {this.state.loading ? ('loading spinner') : (<DocumentsList documents={this.state.documents} />)} 
            </div>
                
                
        )
    }
}


export default TextComponent
