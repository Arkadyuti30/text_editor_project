import React from 'react'
import './App.css';
import mascot from './media/mascot.png'
import CreateButton from './CreateButton'
import TiptapEditor from './TiptapEditor'
import CommentBox from './CommentBox'

export default function MainPage() {
	let state1 = false
	let state2 = true
	if (state1) {
		return (
			<div id="main-page">
				<img src={mascot}/>
				<div id="content-wrapper">
					<div id="headers-wrapper">
						<div className="header">Let’s Get Started!</div>
						<div className="header">Create your first document.</div>
					</div>
					<CreateButton/>
				</div>
			</div>
		)
	} else if (state2) {
		return (
			<div id="main-page">
				<img src={mascot}/>
				<TiptapEditor/>
				<CommentBox/>
			</div>
		)
	}
}