import React from 'react'

class CheckBox extends React.Component{
    constructor(props){
        super(props);
        this.state = {
            checked:false
        }
    }


    render(){
        return <input type="checkbox" checked={this.state.checked} onChange={this.onCheckboxChange}/>
    }

    onCheckboxChange = () => {
        const  newVal = !this.state.checked;
        this.setState({
            checked:newVal
        });

        this.props.onChange(newVal);
    }
}

export default CheckBox;
