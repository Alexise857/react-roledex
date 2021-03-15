import logo from './logo.svg';
import React, {Component} from 'react'

import {CardList} from "./components/card-list/card-list.component";
import {SearchBox} from "./components/search-box/search-box.component";

import './App.css';

class App extends Component {
    constructor() {
        super();
        this.state = {
            monsters: [],
            searchFields: ''
        }
    }

    handleChange = (e) => {
        this.setState({
            searchFields: e.target.value
        })
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
                    <h1>Monsters Rolodex</h1>
                    {/*<input type="search" placeholder="Search By Name" onChange={$event => this.setState({ //  this is asyncronis*/}
                    {/*    searchFields: $event.target.value*/}
                    {/*})}/>*/}
                    {/*
                     this.handleChange() ---> se dispara con el render
                     this.handleChange ---> se dispara solo si se hace click
                     */}
                    <SearchBox
                        handleChange={this.handleChange}
                        placeholder='Search by Name'/>
                    <CardList monsters={filterMonsters}/>

                </div>
            </>
        )
    }
}

export default App;
