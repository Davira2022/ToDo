import { Component } from 'react';

export class Todo extends Component {
    state = {
        userInput: '',
        ToDoList: []
    }

    onChangeEvent(e) {
        this.setState({userInput: e})
    }

    addItem(input) {
        if (input === '') {
            alert("Please enter an item")
        } else {
            let listArray = this.state.ToDoList;
            listArray.push(input);
            this.setState({ToDoList: listArray, userInput: ''})
    }
    }

    deleteItem() {
        let listArray = this.state.ToDoList;
        listArray = [];
        this.setState({ToDoList: listArray})
    }

    crossedWord(event) {
        const li = event.target;
        li.classList.toggle('crossed');
    }

    onFormSubmit(e) {
        e.preventDefault();
    }

    render() {
        return(
            <div>
            <form onSubmit={this.onFormSubmit}>
            <div className='container'>
                <input type="text"
                    placeholder='What do you plan?'
                    onChange={(e) => {this.onChangeEvent(e.target.value)}}
                    value={this.state.userInput} />
            </div>
            <div className='container'>
                <button onClick={() => this.addItem(this.state.userInput)} className="btn add">Add</button>
            </div>
            <ul>
                {this.state.ToDoList.map((item, index) => (
                    <li onClick={this.crossedWord} key={index}>{item}</li>
                ))}
            </ul>
            <div className='container'>
                <button onClick={() => this.deleteItem()} className="btn delete">Delete</button>
            </div>
            </form>
            </div>
        )
    }
}