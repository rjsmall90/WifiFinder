import React, { Component } from 'react';
import GoogleMap from 'google-distance-matrix';

 class Distance extends Component {
     
    constructor(props) {
        super(props);
        this.state = { 
            address: '', 
            dest:'', 
            distanceText:'' 
        }
        this.handleFormSubmit = this.handleFormSubmit.bind(this);
        this.onChange = this.onChange.bind(this);
    }
    onChange = (address) => this.setState({ address });
    onChange = (dest) => this.setState({dest});

    handleChange(event){
        this.setState({address: event.target.value})
    }
    handleDest(event){
        this.setState({dest: event.target.value})
    }
    handleFormSubmit = (event) => {
        
        const component = this
        //const { address, dest } = this.state
        
        event.preventDefault()        
        GoogleMap.matrix([this.state.address], [this.state.dest], function (err, distances) {
            var distance = require('google-distance-matrix');
    
            distance.key('AIzaSyBjUqkq3Y327lB9evByUsXROPj03Y2JDbg');
            distance.units('imperial');
            
            if (err) {
                return console.log(err);
            }
            if(!distances) {
                return console.log('no distances');
            }
            if (distances.status === 'OK') {
                if(distances.rows[0].elements[0])  {
                 distance = distances.rows[0].elements[0].duration['text'];
                    component.setState({
                        foundDistance: true, 
                        distanceText: distance
                    }); 
                }
            } 
        })
    
    }
    render(){
               
        return(
           <div>
               
               <h2 className ="distance">Distance Between Two Addresses</h2>
					<div >
                    	<label htmlFor="">Enter Origin </label>
						<input type="text"  className="form-control" name="address"  onChange ={this.handleChange.bind(this)} value={ this.state.address }/>
                    </div>
                    <div>
                        <label htmlFor="">Enter Destination </label>
						<input type="text" className="form-control" name="dest" onChange={this.handleDest.bind(this)}  value={ this.state.dest }/>
                    </div>

                    <button className="submit"  onClick = {this.handleFormSubmit.bind(this)} >Submit</button>
                   
            </div>

        );
    }
}

export default Distance;

//724-L Peachtree Road, Claymont, DE, 19703
//523 Saienni Blvd, New Castle, DE, 19720