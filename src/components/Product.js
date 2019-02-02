import React from 'react';
import './Product.css';

export default function Product(props){
	return(
		<div className="productCls">
      		<img src={props.img} />
		  <div className="productDetails">
		    <div className="titleCls">{props.title}</div>
		    <div className="price">$ {props.price}</div>
		    <div>Qty: {props.quantity}</div>
		    <div>{props.meta}</div>
		  </div>
    	</div>

	);
}