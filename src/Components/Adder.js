import React from "react";

class Adder extends React.Component {
    constructor(props) {
        super(props);
        this.state = {value: ''};

        this.handleChange = this.handleChange.bind(this);
        this.submit = this.submit.bind(this);
    }

    render() {
        return (
            <div id="adder-wrapper">
                <form onSubmit={this.submit}>
                    <label>
                        Add a task
                        <br/>
                        <input type="text" value={this.state.value} onChange={this.handleChange} />
                    </label>
                    <input type="submit" value="Add"/>
                </form>
            </div>
        );
    }

    handleChange(e) {
        this.setState({value: e.target.value});
    }

    submit(e) {
        e.preventDefault();
        const input = this.state.value;
        if(input !== "") {
            this.props.onClick(input);
            this.setState({value: ''});
        } else {
            alert("Please type a task");
        }
        
    }
}

export default Adder;
