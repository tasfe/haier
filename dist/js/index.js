$(function(){
	// ajax加载精彩推荐图片
	$.ajax({
		url: "data.json",
		type: "GET",
		success:function(arr){
			 var html = "";
			 for(var i = 0 ;i < arr[0].children.length;i++){
			 	html += '<li class = "li_tab"><a href="#"><img src = "'+ arr[0].children[i].img
			 	+'" class = "li_img" /></a><div class = "li_p"><a href="#"><span class = "name">'+arr[0].children[i].name
			 	+'</span><br/><span class = "model">'+arr[0].children[i].model+'</span><br/><span class = "detail">'+arr[0].children[i].detail
			 	+'</span></a><span class = "price">'+arr[0].children[i].price+'</span></div><a href = "#" class = "core">'+arr[0].children[i].core+'</a></li>';
			 }
			 $("#ul1").html(html);
			 html = "";
			 for(var i = 0 ;i < arr[1].children.length;i++){
			 	html += '<li class = "li_tab"><a href="#"><img src = "'+ arr[1].children[i].img
			 	+'" class = "li_img" /></a><div class = "li_p"><a href="#"><span class = "name">'+arr[1].children[i].name
			 	+'</span><br/><span class = "model">'+arr[1].children[i].model+'</span><br/><span class = "detail">'+arr[1].children[i].detail
			 	+'</span></a><span class = "price">'+arr[1].children[i].price+'</span></div><a href = "#" class = "core">'+arr[1].children[i].core+'</a></li>';
			 }
			 $("#ul2").html(html);
			 html = "";
			 for(var i = 0 ;i < arr[2].children.length;i++){
			 	html += '<li class = "li_tab"><a href="#"><img src = "'+ arr[2].children[i].img
			 	+'" class = "li_img" /></a><div class = "li_p"><a href="#"><span class = "name">'+arr[2].children[i].name
			 	+'</span><br/><span class = "model">'+arr[2].children[i].model+'</span><br/><span class = "detail">'+arr[2].children[i].detail
			 	+'</span></a><span class = "price">'+arr[2].children[i].price+'</span></div><a href = "#" class = "core">'+arr[2].children[i].core+'</a></li>';
			 }
			 $("#ul3").html(html);
			 html = "";
			 for(var i = 0 ;i < arr[3].children.length;i++){
			 	html += '<li class = "li_tab"><a href="#"><img src = "'+ arr[3].children[i].img
			 	+'" class = "li_img" /></a><div class = "li_p"><a href="#"><span class = "name">'+arr[3].children[i].name
			 	+'</span><br/><span class = "model">'+arr[3].children[i].model+'</span><br/><span class = "detail">'+arr[3].children[i].detail
			 	+'</span></a><span class = "price">'+arr[3].children[i].price+'</span></div><a href = "#" class = "core">'+arr[3].children[i].core+'</a></li>';
			 }
			 $("#ul4").html(html);
			 html = "";
			 for(var i = 0 ;i < arr[4].children.length;i++){
			 	html += '<li class = "li_tab"><a href="#"><img src = "'+ arr[4].children[i].img
			 	+'" class = "li_img" /></a><div class = "li_p"><a href="#"><span class = "name">'+arr[4].children[i].name
			 	+'</span><br/><span class = "model">'+arr[4].children[i].model+'</span><br/><span class = "detail">'+arr[4].children[i].detail
			 	+'</span></a><span class = "price">'+arr[4].children[i].price+'</span></div><a href = "#" class = "core">'+arr[4].children[i].core+'</a></li>';
			 }
			 $("#ul5").html(html);
			 html = "";
			 for(var i = 0 ;i < arr[5].children.length;i++){
			 	html += '<li class = "li_tab"><a href="#"><img src = "'+ arr[5].children[i].img
			 	+'" class = "li_img" /></a><div class = "li_p"><a href="#"><span class = "name">'+arr[5].children[i].name
			 	+'</span><br/><span class = "model">'+arr[5].children[i].model+'</span><br/><span class = "detail">'+arr[5].children[i].detail
			 	+'</span></a><span class = "price">'+arr[5].children[i].price+'</span></div><a href = "#" class = "core">'+arr[5].children[i].core+'</a></li>';
			 }
			 $("#ul6").html(html);
			 html = "";
			 for(var i = 0 ;i < arr[6].children.length;i++){
			 	html += '<li class = "li_tab"><a href="#"><img src = "'+ arr[6].children[i].img
			 	+'" class = "li_img" /></a><div class = "li_p"><a href="#"><span class = "name">'+arr[6].children[i].name
			 	+'</span><br/><span class = "model">'+arr[6].children[i].model+'</span><br/><span class = "detail">'+arr[6].children[i].detail
			 	+'</span></a><span class = "price">'+arr[6].children[i].price+'</span></div><a href = "#" class = "core">'+arr[6].children[i].core+'</a></li>';
			 }
			 $("#ul7").html(html);
			 html = "";
			 for(var i = 0 ;i < arr[7].children.length;i++){
			 	html += '<li class = "li_tab"><a href="#"><img src = "'+ arr[7].children[i].img
			 	+'" class = "li_img" /></a><div class = "li_p"><a href="#"><span class = "name">'+arr[7].children[i].name
			 	+'</span><br/><span class = "model">'+arr[7].children[i].model+'</span><br/><span class = "detail">'+arr[7].children[i].detail
			 	+'</span></a><span class = "price">'+arr[0].children[i].price+'</span></div><a href = "#" class = "core">'+arr[7].children[i].core+'</a></li>';
			 }
			 $("#ul8").html(html);
 		}
	})
	//侧边栏加载
	$.ajax({
		url: "data1.json",
		type: "GET",
		success:function(res){
			//冰箱
			var html = "";
			for(var i = 0;i < res[0].children.length;i++){
				html += '<li><a href = "#"><img src = "'+res[0].children[i].img+'" /><span>'+res[0].children[i].type+'</span></a></li>'
			}
			$(".tab_one_l").html(html);
			html = "";
			for(var i = 0;i < res[0].child.length;i++ ){
				html += '<li><a href = "#"><img src = "'+res[0].child[i].img+'" /><span class = "span_one">'+res[0].child[i].type+'</span><span class = "span_two">'+res[0].child[i].price+'</span></a></li>'
			}
			$(".tab_one_r").html(html);
			//空调
			html = "";
			for(var i = 0;i < res[1].children1.length;i++){
				html += '<li><a href = "#"><img src = "'+res[1].children1[i].img+'" /><span>'+res[1].children1[i].type+'</span></a></li>'
			}
			$(".tab_two_l_one").html(html);
			html = "";
			for(var i = 0;i < res[1].children2.length;i++){
				html += '<li><a href = "#"><img src = "'+res[1].children2[i].img+'" /><span>'+res[1].children2[i].type+'</span></a></li>'
			}
			$(".tab_two_l_two").html(html);
			html = "";
			for(var i = 0;i < res[1].child.length;i++ ){
				html += '<li><a href = "#"><img src = "'+res[1].child[i].img+'" /><span class = "span_one">'+res[1].child[i].type+'</span><span class = "span_two">'+res[1].child[i].price+'</span></a></li>'
			}
			$(".tab_two_r").html(html);
			//洗衣机
			html = "";
			for(var i = 0;i < res[2].children.length;i++){
				html += '<li><a href = "#"><img src = "'+res[2].children[i].img+'" /><span>'+res[2].children[i].type+'</span></a></li>'
			}
			$(".tab_three_l").html(html);
			html = "";
			for(var i = 0;i < res[2].child.length;i++ ){
				html += '<li><a href = "#"><img src = "'+res[2].child[i].img+'" /><span class = "span_one">'+res[2].child[i].type+'</span><span class = "span_two">'+res[2].child[i].price+'</span></a></li>'
			}
			$(".tab_three_r").html(html);
			//电视
			html = "";
			for(var i = 0;i < res[3].children.length;i++){
				html += '<li><a href = "#"><img src = "'+res[3].children[i].img+'" /><span>'+res[3].children[i].type+'</span></a></li>'
			}
			$(".tab_four_l").html(html);
			html = "";
			for(var i = 0;i < res[3].child.length;i++ ){
				html += '<li><a href = "#"><img src = "'+res[3].child[i].img+'" /><span class = "span_one">'+res[3].child[i].type+'</span><span class = "span_two">'+res[3].child[i].price+'</span></a></li>'
			}
			$(".tab_four_r").html(html);
			//热水器
			html = "";
			for(var i = 0;i < res[4].children.length;i++){
				html += '<li><a href = "#"><img src = "'+res[4].children[i].img+'" /><span>'+res[4].children[i].type+'</span></a></li>'
			}
			$(".tab_five_l").html(html);
			html = "";
			for(var i = 0;i < res[4].child.length;i++ ){
				html += '<li><a href = "#"><img src = "'+res[4].child[i].img+'" /><span class = "span_one">'+res[4].child[i].type+'</span><span class = "span_two">'+res[4].child[i].price+'</span></a></li>'
			}
			$(".tab_five_r").html(html);
			//厨房电器
			html = "";
			for(var i = 0;i < res[5].children.length;i++){
				html += '<li><a href = "#"><img src = "'+res[5].children[i].img+'" /><span>'+res[5].children[i].type+'</span></a></li>'
			}
			$(".tab_six_l").html(html);
			html = "";
			for(var i = 0;i < res[5].child.length;i++ ){
				html += '<li><a href = "#"><img src = "'+res[5].child[i].img+'" /><span class = "span_one">'+res[5].child[i].type+'</span><span class = "span_two">'+res[5].child[i].price+'</span></a></li>'
			}
			$(".tab_six_r").html(html);
			//冷柜
			html = "";
			for(var i = 0;i < res[6].children.length;i++){
				html += '<li><a href = "#"><img src = "'+res[6].children[i].img+'" /><span>'+res[6].children[i].type+'</span></a></li>'
			}
			$(".tab_seven_l").html(html);
			//智能产品
			html = "";
			for(var i = 0;i < res[7].children.length;i++){
				html += '<li><a href = "#"><img src = "'+res[7].children[i].img+'" /><span>'+res[7].children[i].type+'</span></a></li>'
			}
			$(".tab_eight_l").html(html);
			//生活小家电
			html = "";
			for(var i = 0;i < res[8].children.length;i++){
				html += '<li><a href = "#"><img src = "'+res[8].children[i].img+'" /><span>'+res[8].children[i].type+'</span></a></li>'
			}
			$(".tab_nine_l").html(html);
			//厨房电器
			html = "";
			for(var i = 0;i < 8;i++){
				html += '<li><a href = "#"><img src = "'+res[9].children[i].img+'" /><span>'+res[9].children[i].type+'</span></a></li>'
			}
			$(".tab_ten_l").html(html);
			html = "";
			for(var i = 8;i < res[9].children.length;i++){
				html += '<li><a href = "#"><img src = "'+res[9].children[i].img+'" /><span>'+res[9].children[i].type+'</span></a></li>'
			}
			$(".tab_ten_r").html(html);
			//水家电
			html = "";
			for(var i = 0;i < res[10].children1.length;i++){
				html += '<li><a href = "#"><img src = "'+res[10].children1[i].img+'" /><span>'+res[10].children1[i].type+'</span></a></li>'
			}
			$(".tab_ele_l_one").html(html);
			html = "";
			for(var i = 0;i < res[10].children2.length;i++){
				html += '<li><a href = "#"><img src = "'+res[10].children2[i].img+'" /><span>'+res[10].children2[i].type+'</span></a></li>'
			}
			$(".tab_ele_l_two").html(html);
			html = "";
			for(var i = 0;i < res[10].children3.length;i++){
				html += '<li><a href = "#"><img src = "'+res[10].children3[i].img+'" /><span>'+res[10].children3[i].type+'</span></a></li>'
			}
			$(".tab_ele_l_three").html(html);

		}
	})
	//侧边栏伸缩
	// $(".aside_ul li").hover(function(){
	// 	$(this).css("backgroundColor","white");
	// 	$(this).find("a").css("color","#606060");
	// 	var wi = $(".banner").find("div").filter(".tab_commen").eq($(this).index()).find(".c_content").css("width");
	// 	$(".banner").find("div").filter(".tab_commen").stop().animate({width:wi},500);
	// 	$(".banner").find("div").filter(".tab_commen").eq($(this).index()).find(".c_content").css("display","block");
	// },function(){
	// 	$(this).css("backgroundColor","rgba(0,0,0,0.6)");
	// 	$(this).find("a").css("color","white");
	// 	$(".banner").find("div").filter(".tab_commen").animate({width:0},500);
	// 	$(".banner").find("div").filter(".tab_commen").eq($(this).index()).find(".c_content").css("display","none");
	// })
	$(".aside_ul li").on("mouseenter mouseleave",function(event){
		if(event.type == "mouseenter"){
			$(this).css("backgroundColor","white");
			$(this).find("a").css("color","#606060");
			var wi = $(".banner").find("div").filter(".tab_commen").eq($(this).index()).find(".c_content").css("width");
			$(".banner").find("div").filter(".tab_commen").stop().animate({width:wi},500);
			$(".banner").find("div").filter(".tab_commen").eq($(this).index()).css("display","block");
		}else if(event.type == "mouseleave"){
			$(this).css("backgroundColor","rgba(0,0,0,0)");
			$(this).find("a").css("color","white");
			$(".banner").find("div").filter(".tab_commen").animate({width:0},500);
			$(".banner").find("div").filter(".tab_commen").eq($(this).index()).css("display","none");
		}
	})



	$(".tab_commen2").hover(function(){
		$(".aside_ul li").eq($(this).index() -2).css("backgroundColor","white");
		$(".aside_ul li").eq($(this).index() -2).find("a").css("color","#606060");
		$(this).css("display","block");
		$(this).stop().animate({width:$(this).find(".c_content").css("width")});
	},function(){
		$(".aside_ul li").eq($(this).index() -2).css("backgroundColor","rgba(0,0,0,0)");
		$(".aside_ul li").eq($(this).index() -2).find("a").css("color","white");
		$(this).css("display","none");
		$(this).css("width","0px");
	})



	//精彩推荐图片实现切换
	$(".list dl").hover(function(){
		$(".oU").css("display","none");
		$("#ul"+ ($(this).index() + 1)).css("display","block");
		$(".commen").removeClass("active");
		$(this).addClass("active");
		$(".own_one").css("backgroundColor","#095bad");
	},function(){
		
	})


	// banner
	var oBtns = $("#show").find("span");
	var oUl =  $("#play").find("ul");
	var iNow = 0;
	var timer = null;
	timer = setInterval(timerInner,2000);
	function timerInner(){
		iNow++ ;
		tab();
	}
	function tab(){
		if(Math.abs(iNow) == oBtns.size()){
			oBtns.attr("class","comm");
			oBtns.eq(0).attr("class", "active");
		}else{
			oBtns.attr("class","comm");
			oBtns.eq(Math.abs(iNow)).attr("class","active");
		}
		oUl.animate({left:(Math.abs(iNow) + 1)*-1600},function(){
			if(Math.abs(iNow) == oBtns.size()){
				iNow = 0;
				oUl.css("left",-1600);
			}
		})
	}
	//下方按钮滑动
	oBtns.click(function(){
		iNow = $(this).index();
		tab();
	})
	//滑过暂停
	$("#play").hover(function(){
		clearInterval(timer);
	}, function(){
		timer = setInterval(timerInner, 2000);
	})
	//左箭头滑动
	$(".icon-zuojiantou").click(function(){
		
		if((Math.abs(iNow)) == 0){
			oUl.animate({left:0},function(){
				iNow = 5;
				oUl.css("left",-9600);
				oBtns.attr("class","comm");
				oBtns.eq(5).attr("class", "active");
			})	
		}else if((Math.abs(iNow)) != 0 ){
			oUl.animate({left:(Math.abs(iNow))*-1600},function(){
				
			})	
		}
		// console.log(iNow);
		if(Math.abs(iNow)  !==oBtns.size()){

			oBtns.attr("class","comm");
			oBtns.eq(iNow - 1).attr("class","active");
		}

		iNow--;

		
		// console.log(iNow + "," + oUl.css("left"));
	})
	//右箭头滑动
	$(".icon-youjiantou").click(function(){
		iNow = Math.abs(iNow);
		iNow++;
		tab();
	})

	//左右箭头效果
	$(".icon_left").hover(function(){
		clearInterval(timer);
		$(this).css("color","white");
	},function(){
		timer = setInterval(timerInner, 2000);
		$(this).css("color","#f9e0e2");
	})
	$(".icon_right").hover(function(){
		clearInterval(timer);
		$(this).css("color","white");
	},function(){
		timer = setInterval(timerInner, 2000);
		$(this).css("color","#f9e0e2");
	})

	//活动图
	$(".pic").hover(function(){
		$(this).css("left","-10px");
	},function(){
		$(this).css("left","0");
	})
	//精彩推荐图片动画
	
	//精彩推荐图片动画 与ajax加载数据异步  使用事件代理
	$(".commodity ul").on("mouseover mouseout","li",function(event){
		if(event.type == "mouseover"){
			$(this).find(".li_p").css("height","60px");
			$(this).find(".li_p").stop().animate({marginTop:'268'},200,"swing");
			if($(this).index() % 4 ==0){
				$(this).css("boxShadow","2px 2px 6px #d3d3d3, 3px 3px 7px #dfdfdf, 4px 4px 8px #e7e7e7");
			}else{
				$(this).css("boxShadow","0px -2px 8px #d3d3d3,2px 4px 3px #d3d3d3");
			}
		}else if(event.type == "mouseout"){
			$(this).find(".li_p").css("height","40px");
			$(this).find(".li_p").stop().animate({marginTop:'288'},200,"swing");
			$(this).css("boxShadow","");
		}
	})

	//购物车
 	$(".shop_car").hover(function(){
		$(".shop_car_show").css("display","block");
		$(".shop_car_con").css("backgroundColor","#f6f6f6").css("color","#005aaa");
	},function(){
		$(".shop_car_show").css("display","none");
		$(".shop_car_con").css("backgroundColor","#626262").css("color","white");
	})
	 
	 //删除商品
	 $(".goods_show").on("click","#delete",function(){
	 	$(this).closest(".mini_car").remove();
	 	
	 	// 删除cookie中的某个对应id
	 	var str = $.cookie("goods");
	 	var cookieArr = eval(str);
	 	for(var i in cookieArr){
	 		if($(this).attr("class") == cookieArr[i].id){
	 			var obj1 ={id:cookieArr[i].id,num:cookieArr[i].num};
	 			var a = cookieArr.indexOf(cookieArr[i]);
	 			cookieArr.splice(a,1);	
	 		}
	 	}
	 	if(cookieArr.length != 0){
	 		$.cookie("goods", JSON.stringify(cookieArr), {expires: 7});
	 	}else{
	 		$.cookie("goods",null);
	 	}
	 	sc_msg();

	 	if($(".goods_show").find(".mini_car").size() == 0){
		 	$(".shop_car_p").css("display","block");
		 	$(".total_show").css("display","none");

		 	$(".shop_car_show").css("display","none");
		 	$(".shop_car_con").css("backgroundColor","#626262").css("color","white");
		 }else{
		 	$(".shop_car_p").css("display","none");
		 	$(".total_show").css("display","block");
		 }
	 })

	    
	//商品购买
	$(".shop_info").on("click",".buy_button",function(){
    	//将尚未添加商品的p标签隐藏
    	$(".shop_car_p").css("display","none");
    	//判断此前是否存过cookie
    	var first = $.cookie("goods") == null ? true :false;
    	if(first){
    		$.cookie("goods",'[{id:' + this.id + ',num:' + $(".num_buy").val() + '}]',{expires:7});
    	}else{
    		//将cookie取出
    		var cookieStr = $.cookie("goods");
    		var arr = eval(cookieStr);
    		//判断之前是否存储过
    		var isYes = false;
    		for(var i in arr){

				if(arr[i].id == this.id){
					arr[i].num = parseInt(arr[i].num) + parseInt($(".num_buy").val());
					isYes = true;
				}
			}
    		//没有存储过
    		if(!isYes){
    			var obj = {id: this.id, num: $(".num_buy").val()}
    			arr.push(obj);
    		}

    		$.cookie("goods", JSON.stringify(arr), {expires: 7});
    	}

    	// sc_car();
    	sc_msg();
    })

    $(".shop_car").hover(function(){
    	if($.cookie("goods")){
    		$(".shop_car_p").css("display","none");
    	}
    	sc_car();
    
    })

    //购物车商品数量
    function sc_car(){
		var cookieStr = $.cookie("goods");
		var arr = eval(cookieStr);
		var sum = 0; //用于累加的和
		for(var i in arr){
			sum += Number(arr[i].num)
		}
		// alert(sum);

		$(".total_num_two").html(sum);
	}
	sc_msg();
	
	//加载购物车详情列表
	function sc_msg(){
		$.ajax({
			url: "data2.json",
			type: "GET",
			success: function(res){

				var arr = eval($.cookie("goods")); //id num
				if(!arr){
					return;
				}
				var html = "";
				var total = 0;

				for(var i = 0 ;i < arr.length ;i++){
					total += parseInt(arr[i].num) * parseInt(res[arr[i].id].price);
				}
				//单例实现框内总额
				if($(".singleton_span_four")){
					$(".singleton_span_four").html(total);
				}
				

				for(var i = 0; i < arr.length; i++){
					
					html +=  '<li class = "mini_car"><a href ="#" class = "mini_car_one"> <img src = '+res[arr[i].id].img 
					+' /></a><a href ="#" class = "mini_car_two">'+ res[arr[i].id].title 
					+ '</a><span class = "priceNum_show"><span class = "price_show"><span class ="font_price">￥'+res[arr[i].id].price
					+'</span></span>x<span class = "num_show">'+ arr[i].num +'</span></span><span id = "delete" class ="'+arr[i].id +'">删除</span></li>';
				}
				html += '<li class = "total_show"><p class = "total_num"><span class = "total_num_one">共</span><span class = "total_num_two"></span><span>件商品</span><span class = "total_num_three">合计：￥</span><span class = "total_num_four">'+ total
				+'</span></p><p class = "total_pay"><a href="#">去结算</a></p></li>';


				$(".goods_show").html(html);
			}
		})
	}

	//回到顶部
	$(window).scroll(function(){
		var scrollTop = document.documentElement.scrollTop ||document.body.scrollTop;
		if(scrollTop > 20){
			$(".back_top").css("display","block");
		}else{
			$(".back_top").css("display","none");
		}	
	})
	$(".back_top").click(function(){
		var scrollTop = document.documentElement.scrollTop ||document.body.scrollTop;
		$("html,body").animate({scrollTop:0}, 500);
	})

})