import React, { Component } from 'react'
import {connect} from 'react-redux'
import {signIn} from '../../store/actions/authActions'

class SignIn extends Component {
    state = {
        email: '',
        password: '',
    }
     
    handleChange=(e)=>{
        this.setState({
           [e.target.id]:e.target.value 
        })
    }
    onSubmit=(e)=>{
        e.preventDefault()
        this.props.signIn(this.state)
    }
    render() {
        const {authError}=this.props
        return (
            <div className="container">
              <form onSubmit={this.onSubmit} className="white">
                   <h5 className="grey-text text-darken-2">
                       SignIn
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
                       <button className="btn pink lighten-1 z-depth-0">
                           Login
                       </button>
                       <div className="red-text center">
                            {authError&& (<h2>{authError} </h2>)}
                       </div>
                   </div>
              </form>    
            </div>
        )
    }
}
const mapStateToProps=(state)=> {
    return {
        authError: state.auth.authError
    }
}
const mapDispatchToProps=(dispatch)=> {
    return {
        signIn: (creds)=> dispatch(signIn(creds))
    }
}

export default connect(mapStateToProps,mapDispatchToProps)(SignIn)
