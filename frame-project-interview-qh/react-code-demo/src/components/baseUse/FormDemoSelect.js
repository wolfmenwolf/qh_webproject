import React from 'react';
class FormDemoSelect extends React.Component{
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
        // // select - 使用 value
        return <div>
            <select value={this.state.city} onChange={this.onSelectChange}>
                <option value="beijing">北京</option>
                <option value="shanghai">上海</option>
                <option value="shenzhen">深圳</option>
            </select>
            <p>{this.state.city}</p>
        </div>

    }
}
export default FormDemoSelect;
