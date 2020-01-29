import React from "react";
import "./App.css";
import List from "./List";
import Adder from "./Adder";

class App extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            items: [],
            counter: 0
        };
    }

    render() {
        return (
            <div id="wrapper">
                <Adder onClick={text => this.addItem(text)} />
                <List
                    itemList={this.state.items}
                    handleItem={(action, item) =>
                        this.itemHandler(action, item)
                    }
                />
            </div>
        );
    }

    itemHandler(action, item) {
        switch (action) {
            case "add":
                this.addItem(item);
                break;
            case "update":
                this.updateItem(item);
                break;
            case "delete":
                this.deleteItem(item);
                break;
            default:
                console.log("error");
        }
    }

    addItem(text) {
        const newItem = {
            id: this.state.counter,
            text: text,
            date: new Date().toLocaleString(),
            completed: false
        };
        let newArr = this.state.items.slice();
        newArr.push(newItem);
        this.setState({ items: newArr, counter: this.state.counter + 1 });
    }

    deleteItem(item) {
        const obj = this.findItemId(item);
        if (obj.i > -1) {
            obj.arr.splice(obj.i, 1);
            this.setState({ items: obj.arr });
        }
    }

    updateItem(item) {
        const obj = this.findItemId(item);
        if (obj.i > -1) {
            obj.arr[obj.i].completed = !obj.arr[obj.i].completed;
            this.setState({ items: obj.arr });
        }
    }

    findItemId = item => {
        const arr = this.state.items.slice();
        return {
            i: arr.findIndex(element => element.id === item.id),
            arr: arr
        };
    };
}

export default App;
