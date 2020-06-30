import React, { useState } from 'react'
import PropTypes from 'prop-types'
import axios from 'axios';
import './App.css'
import Axios from 'axios';

const App = props => {
    const [query, setQuery] = useState("");

    const APP_ID = "e90b429d";
    const APP_KEY = "2b16b7dbc664bd6cc8fd2c096013696d";
    const url = `https://api.edamam.com/search?q=${query}&app_id=${APP_ID}&app_key=${APP_KEY}&from=0&to=3&calories=591-722&health=alcohol-free`;

    const getData = async () => {
        const result = await Axios.get(url);
        console.log(result);
        setQuery("");
    }

    const onChange = e => {
        setQuery(e.target.value);
    }

    const onSubmit = e => {
        e.preventDefault();
        getData();
    }

    return (
        <div className="App">
            <h1>Food Searching App</h1>
            <form 
                className="search-form"
                onSubmit={onSubmit}>
                <input 
                    type="text" 
                    placeholder="Search Food"
                    autoComplete="off"
                    onChange={onChange}
                    value={query} />
                <input 
                    type="submit" 
                    value="search"/>
            </form>
        </div>
    )
}

App.propTypes = {

}

export default App
