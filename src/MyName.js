import React, { Component } from "react";

// 클래스형 컴포넌트 S
// class MyName extends Component {
// 	// static defaultProps = {
// 	// 	name: "기본이름"
// 	// };
// 	render() {
// 		return (
// 			<div>
// 				안녕하세요! 제 이름은 <b>{this.props.name}</b> 입니다.
// 			</div>
// 		);
// 	}
// }
// MyName.defaultProps = {
// 	name: "기본이름"
// };
// 클래스형 컴포넌트 E

// 함수형 컴포넌트 S
const MyName = ({ name }) => {
	return (
		<div>
			안녕하세요 ! 제 이름은 <b>{name}</b> 입니다.
		</div>
	);
};
MyName.defaultProps = {
	name: "기본이름"
};
// 함수형 컴포넌트 E

export default MyName;
