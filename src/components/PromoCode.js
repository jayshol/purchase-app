import React from 'react';
import {applyCode} from '../actions';
import {connect} from 'react-redux';
import './PromoCode.css';

export class PromoCode extends React.Component{
	constructor(props){
		super(props);
		this.state={promoCode:""}
		this.handleSubmit = this.handleSubmit.bind(this);
	}

	handleSubmit(){
		if(!this.state.promoCode){
			alert("PromoCode is required");
			return;
		}else if(this.state.promoCode.toUpperCase() !== "DISCOUNT"){
			alert("Wrong PromoCode");
			return;
		}
		this.props.dispatch(applyCode());
	}
	render(){
		const {promoCode} = this.state;
		return(
			<div>
				<input value={promoCode} 
					onChange={e => this.setState({promoCode:e.target.value})} />
				<a className="btnClass" onClick={()=>this.handleSubmit()}>Apply</a>
			</div>

		)
	}
}

export default connect()(PromoCode);