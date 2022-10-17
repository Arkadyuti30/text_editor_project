import React from 'react'
import './App.css';
import search from './media/search.svg'

export default function SearchBar() {
	return (
		<div id="search-bar">
			 <input id="search-input" placeholder="Search..."/>
			 <div id="search-button">
			 	<img src={search}/>
			 </div>
		</div>
	)
}