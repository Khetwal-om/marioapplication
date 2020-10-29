import React, { Component } from 'react'


import {connect} from 'react-redux'
import {createProject} from '../../store/actions/projectActions' 


class CreateProject extends Component {
    state = {
        title: '',
        content: ''
    }
     
    handleChange=(e)=>{
        this.setState({
           [e.target.id]:e.target.value 
        })
    }
    onSubmit=(e)=>{
        e.preventDefault()
        console.log(this.state)
        this.props.createProject(this.state)
    }
    render() {
        return (
            <div className="container">
              <form onSubmit={this.onSubmit} className="white">
                   <h5 className="grey-text text-darken-2">
                       CreateProject
                   </h5>  
                   <div className="input-field">
                       <label htmlFor="title">title</label>
                       <input type="text" name="title" id="title" onChange={this.handleChange}/>
                   </div>
                   <div className="input-field">
                       <label htmlFor="content">Project Content</label>
                       <textarea name="content" id="content"  onChange={this.handleChange} className="materialize-textarea"></textarea>
                   </div>
                   <div className="input-field">
                       <button className="btn pink lighten-1 z-depth-0">
                           Create
                       </button>
                   </div>
              </form>    
            </div>
        )
    }
}

const mapDispatchToProps=(dispatch)=> {
    return {
        createProject: (project)=> dispatch(createProject(project))
    }
}  

export default connect(null,mapDispatchToProps)(CreateProject)
