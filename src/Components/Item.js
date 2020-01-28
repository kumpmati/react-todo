import React from "react";
import "./Item.css";

class Item extends React.Component {
    render() {
        const itemClasses = `item ${
            this.props.completed ? "completedItem" : "todoItem"
        }`;

        return (
            <li key={this.props.id} className={itemClasses}>
                <h4 className="item-text">{this.props.text}</h4>
                <p className="item-date">{this.props.date}</p>

                <button onClick={() => this.props.handleStatus(this.props)}>
                    {this.props.completed ? "TODO" : "Mark as Done"}
                </button>

                <button onClick={() => this.props.handleDelete(this.props)}>
                    X
                </button>
            </li>
        );
    }
}

export default Item;
