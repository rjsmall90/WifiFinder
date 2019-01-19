import React, { Component } from 'react';
import Map from './map';
import Distance from '../distance';
import CommentBox from '../comments/CommentBox';

export class Home extends Component {

    render(){
        return(
            
            <div style = {{ margin : '120px'}}>
                <Map
                    google={this.props.google}
                    center={{lat: 18.5204, lng: 73.8567}}
                    height='400px'
                    zoom={15} />   
                <Distance on="true"/>
                <CommentBox/>
            </div>
        );
    }
}

export default Home;