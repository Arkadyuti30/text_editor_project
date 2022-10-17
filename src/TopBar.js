import React from 'react'
import './App.css';
import SearchBar from './SearchBar'
import SignOutButton from './SignOutButton'

export default function TopBar() {
	let state = true
	if (state) {
		return (
			<div id="top-bar">
				<SearchBar/>
				<SignOutButton/>
			</div>
		)
	} else {
		return (
			<div id="top-bar">
			</div>
		)
	}
}