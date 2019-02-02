import React from 'react';
import {connect} from 'react-redux';
import Item from './Item';
import {DropdownControl} from './DropdownControl';
import Product from './Product';
import Promocode from './PromoCode';
import './Purchase.css';


export function Purchase(props){
console.log(props.id);
	return (
		<div className="puchaseCls">
			<Item label="Subtotal" value={props.price}>
				<span>({props.quantity} item)</span>
			</Item>
			<Item value={`-${props.savings}`}
				  bold
				  tooltip={{message:"Picking up your order helps cut costs and we pass the savings on to you", position:'bottom'}}>
			</Item>
			<Item label="Est. taxes & fees"
				  value={props.tax}>
				  <div className="subLabel">(Based on {props.id})</div>
			</Item>
			{props.discount ? <Item label="Discount" discount value={` ${props.discount}`} /> : null }
			<Item 
			label="Est. total"
			bold 
			value={`${Math.round(100 * (props.price + props.tax - props.savings) * (1 - props.discount / 100)) / 100}`}
			/>
			<DropdownControl 
				showText="See Item Details"
				hideText="Hide Item Details">
				<Product img={props.img} 
						quantity={props.quantity}
						title={props.title}
						price={props.price}
						meta={props.meta} ></Product>
			</DropdownControl>
			<DropdownControl 
				showText="Apply promo code"
				hideText="Hide promo code">
				<Promocode />
			</DropdownControl>
		</div>
	);
}

const mapStateToProps = state => state;

export default connect(mapStateToProps)(Purchase);