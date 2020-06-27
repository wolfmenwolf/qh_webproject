import React from 'react';

class FormDemoInput extends React.Component{
    constructor(props){
        super(props);
        this.state = {
            name:'双越',
            infor:'个人信息',
            city:'beijing',
            flag:true,
            gender:'male'
        }
    }

    render(){
        //受控组件
        return <div>
            <p>{this.state.name}</p>
            <label htmlFor="inputName">姓名:</label>
            <input id="inputName" value={this.state.name} onChange={this.onInputChange}/>
        </div>
    }

    onInputChange =(e) => {
        this.setState({
            name:e.target.value
        })
    }
}

export default FormDemoInput;
