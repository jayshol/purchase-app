import React from 'react';
import './ToolTip.css';

export default class ToolTip extends React.Component{
	constructor(props){
		super(props);
		this.state = {showTooltip:false};
		this.hideToolTip = this.hideToolTip.bind(this);
	}

	hideToolTip(){
		this.setState({showTooltip:false});
	}
	componentDidMount() {
    	document.body.addEventListener("click", this.hideToolTip);
	}
	
	componentWillUnmount() {
	   document.body.removeEventListener("click", this.hideToolTip);
	}

	render(){
		return(
			<span>
				{this.state.showTooltip && (
					<div class="toolTipCls">
						<div>{this.props.message}</div>
					</div>
				)}
				<a onClick={()=>this.setState({showTooltip: true})}>Pickup Savings</a>
			</span>
		)
	}
}