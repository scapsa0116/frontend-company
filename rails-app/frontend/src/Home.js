import React from 'react'

class Home extends React.Component {



   

        componentDidMount(){
            fetch("http://localhost:3000/", {
            method: 'GET'
          })
          .then(res => res.json())
          .then(pictures =>  console.log(pictures[1])
             
    )
        }
        



   
    render(){
        return(
            <div> im Home</div>
        )
    }
        
}

export default Home;