import React, { Component } from 'react';

export default class SearchBar extends Component {
    constructor(props) {
        super(props);

        this.state = { term: '' };

        this.onInputChange = this.onInputChange.bind(this);
                             //^^ this which is our instance of a search bar has a function called onInputChange.
                             //bind that function to this which is search bar and then replace onInputChange with this (which is search bar) 
                             //new bound instance of this function

    }

    onInputChange(event) {
        console.log(event.target.value);
        this.setState({ term: event.target.value });
    }

    onFormSubmit(event) {
        //this function will prevent the browser from submitting the form
        event.preventDefault();

        //we need to go and fetch weather data 

    }

    render() {
        return (
            <form onSubmit={this.onFormSubmit} className='input-group'>
                <input 
                    placeholder='Get a five-day forecast in your favourite cities'
                    className='form-control'
                    value={this.state.term}
                    onChange={this.onInputChange}
                />
                <span className='input-group-btn'>
                    <button type='submit' className='btn btn-secondary'>Submit</button>
                </span>
            </form>
        );
    }
}