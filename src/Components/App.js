import React from "react";
import "./App.css";
import List from "./List";
import Adder from "./Adder";
import Cookies from 'universal-cookie';
const cookies = new Cookies();

class App extends React.Component {
    constructor(props) {
        super(props);
        this.state = {items: [], counter: 0 };
    }

    componentDidMount() {
        const list = cookies.get("todo-list");
        if(list !== undefined) this.setState({items: list});
    }

    render() {
        return (
            <div id="wrapper">
                <Adder onClick={e => this.addItem(e)} />
                <List
                    itemList={this.state.items}
                    handleDelete={e => this.deleteItem(e)}
                    handleStatus={e => this.changeItem(e)}
                />
            </div>
        );
    }

    addItem(item) {
        const newItem = {
            id: this.state.counter,
            text: item,
            date: new Date().toLocaleString(),
            completed: false
        };
        let newArr = this.state.items.slice();
        newArr.push(newItem);
        cookies.set("todo-list", newArr, {expires: new Date(Date.now() + 2592000)});
        this.setState({ items: newArr, counter: this.state.counter + 1 });   
    }

    deleteItem(itemToDelete) {
        const obj = this.findItemId(itemToDelete);
        if (obj.i > -1) {
            obj.arr.splice(obj.i, 1);
            cookies.set("todo-list", obj.arr, {expires: new Date(Date.now() + 2592000)});
            this.setState({ items: obj.arr });
        }
    }

    changeItem(itemToChange) {
        const obj = this.findItemId(itemToChange);
        if (obj.i > -1) {
            obj.arr[obj.i].completed = !obj.arr[obj.i].completed;
            cookies.set("todo-list", obj.arr, {expires: new Date(Date.now() + 2592000)});
            this.setState({ items: obj.arr });
        }
    }

    findItemId(item) {
        const newArr = this.state.items.slice();
        return {
            i: newArr.findIndex(element => element.id === item.id),
            arr: newArr
        };
    }
}

export default App;
