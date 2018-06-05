import React, { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { fetchWeather } from '../actions/index';

class SearchBar extends Component {
    constructor(props) {  
        super(props);

        this.state = {  term: '' };

        this.onInputChange = this.onInputChange.bind(this);
                             //^^ this which is our instance of a search bar has a function called onInputChange.
                             //bind that function to this which is search bar and then replace onInputChange with this (which is search bar) 
                             //new bound instance of this function
        this.onFormSubmit = this.onFormSubmit.bind(this);
                    //because we have a callback that we pass to JSX/DOM element and it makes a reference to 'this' we need to
                    // bind the context.
    }

    onInputChange(event) {
        console.log(event.target.value);
        this.setState({ term: event.target.value });
    }

    onFormSubmit(event) {
        //this function will prevent the browser from submitting the form
        event.preventDefault();

        //we need to go and fetch weather data 
        this.props.fetchWeather(this.state.term);
        this.setState({ term: '' }); //by setting state in this function once the user clicks the submit button
            //the form will clear 
    }

    render() {
        return (
            <form onSubmit={this.onFormSubmit} className='input-group'>
                <input 
                    placeholder='Get a five-day forecast in your favorite cities'
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

function mapDispatchToProps(dispatch) {
    return bindActionCreators({ fetchWeather }, dispatch);
}

export default connect(null, mapDispatchToProps)(SearchBar);
//whenever we are passing in a function that is supposed to map our dispatch to the
//the props of our container it always goes in as the second argument.
//by passing in null as the first argument we are saying 'hey you know i get redux is maintaining some state
//but this container doesnt care about it and we dont need state in here.