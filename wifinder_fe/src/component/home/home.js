import React, { Component } from 'react';
import Map from './map';
import Distance from '../distance';


export class Home extends Component {

    render(){
        return(
            
            <div style = {{ margin : '120px'}}>
                <Map
                    google={this.props.google}
                    center={{lat: 18.5204, lng: 73.8567}}
                    height='400px'
                    zoom={15} />   
                <Distance/>
            </div>
        );
    }
}

export default Home;