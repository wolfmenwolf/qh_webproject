import React from 'react';
import './style.css';

class ConditionDemo extends React.Component{
    constructor(props){
        super(props);
        this.state = {
            theme:'black'
        }
    }

    render(){
        const blackBtn = <button className="btn-black">black btn</button>;
        const whiteBtn = <button className="btn-white">white btn</button>
        return <div>
            {this.state.theme === 'block' && blackBtn}
        </div>
    }
}

export default ConditionDemo;
