import logo from './logo.svg';
import React, {Component} from 'react'

import {CardList} from "./components/card-list/card-list.component";

import './App.css';

class App extends Component {
    constructor() {
        super();
        this.state = {
            monsters: [],
            searchFields: ''
        }
    }

    componentDidMount() { // se renderiza en el DOM por la primera vez
        fetch('https://jsonplaceholder.typicode.com/users')
            .then(response => response.json())
            .then(users => this.setState({
                monsters: users
            }))
    }

    render() {
        const {monsters, searchFields} = this.state;
        const filterMonsters = monsters.filter(monster =>
            monster.name.toLowerCase().includes(searchFields.toLowerCase())
        )
        return (
            <>
                <div className="App">
                    <input type="search" placeholder="Search By Name" onChange={$event => this.setState({ //  this is asyncronis
                        searchFields: $event.target.value
                    })}/>
                    <CardList monsters={filterMonsters}/>

                </div>
            </>
        )
    }
}

export default App;
