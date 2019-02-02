import React from 'react';
import './DropdownControl.css';


export class DropdownControl extends React.Component{
	constructor(props){
		super(props);
		this.state = { isOpen : false};
	}

	render(){
		const {isOpen} = this.state;
		return(
			<div className="dropdownCls">
				<a onClick={()=> this.setState({isOpen: !isOpen})}>
				{isOpen? this.props.hideText: this.props.showText}
				<span className="iconCls">{isOpen? "-" : "+"}</span>
				</a>
				{isOpen? this.props.children: null}
			</div>

		);
	}
}

DropdownControl.defaultProps = {
	showText:"Show",
	hideText:"Hide"	
}