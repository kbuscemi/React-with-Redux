import axios from 'axios';

const API_KEY = '4cbf58030b7e8dba22a1993742ea8f5f';
const ROOT_URL = `http://api.openweathermap.org/data/2.5/forecast?appid=${API_KEY}`; 


export const FETCH_WEATHER = 'FETCH_WEATHER';
// define var and assigned var to it and then exported it
// and created an action called fetch weather
//we do this to keep our action types consistant between our action creators and reducers


//going to create an action creator that will be responsible for
// making an API request to fetch our weather data
export function fetchWeather(city) {
    const url = `${ROOT_URL}&q=${city},us`;
    const request = axios.get(url);
    //taking the url with a particular search city and make a get request on it
    //request will return a promise
    // console.log('Request:', request);
    return {
        type: FETCH_WEATHER,
        payload: request
        //passing the request into our action as the payload
        //** payload is an optional property that goes along with actions that can
        // contain some additional data that describes the particular action */
    };
}