import React from "react";
import Item from "./Item";
import "./List.css";
import uuid from 'uuid';

class List extends React.Component {
    render() {
        let items = this.props.itemList;
        if (items.length === 0) return (<div id="item-list"></div>);
        
        return (
            <div id="item-list">
                {items.map(i => (
                    <Item
                        key={uuid()}
                        id={i.id}
                        date={i.date}
                        text={i.text}
                        completed={i.completed}
                        handleItem={(h, e) => this.props.handleItem(h, e)}
                    />
                ))}
            </div>
        );
    }
}

export default List;
