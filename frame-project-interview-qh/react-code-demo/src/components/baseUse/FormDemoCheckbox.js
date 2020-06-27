import React from 'react';

class FormDemoCheckbox extends React.Component{
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
            <input type="checkbox" checked={this.state.flag} onChange={this.onCheckboxChange}/>
            <p>{this.state.flag.toString()}</p>
               </div>
    }

   onCheckboxChange = () => {
        this.setState({
            flag:!this.state.flag
        })
   }
}

export default FormDemoCheckbox;
