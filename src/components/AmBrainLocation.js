import React from "react"
import {Map, GoogleApiWrapper} from 'google-maps-react';
import "../css/components/amBrainLocation.css"
const contStyle = {
    position: "relative",
    width: '500px',
    height:'400px'
}
class AmBrainLocation extends React.Component {
    render() {
        return (
            <div className="amBrainLocation">
                <h4>Location</h4>
                <Map
                    google={this.props.google}
                    zoom={15}
                    initialCenter={{lat: 9.761927, lng: 79.95244}}
                    containerStyle={contStyle}
                />
            </div>
        )
    }
}

export default GoogleApiWrapper({
    apiKey: 'API_KEY'
})(AmBrainLocation);