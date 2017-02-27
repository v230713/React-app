import React from 'react';
import Movie from './Movie.js'
import axios from 'axios';

class Movies extends React.Component{
  constructor(props) {
    super(props);

    this.state = {
      movies: [],
      error: null
    };
  }

  componentDidMount() {
    
    axios.get(`http://api-public.guidebox.com/v2/movies?api_key=e65291e2a71fda9ad1e277954e71d4f1fb469510`)
      .then(res => {
    console.log(res);
        
        this.setState({
          movies : res.data.results
        });
      })
      .catch(err => {
        // Something went wrong. Save the error in state and re-render.
        this.setState({
          error: err
        });
      });
  }

  render(){
    return(
      <div className="row">
        <div className="col-md-12">
          <Movie movies = {this.state.movies}/>
        </div>
      </div>
    )
  }
}

export default Movies;
