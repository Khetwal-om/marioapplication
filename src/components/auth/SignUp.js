import React, { Component } from 'react'
import { connect } from 'react-redux'
import { Redirect } from 'react-router-dom'

class SignUp extends Component {
    state = {
        email: '',
        password: '',
        lastname: '',
        firstname: ''
    }
     
    handleChange=(e)=>{
        this.setState({
           [e.target.id]:e.target.value 
        })
    }
    onSubmit=(e)=>{
        e.preventDefault()
        console.log(this.state)
    }
    render() {
        const {auth}=this.props
        if(auth.uid) return <Redirect to="/"/>

        return (
            <div className="container">
              <form onSubmit={this.onSubmit} className="white">
                   <h5 className="grey-text text-darken-2">
                       Sign UP
                   </h5>  

                   <div className="input-field">
                       <label htmlFor="email">Email</label>
                       <input type="email" name="email" id="email" onChange={this.handleChange}/>
                   </div>
                   <div className="input-field">
                       <label htmlFor="password">Password</label>
                       <input type="password" name="password" id="password" onChange={this.handleChange}/>
                   </div>
                   <div className="input-field">
                       <label htmlFor="firstname">First name</label>
                       <input type="text" id="firstname" name="firstname" onChange={this.handleChange}/>
                   </div>
                   <div className="input-field">
                       <label htmlFor="lastname">Last name</label>
                       <input type="text" id="lastname" name="lastname" onChange={this.handleChange}/>
                   </div>
                   <div className="input-field">
                       <button className="btn pink lighten-1 z-depth-0">
                           Sign up
                       </button>
                   </div>
              </form>    
            </div>
        )
    }
}

const mapStateToProps=(state)=> {
    return {
        auth: state.firebase.auth
    }
}

export default connect(mapStateToProps)(SignUp)
