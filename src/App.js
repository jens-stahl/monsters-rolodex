import './App.css';

import React, {Component} from 'react';
import {CardList} from './components/card-list/card-list.component';

class App extends Component {
    constructor(props) {
        super(props);
        this.state = {
            monsters: [],
            searchField: ''
        }
    }
    componentDidMount() {
        fetch("https://jsonplaceholder.typicode.com/users")
            .then(response => response.json())
            .then(users => this.setState({monsters: users}));
    }
    render() {
        const {monsters,searchField} = this.state;
        const filteredMonsters = monsters.filter(monster =>
            monster.name.toLowerCase().includes(searchField.toLowerCase())
        );
        return (
            <div className="App">
                <input type='search' placeholder='Search monsters!'
                       onChange={event => this.setState({searchField:event.target.value})}/>
                <CardList monsters={filteredMonsters }/>
            </div>
        )
    }
}

export default App;
