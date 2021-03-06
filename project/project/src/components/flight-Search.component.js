import React, { Component } from 'react';
// import {getFlights} from '../API_Calls/flightInfoCall'
import plane from '../planeGif.gif'

export default class Search extends Component {

    constructor(props) {
        super(props);

        this.onChangeSearchSource = this.onChangeSearchSource.bind(this);
        this.onChangeSearchDestination = this.onChangeSearchDestination.bind(this);
        // this.onChangeTodoPriority = this.onChangeTodoPriority.bind(this);
        this.onSubmit = this.onSubmit.bind(this);

        this.state = {
            search_Source: '',
            search_Destination: '',
            search_completed: false
        }
    }

    onChangeSearchSource(e) {
        this.setState({
            search_Source: e.target.value
        });
    }
        onChangeSearchDestination(e) {
        this.setState({
            search_Destination: e.target.value
        });
    }


    onSubmit(e) {
        e.preventDefault();
        
        console.log(`Form submitted:`);
        console.log(`Search Source: ${this.state.search_Source}`);
        console.log(`Search Destination: ${this.state.search_Destination}`);
        
        // getFlights()


        this.setState({
            search_Source: '',
            search_Destination: '',
            search_completed: false
        })
    }

    render() {
        return (
            <div style={{marginTop: 10}}>
                <h3>Look up a destination based off of your spotify!</h3>
                {/* <form onSubmit={this.onSubmit}>
                    <div className="form-group"> 
                        <label>Source: </label>
                        <input  type="text"
                                className="form-control"
                                value={this.state.search_Source}
                                onChange={this.onChangeSearchSource}
                                />
                                
                    </div>
                    <div className="form-group"> 
                        <label>Destination: </label>
                        <input  type="text"
                                className="form-control"
                                value={this.state.search_Destination}
                                onChange={this.onChangeSearchDestination}
                                />
                                
                    </div> */}


                    {/* <div className="form-group" action = 'http://localhost:8888/Countries/redirect'> */}
                        
                        {/* <input type="submit" value="Search" href= 'http://localhost:8888/Countries/redirect' className="btn btn-primary" /> */}

                        {/* <p class="d-flex justify-content-center"><b>Note: This does not actually do anything yet!</b></p>
                        <a href='http://localhost:8888/Countries/j-pop' className="btn btn-primary">Go to Tokyo!</a>
                        <a href='http://localhost:8888/Countries/k-pop' className="btn btn-primary">Go to Seoul!</a>
                        <a href='http://localhost:8888/Countries/pop' className="btn btn-primary">Go to New York!</a>
                        <a href='http://localhost:8888/Countries/country' className="btn btn-primary">Go to Nashville!</a>
                        <a href='http://localhost:8888/Countries/classical' className="btn btn-primary">Go to Vienna!</a> */}
                        
                        
                    {/* </div> */}
                    <img src={plane} alt="loading..." />
                    <br></br>
                    <a href='http://localhost:8888/Countries/redirect' className="btn btn-primary">Search with Spotify!</a>
                    
                    
                {/* </form> */}
                
            </div>
            
        )
    }
}