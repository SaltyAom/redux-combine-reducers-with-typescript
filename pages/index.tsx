import { Fragment } from "react"

import { Dispatch } from "redux"
import { connect } from "react-redux"

import {
	storeType,
	storeFactory,
	dispatchType,
	dispatchFactory
} from "stores/types/pages/index"

const mapStateToProps = (state: storeType): storeFactory => {
	return {
		store: state
	}
}

const mapDispatchToProps = (
	dispatch: Dispatch<dispatchType>
): dispatchFactory => {
	return {
		dispatch: {
			updateCounter: (newValue: number): dispatchType =>
				dispatch({
					type: "UPDATE_COUNTER",
					payload: {
						count: newValue
					}
				}),
			updateClicker: (newValue: number): dispatchType =>
				dispatch({
					type: "UPDATE_CLICKER",
					payload: {
						click: newValue
					}
				})
		}
	}
}

const Index = ({ store, dispatch }) => {
	let { counter, clicker } = store
	let { count } = counter,
		{ click } = clicker

	let { updateCounter, updateClicker } = dispatch

	return (
		<main id="layout">
			<h1 id="title">Redux's combineReducers() with TypeScript</h1>
			<div id="status">
				<p className="detail">Counter: {count}</p>
				<p className="detail">Clicker: {click}</p>
			</div>
			<div id="controller">
				<button
					className="update"
					onClick={() => updateCounter(++count)}
				>
					Increase Counter
				</button>
				<button
					className="update"
					onClick={() => updateClicker(++click)}
				>
					Increase Clicker
				</button>
			</div>
			<a
				id="github"
				href="https://github.com/aomkirby123/redux-combine-reducers-with-typescript"
				rel="noopener noreferrer"
				target="_blank"
			>
				Github
			</a>
		</main>
	)
}

export default connect(
	mapStateToProps,
	mapDispatchToProps
)(Index)
