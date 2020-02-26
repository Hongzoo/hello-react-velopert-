import React, { Component } from "react";

class Counter extends Component {
	state = {
		number: 0
	};

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
		return (
			<div>
				<h1>카운터</h1>
				<div>값: {this.state.number}</div>
				<button onClick={this.handleIncrease}>+</button>
				<button onClick={this.handleDecrease}>-</button>
			</div>
		);
	}
}

export default Counter;
