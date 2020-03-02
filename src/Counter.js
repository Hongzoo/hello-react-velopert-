import React, { Component } from "react";

const Problematic = () => {
	throw (new Error('버그가 나타났다!'));
	return (
		<div>
			
		</div>
	);
};
class Counter extends Component {
	state = {
		number: 0
	};
	
	constructor(props) {
		super(props);
		console.log('constructor');
	}
	
	componentWillMount() {
		console.log('componentWillMount (deprecated)');
	}
	
	componentDidMount() {
		console.log('componentDidMount');
	}
	
	shouldComponentUpdate(nextProps, nextState) {
		// 5의 배수라면 리렌더링 하지 않음
		console.log('shouldComponentUpdate');
		if (nextState.number % 5 === 0) return false;
		return true;
	}
	
	componentWillUpdate(nextProps, nextState) {
		console.log('componentWillUpdate');
	}
	
	componentDidUpdate(prevProps, prevState) {
		console.log('componentDidUpdate');
	}
	
	componentDidCatch(error, info) {
		this.setState({
			error: true
		});
	}

	handleIncrease = () => {
		// 방법1 : setState에 객체 전달하기 : this.state를 조회해서 사용
		// this.setState({
		// 	number: this.state.number + 1
		// });

		// 방법2 : setState에 객체대신 함수를 전달하기
		// this.setState(
		// 	(state) => ({
		// 		number: state.number + 1
		// 	})
		// );

		// 방법3 : 구조분해할당(비구조화 할당) 스타일1.....
		const { number } = this.state;
		this.setState({
			number: number + 1
		});
	};

	handleDecrease = () => {
		// 방법4 : 구조분해할당(비구조화 할당) 스타일2.....
		this.setState(
			({ number }) => ({
				number: number - 1
			})
		);
	};

	render() {
		console.log('render');
		
		if (this.state.error) return (<h1>에러발생!</h1>);
		
		return (
			<div>
				<h1>카운터</h1>
				<div>값: {this.state.number}</div>
				{ this.state.number === 4 && <Problematic /> }
				<button onClick={this.handleIncrease}>+</button>
				<button onClick={this.handleDecrease}>-</button>
			</div>
		);
	}
}

export default Counter;
