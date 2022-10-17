import React from 'react'
import './App.css';
import send from './media/send.svg'

export default function CommentInput() {
	return (
		<div id="comment-input-wrapper">
			<input id="comment-input" className="comment-bubble" placeholder="Type comment..."/>
			<div id="send-button" className="round-button">
				<img src={send}/>
			</div>
		</div>
	)
}