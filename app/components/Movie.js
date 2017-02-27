import React from 'react';
import {Link} from 'react-router';

class Movie extends React.Component{

	render(){
		// let displayImage = {
		// 	display : "inline-block",
		// 	position : "relative",
		// 	align : "center",
		// 	margin : 10,
		// 	height : 256,
		// 	padding : 10,
		// 	width : 160,
		// 	backgroundColor: "#000000",
		// 	boxShadowTop: 0,
		// 	boxShadowRight: 0,
		// 	boxShadowBottom: 10,
		// 	boxShadowLeft: "#111111"
		// }

		// let imageStyle = {
		// 	padding : 0,
		// 	height : 228,
		// 	width : 160,
		// 	verticalAlign : "top",
		// 	border : 0,
		// 	maxWidth : "100%"
		// }

		// let titleStyle = {
		// 	width : 161,
		// 	textAlign : "left",
		// 	padding : 5,
		// 	position : "absolute",
		// 	bottom : 0,
		// 	fontSize : 18,
		// 	lineHeight : 18,
		// 	opacity : 0.9,
		// 	color : "#FFF"
		// }

		// const items = this.props.movies.map((item,i) => 
		// <div key = {i} style = {displayImage}>
		// 	<img src = {item.poster_120x171} style = {imageStyle}/>
		// 	<div style={titleStyle}>{item.title}({item.release_year})</div>
		// </div>
		// );
		
		let imgWidth = {
			width : "100%"
		}
		const items = this.props.movies.map((item,i) => 
		<Link to = {`/movies/${item.id}`}>
		<div key = {i} className = "col-md-3">
			<div className = "thumbnail">
				<img src = {item.poster_240x342} style={imgWidth}/>
				<div className = "caption">{item.title}({item.release_year})</div>
			</div>
		</div>
		</Link>
		);

		return(
			<div>
			{items}
			</div>
		)
	}
}

export default Movie;