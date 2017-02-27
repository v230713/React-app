import React from 'react';
import axios from 'axios';

class MovieDetails extends React.Component{
	constructor(props){
		super(props);

		this.state = {
			movieData : [],
			castData : [],
			writersData : [],
			directorsData : [],
			error : null
		}
	}

	componentDidMount(){
	axios.get(`http://api-public.guidebox.com/v2/movies/${this.props.params.movieId}?api_key=e65291e2a71fda9ad1e277954e71d4f1fb469510`)
      .then(res => {
    console.log(res);
        
        this.setState({
          movieData : res.data,
          castData : res.data.cast,
          writersData : res.data.writers,
          directorsData : res.data.directors
        });
      })
      .catch(err => {
        // Something went wrong. Save the error in state and re-render.
        this.setState({
          error: err
        });
      });
	}

	getCastList (arr) {

	}

	render(){
		let movieData = this.state.movieData;
		let imgWidth = {
			width : "100%"
		}

		const starring = this.state.castData.map((actors,i,arr) =>{
			if(arr.length-1==i){
				return <span key={i}>{actors.name}</span>
			}
			return <span key={i}>{actors.name},</span>
		});

		const writers = this.state.writersData.map((writer,i,arr) =>{
			if(arr.length-1==i){
				return <span key={i}>{writer.name}</span>
			}
			<span key={i}>{writer.name},</span>
		});

		const directors = this.state.directorsData.map((director,i,arr) =>{
			if(arr.length-1==i){
				return <span key={i}>{director.name}</span>
			}
			<span key={i}>{director.name},</span>
		});
		return(
			<div className = "row">
				<div className = "col-md-4">
					<div className = "thumbnail">
						<img src = {movieData.poster_400x570} style = {imgWidth}/>
						<div className = "caption">{movieData.title}({movieData.release_year})</div>
			</div>
				</div>
				<div className = "col-md-8">
					<div className = "jumbotron">
					<h1>{movieData.title}({movieData.release_year})</h1>
					<h4>Full Movie Description: {movieData.overview}</h4>
					</div>
					<div className = "container=fluid">
						<h5>Starring: {starring}</h5>
						<h5>Writers: {writers}</h5>
						<h5>Directors: {directors}</h5>
					</div>
				</div>
			</div>
		)
	}
}

export default MovieDetails;
