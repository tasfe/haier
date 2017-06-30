require.config({
	paths: {
		"jquery": "jquery-1.10.1.min",
		"cookie":"jquery.cookie",
		"shop":"shop",
		"index":"index"
	}
})
require(["jquery","cookie","shop","index"], function($,cookie,shop,index){
	shop.shop();
})