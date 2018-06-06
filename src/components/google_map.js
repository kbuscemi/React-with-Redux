import React, { Component } from 'react';

class GoogleMap extends Component {
    componentDidMount() {
        new google.maps.Map(this.refs.map, {
            //new google.maps.Map how we create an embedded google maps inside our document
            zoom: 12,
            center: {
                lat: this.props.lat,
                lng: this.props.lon
            }
        });
    }


    render() {
        // this.refs.map will give direct reference to the html element below.
        return <div ref='map' />;
    }

}

export default GoogleMap;