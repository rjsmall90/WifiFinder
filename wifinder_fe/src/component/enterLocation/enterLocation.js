import React, { Component } from 'react';

export class enterLocation extends Component {

    searchLocation() {
        
    }

    render() {
        return (
            <div className="enter_location">
                <div id = "header">
                <h2>Enter Location Here:</h2>
                <input type="text" placeholder="Enter Location"></input>
                                <button onClick="searchLocation()">Enter</button>
                </div>
            </div>
        )
    }
}

export default enterLocation;