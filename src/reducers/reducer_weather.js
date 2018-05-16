import { FETCH_WEATHER } from '../actions/index';

export default function(state = [], action) {
    // console.log('Action received', action)
    switch(action.type) {
    case FETCH_WEATHER:
        // return state.concat([action.payload.data]); 
        //need to handle the payload
        //taking payload.data because this is the only data we care about --found it via console
        //do not want to mutate our state when we are in a reducer like this - want to return a new instance of state.
        //want to collect new and old cities and return it in anarray.
        //use concat for this - doesn't change the existing array but creates a new array that contains all the old stuff
        //and the new stuff. we aren't mutating but returning a new version of our state.
        
        return [ action.payload.data, ...state];
            //says make a new array, put action.data inside of it and then take this other variable with all the data
            //inside of it and return a new array. 
            //this line of code does same thing as 'return state.concat([action.payload.data]); '
            //looks like: [city, city, city] NOT LIKE [city, [city, city]]
        }
    return state;
}