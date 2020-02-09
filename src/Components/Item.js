import React from "react";
import "./Item.css";

class Item extends React.Component {
    render() {

        return (
            <li key={this.props.id} className="item">
                <h4 className="item-text">{this.props.text}</h4>
                <p className="item-date">{this.props.date}</p>
                <button onClick={() => this.props.handleItem("delete",this.props)}>Done</button>
            </li>
        );
    }
}

export default Item;
