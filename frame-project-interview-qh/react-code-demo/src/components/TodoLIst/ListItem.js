import React from 'react';
import CheckBox from './UI/CheckBox';
class ListItem extends React.Component{
    render(){
        const {item} = this.props;
        return <div style={{marginTop:'10px'}}>
            <CheckBox onChang={this.completedChangeHandler}/>
            <span style={{textDecoration:item.completed ? 'line-through':'none'}}>
                {item.title}
            </span>
            <button onClick={this.deleteHandler}>删除</button>
        </div>
    }

    deleteHandler =() => {
        const {item,deleteItem} = this.props;
        deleteItem(item.id);
    }
}

export default ListItem;
