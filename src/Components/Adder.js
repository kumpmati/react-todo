import React from 'react';

class Adder extends React.Component {
    render() {
        return (
            <div id="adder-wrapper">
                <input type="text" placeholder="type your TODO here..." id="todo-text" />
                <button onClick={() => 
                    this.props.onClick(document.getElementById("todo-text").value)
                } >Add item</button>
            </div>
        );
    }
}

export default Adder;