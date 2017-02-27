import React from 'react';
import Main from '../components/Main';
import Home from '../components/Home';
import Movies from  '../components/Movies';
import MovieDetails from '../components/MovieDetails';
import {Route,IndexRoute} from 'react-router';

export default (
	<Route path = "/" component ={Main}>
	<Route path = "/movies/:movieId" component = {MovieDetails} />
	<IndexRoute component = {Movies} />
	</Route>
);