import React, { Component } from 'react';
import Geocode from 'react-geocode';



 class Distance extends Component {
     
    constructor(props) {
        super(props);
        this.state = { 
            address: '', 
            dest:'', 
            distanceText:'',
            
        }
    }

    handleChange(target){
        this.setState({address: target.value})
    }
    handleDest(target){
        this.setState({dest: target.value})
    }

    getLatLngAddress(){
    Geocode.fromAddress(this.state.address).then(
        response => {
          const { lat, lng } = response.results[0].geometry.location;
          console.log(lat, lng);
        },
        error => {
          console.error(error);
        }
      );
    }

     getLatLngDest(){
        Geocode.fromAddress(this.state.dest).then(
            response => {
              const { lat, lng } = response.results[0].geometry.location;
              console.log(lat, lng);
            },
            error => {
              console.error(error);
            }
          );  
    }
    getDistance(p1, p2) {
        p1 = new window.google.maps.LatLng(this.getLatLngAddress.lat,this.getLatLngAddress.lng);
        p2 = new window.google.maps.LatLng(this.getLatLngDest.lat,this.getLatLngDest.lng);
       var distance = (window.google.maps.geometry.spherical.computeDistanceBetween(p1, p2) / 1000).toFixed(2);
       console.log(distance)
   }
    
    render(){
               
        return(
           <div>
               <h2 className ="distance">Distance Between Two Addresses</h2>
					<div>
                    	<label htmlFor="">Enter Origin </label>
						<input type="text" className="form-control" name="address"  onChange ={this.handleChange.bind(this)} value={ this.state.address }/>
                     </div>
                    
                    <div>
                        <label htmlFor="">Enter Destination </label>
						<input type="text"  className="form-control" name="dest" on onChange={this.handleDest.bind(this)}  value={ this.state.dest }/>
                     </div>
                    <button className="submit" onClick = {this.getDistance.bind(this)} >Submit</button>
            </div>

        );
   }
}

export default Distance;

//724-L Peachtree Road, Claymont, DE, 19703
//523 Saienni Blvd, New Castle, DE, 19720