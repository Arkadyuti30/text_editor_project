import React from 'react'
import './App.css';
import add from './media/add.svg'

export default function CreateButton() {
	return (
		<div id="create-button">
			<img src={add}/>
		</div>
	)
}