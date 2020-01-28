import React from 'react';
import './App.css';
import List from './List';
import Adder from './Adder';

class App extends React.Component {

    constructor(props) {
        super(props);
        this.state = {items: [], counter: 0};
    }

    render() {
        return (
            <div id="wrapper">
                <Adder onClick={e => this.addItem(e)}/>
                <List itemList={this.state.items} handleDelete={e => this.deleteItem(e)} handleStatus={e => this.changeItem(e)}/>
            </div>
        );
    }

    addItem(item) {
        const newItem = {
            id: this.state.counter,
            text: item,
            date: new Date().toLocaleString(),
            completed : false
        };
        let newArr = this.state.items.slice();
        newArr.push(newItem);
        this.setState({items: newArr, counter: this.state.counter + 1});
    }

    deleteItem(itemToDelete) {
        const newArr = this.state.items.slice();
        const index = newArr.findIndex(element => element.id === itemToDelete.id);
        if(index>-1) {
            newArr.splice(index, 1);
            this.setState({items: newArr});
        }
    }

    changeItem(itemToChange) {
        const newArr = this.state.items.slice();
        const index = newArr.findIndex(element => element.id === itemToChange.id);
        if(index>-1) {
            newArr[index].completed = !newArr[index].completed;
            this.setState({items: newArr});
        }
    }
}

export default App; 