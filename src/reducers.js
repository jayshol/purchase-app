const initialState = {
	id:94066,
	img: "https://i5.walmartimages.com/asr/90c1aad2-a3b3-4711-a29f-7b42b25aeadf_1.e83f74dfd7486d797bd0882996d1e3a4.jpeg?odnHeight=100&odnWidth=100&odnBg=FFFFFF",
  	title: "OFM Essentials Racecar Style Leather Gaming Chair, (ESS-3085)",
  	price: 115.87,
  	quantity: 1,
  	meta: "Actual color: White",
  	savings:1.12,
  	tax:10.06,
  	discount: 0
};

export const purchaseReducer = (state = initialState, action) => {
  if(action.type === "APPLY_CODE"){
    return Object.assign({},state,{
      discount:10
    });
  }	
	return state;
}