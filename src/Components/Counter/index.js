import React, { Component } from 'react'
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux'
import {
	increment,
	decrement
} from '../../actions/'

class Counter extends Component {
	constructor(props) {
		super(props)
	}

	render() {
		console.log(this)
		return (
			<div>
				<div>
					{this.props.value}
				</div>

				<div>
					<button onClick={this.props.decrement}>-</button>
					<button onClick={this.props.increment}>+</button>
					<button onClick={this.props.helloWorld}> Hello World </button>
				</div>
			</div>
		)
	}
}

const mapStateToProps = ({ state }, props) => {
	return {
		value: state,
		helloWorld: props.helloWorld
	}
}

const mapActionsToProps = (dispatch, props) => {
	return bindActionCreators({
		increment,
		decrement
	}, dispatch)
}

// const mergeProps = (propsFromState, propFromDispatch, ownProps) => {
// 	console.log({propsFromState, propFromDispatch, ownProps})
// 	return {}
// }

export default connect(
	mapStateToProps,
	mapActionsToProps,
	// mergeProps
)(Counter)