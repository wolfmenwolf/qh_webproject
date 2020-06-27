import React from 'react';
class FormDemoRadio extends React.Component{
    constructor(props){
        super(props);
        this.state = {
            name: '双越',
            info: '个人信息',
            city: 'beijing',
            flag: true,
            gender: 'male'
        }
    }

    render(){
        return <div>
            male <input type="radio" name="gender" value="male" checked={this.state.gender === 'male'} onChange={this.onRadioChange}/>
            female <input type="radio" name="gender" value="female" checked={this.state.gender === 'female'} onChange={this.onRadioChange}/>
            <p>{this.state.gender}</p>
        </div>

    }
}
export default FormDemoRadio;
