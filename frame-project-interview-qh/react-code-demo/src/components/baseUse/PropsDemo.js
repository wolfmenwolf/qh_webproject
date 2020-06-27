import React from 'react';
import PropTypes from 'prop-types';
class Input extends React.Component{
    constructor(props){
        super(props);
        this.state = {
            title:''
        }
    }


    render(){
        return <div>
            <input value={this.state.title} onChange={this.onTitleChange}/>
            <button onClick={this.onSubmit}>提交</button>
        </div>
    }

    onTitleChange =(e) => {
        this.state({
            title:e.target.value
        })
    };

    onSubmit =() => {
       const {submitTitle} = this.props;
       submitTitle(this.state.title);
       this.setState({
           title:''
       })
    }
}

Input.protoTypes ={
    submitTitle:PropTypes.func.isRequired
};
