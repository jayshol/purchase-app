import React from 'react';
import './item.css';
import ToolTip from './ToolTip';

export default function Item(props){
	const price = props.discount ? props.value + "%" : "$ "+props.value;
	return (
		<div className="itemRow">			
		<span className={props.tooltip ? "labelCls" : ""}>
		{props.label ? props.label:""}
		{props.tooltip ? <ToolTip {...props.tooltip} /> : null}

		</span>
		<span className={props.bold? "boldClass":"priceClass"}>
		{price}
		</span>
		<span className="subLabel">{props.children}</span>
		</div>
	);

}



