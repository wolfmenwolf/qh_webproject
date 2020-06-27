import React from 'react';

class FormDemoTextArea extends React.Component{
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
        //textarea-使用value
        return <div>
           <textarea value={this.state.info} onChange={this.onTextareaChange}/>
           <p>{this.state.info}</p>
        </div>
    }
    onTextareaChange = (e) => {
        this.state({
            info:e.target.value
        })
    }
}

export default FormDemoTextArea;
