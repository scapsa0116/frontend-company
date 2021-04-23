import React from 'react'
import {NavLink, Switch, Route,} from "react-router-dom";
import LogIn from '../navbar/LogIn'
import LogOut from '../navbar/LogOut'





class NavBar extends React.Component{


    constructor(){
        super()
        this.state = {
            currentUser: null,
            loginForm: {
              name: "",
              email: "",
              password: ""
            },
            documents: []
        }
    }


    componentDidMount(){
        const token = localStorage.getItem("token")
        if(token){
        fetch("http://localhost:3000/get_current_user", {
            credentials: "include",
            headers: {
              "Content-Type" : "application/json"
            }
            
        })
        .then(res => res.json())
        .then(resp => {
          if (resp.error) {
          alert(resp.error)
          }else{
            this.setState({
                currentUser: resp.user,
                
              })
          }
        })
        .catch(console.log)
      }
    }
        
      handleLoginFormChange = (event) => {
        const {name, value } = event.target
        this.setState({
          loginForm: {
            ...this.state.loginForm,
            [name]: value
          }
        })
        }


        handleLoginFormSubmit = event => {
            event.preventDefault()
          
            const userInfo = this.state.loginForm
          
            fetch("http://localhost:3000/login",{
              method: 'POST',
              credentials: "include",
              headers: {
                "content-type": "application/json"
              },
              body: JSON.stringify({
                user: userInfo
              })
            } )
            .then(res => res.json())
            .then(resp =>{
              if (resp.error) {
                alert("Invalid credentials")
          
              }else{
                this.setState({
                  currentUser: resp.user,
                  loginForm: {
                    name: "",
                    email: "",
                    password: ""
                  }
                })
              }
          })
            .catch(console.log)
            
          }


          logout=(event) => {
            event.preventDefault()
            fetch("http://localhost:3000/logout",{
              credentials: "include",
              method: "DELETE",
              headers: {
                "Content-Type": "application/json"
              }
            })
            .then(r => r.json())
            .then(resp => alert(resp.message))
            this.setState({
              currentUser: null,
              documents: []
            })
          }
          


    render(){
        const {currentUser} = this.props
        return(
            <div>
                <h2>
                 {currentUser ? `Welcome ${currentUser.name}` : "Not Loged In"}
                </h2>
                <nav className="border-b px-4 py-2 bg-white">
                <div className="flex flex-wrap items-center justify-between md:justify-around">
               <NavLink to="/login">
                <button className="inline-block text-blue-500 font-semibold text-sm" href="#">Log In</button>
                </NavLink>

                <NavLink to="/signup">
                <button className="inline-block text-blue-500 font-semibold text-sm" href="#">Sign Up</button>
                </NavLink>

                <NavLink to="/logout">
                <button className="inline-block bg-blue-500 px-2 py-1 text-white font-semibold text-sm rounded" href="#"> Log Out</button>
                </NavLink> 
                </div>
                </nav> 


               
              <Route exact path = '/logIn'>
               <LogIn
               handleLoginFormChange={this.handleLoginFormChange}
               handleLoginFormSubmit={this.handleLoginFormSubmit}
               name = {this.state.loginForm.name}
               email = {this.state.loginForm.email}
               password = {this.state.loginForm.password}/>
               </Route>

               <Route exact path = '/logOut'>
               <LogOut
               logout={this.logout}/>
               </Route>
              
            </div>
            
        )
    }
}

export default NavBar