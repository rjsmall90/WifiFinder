import React, { Component } from 'react';

export class enterLocation extends Component {
    render() {
        return (
            <div className="enter_location">
                <div id = "header">
                <h2>Enter Location Here:</h2>
                <textarea>type in location</textarea>
                </div>
            </div>
        )
    }
}

export default enterLocation;