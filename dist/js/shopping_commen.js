$(function(){
	//左侧滑动栏
	$(".left_title").hover(function(){
		$(".aside").css("display","block");
		$("#mask_pic").css("zIndex","2");
	},function(){
		$(".aside").css("display","none");
		$("#mask_pic").css("zIndex","9");
	})

	$(".aside").hover(function(){
		$(".aside").css("display","block");
		$("#mask_pic").css("zIndex","2");
	},function(){
		$(".aside").css("display","none");
		$("#mask_pic").css("zIndex","9");
	})	
	$(".tab_commen").hover(function(){
		$(".aside_ul li").eq($(this).index() ).css("backgroundColor","white");
		$(".aside_ul li").eq($(this).index() ).find("a").css("color","#606060");
		$(".aside").css("display","block");
		$("#mask_pic").css("zIndex","2");
		$(this).css("display","block");
		$(this).stop().animate({width:$(this).find(".c_content").css("width")});
	},function(){
		$(".aside_ul li").eq($(this).index() ).css("backgroundColor","rgba(0,0,0,0)");
		$(".aside_ul li").eq($(this).index() ).find("a").css("color","white");
		$(".aside").css("display","none");
		$("#mask_pic").css("zIndex","9");
		$(this).css("display","none");
		$(this).css("width","0px");
	})



	//商品介绍等切换
	$(".intro_menu_con").on("click","li",function(){
		$(".intro_commen").css("display","none");
		$(".intro_commen").eq($(this).index()).css("display","block");

		$(this).css("backgroundColor","white").css("color","black");
		$(this).siblings().css("backgroundColor","#b7b6bb").css("color","white");
	})

	//页面滚动
	$(window).on("scroll",function(){
		var scrollTop = document.documentElement.scrollTop ||document.body.scrollTop;
		if(scrollTop > 780){
			$(".intro_menu").css("position","fixed").css("top","0").css("right",document.documentElement.clientWidth - $(".intro_menu").offset().left -798 + "px");
			$(".feature").css("marginTop","40px");
			$(".buy_button_two").css("display","block");
		}else{
			$(".intro_menu").css("position","static");
			$(".feature").css("marginTop","0");
			$(".buy_button_two").css("display","none");
		}
		//查看大图以及遮罩层跟随滚动
		$(".body_mask").css("top",scrollTop  + "px");
    	$(".body_pic_show").css("top", scrollTop + document.documentElement.clientHeight * 0.5 + "px");

    	//单例实现的窗口随着滚动
    	$("#singleton_buy").css("top",scrollTop + document.documentElement.clientHeight * 0.5 + "px")

	})
	//滑动栏购物车显示
	$(".buy_button_two").hover(function(){
		$(".intro_goods_show").css("display","block");
	},function(){
		$(".intro_goods_show").css("display","none");
	})
	//滑动购物车购买
	$(".buy_button_two").click(function(){
		//将尚未添加商品的p标签隐藏
    	$(".shop_car_p").css("display","none");
    	//判断此前是否存过cookie
    	var first = $.cookie("goods") == null ? true :false;
    	if(first){
    		$.cookie("goods",'[{id:' + $(".buy_button").attr("id") + ',num:' + $(".num_buy").val() + '}]',{expires:7});
    	}else{
    		//将cookie取出
    		var cookieStr = $.cookie("goods");
    		var arr = eval(cookieStr);
    		//判断之前是否存储过
    		var isYes = false;
    		for(var i in arr){

				if(arr[i].id == $(".buy_button").attr("id")){
					arr[i].num = parseInt(arr[i].num) + parseInt($(".num_buy").val());
					isYes = true;
				}
			}
    		//没有存储过
    		if(!isYes){
    			var obj = {id: $(".buy_button").attr("id"), num: $(".num_buy").val()}
    			arr.push(obj);
    		}

    		$.cookie("goods", JSON.stringify(arr), {expires: 7});
    	}
    	sc_msg();
	})
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
	//使用单例弹出框
	$(".buy_button_two").click(function(){
		button_commen();
	})


	// 放大镜
	$("#mask_pic").mouseover(function(){
		$("#position_pic").css("display","block");
		$(".scale").css("display","block");
	})
	$("#mask_pic").mouseout(function(){
		$("#position_pic").css("display","none");
		$(".scale").css("display","none");
	})
	$("#mask_pic").on("mousemove" ,function(ev){
		
		var left = ev.offsetX - $("#position_pic").width()/2;
		var top = ev.offsetY - $("#position_pic").height()/2;
		if(left < 0){
			left = 0;
		}else if(left > $("#mask_pic").width() - $("#position_pic").width()){
			left = $("#mask_pic").width() - $("#position_pic").width();
		}
		if(top < 0){
			top = 0;
		}else if(top > $("#mask_pic").height() - $("#position_pic").height()){
			top = $("#mask_pic").height() - $("#position_pic").height();
		}

		$("#position_pic").css("left",left + "px");
		$("#position_pic").css("top",top + "px");

		var scaleX = left/($(".shop_pic_one").width() - $("#position_pic").width());
		var scaleY = top/($(".shop_pic_one").height() - $("#position_pic").height())

		var X = scaleX * ($("#b_pic").width() - $(".scale").width());
		var Y = scaleY * ($("#b_pic").width() - $(".scale").width());

		$("#b_pic").css("left",-X + "px");
		$("#b_pic").css("top",-Y + "px");

	})

	// 商品左右滑动轮播
	$(".icon_left_one").click(function(){
		if(parseInt($(".small_pic_con").css("left")) == 0){
			$(".small_pic_con").css("left",0);
		}else{
			$(".small_pic_con").css("left",parseInt($(".small_pic_con").css("left")) + 325 + "px");
		}
		
	})
	$(".icon_right_one").click(function(){
		if(Math.abs((parseInt($(".small_pic_con").css("left")) - 325)) == $(".small_pic_con").find("img").size()*65){
			$(".small_pic_con").css("left",-($(".small_pic_con").find("img").size()*65) +325 + "px");
		}else{
			$(".small_pic_con").css("left",parseInt($(".small_pic_con").css("left")) - 325 + "px");
		}
	})

	//未滑动前图片为第一张
	// $(".show_num").html("1/" + $(".show_pic_ul").find("img").size());
	//滑过图片 框内显示对应图片
	$(".small_pic_con").on("mouseover mouseout","img",function(event){
		
		if(event.type == "mouseover"){
			$(this).css("border","1px solid #ddd");
			$(".shop_pic_one").find("img").css("display","none");
			$(".shop_pic_one").find("img").eq($(this).index()).css("display","block");
			$("#b_pic").find("img").css("display","none");
			$("#b_pic").find("img").eq($(this).index()).css("display","block");

			//查看图片大图也跟着动
			$(".show_num").html(($(this).index() + 1) + "/" + $(".show_pic_ul").find("img").size());
			//图片数量位置显示
			iNow = ($(this).index() );
			$(".show_pic_ul").css("left", -$(this).index() *750 + "px");


		}else if(event.type = "mouseout"){
			$(this).css("border","none");
		}
	})

	//大图切换
	
	//左箭头
	var iNow = 0;
	$("#icon_left_last").on("click",function(){
		// alert($(".show_pic_ul").find("img").size());
		if(Math.abs(iNow) == 0){
			$(".show_pic_ul").css("left",-$(".show_pic_ul").find("img").size()*750 + 750 +"px");
			iNow = $(".show_pic_ul").find("img").size() ;
		}else{
			$(".show_pic_ul").css("left",parseInt($(".show_pic_ul").css("left")) + 750 + "px");
		}
		//图片数量位置显示
		$(".show_num").html(iNow + "/" + $(".show_pic_ul").find("img").size());
		iNow--;

		

	})
	//右箭头
	$("#icon_right_last").on("click",function(){
		if(Math.abs(iNow) == $(".show_pic_ul").find("img").size()- 1 ){
			$(".show_pic_ul").css("left",0);
			iNow = -1;
		}else{
			$(".show_pic_ul").css("left",parseInt($(".show_pic_ul").css("left")) - 750 + "px");
		}
		
		//图片数量位置显示
		iNow++;
		$(".show_num").html((iNow + 1 )+ "/" + $(".show_pic_ul").find("img").size());
	})
	// 左右箭头滑动效果
	$("#icon_left_last").hover(function(){
		$(this).css("backgroundColor","#d71249").css("color","white");
	},function(){
		$(this).css("backgroundColor","#bb1e4a").css("color","#dbdbdb");
	})
	$("#icon_right_last").hover(function(){
		$(this).css("backgroundColor","#d71249").css("color","white");
	},function(){
		$(this).css("backgroundColor","#bb1e4a").css("color","#dbdbdb");
	})


    //关闭遮罩等
    $(".close").click(function(){
    	$(".body_mask").css("display","none");
    	$(".body_pic_show").css("display","none");
    })
    //开启遮罩层等
    $(".error_pic").click(function(){
    	$(".body_mask").css("display","block");
    	$(".body_pic_show").css("display","block");
    })

    //购物车代码
    //购物数量
    $(".shop_info").on("click",".info_buy_three",function(){
    	
    	if(parseInt($(".num_buy").val()) <= 1 ){
    		$(".num_buy").attr("value",1);
    	}else{
    		$(".num_buy").attr("value",parseInt($(".num_buy").val()) - 1);
    	}
    })
    $(".shop_info").on("click",".info_buy_four",function(){
    
    		$(".num_buy").attr("value",parseInt($(".num_buy").val()) + 1);
    	
    })


    //单例实现购物车购买弹出框
    
     $(".shop_info").on("click",".buy_button",function(){
    	button_commen();
    })

     function button_commen(){
     	singleton();
    	$("#singleton_buy").css("display","block");
    	$(".body_mask").css("display","block");
    	$(".singleton_span_two").click(function(){
    		$("#singleton_buy").css("display","none");
    		$(".body_mask").css("display","none");
    	})

    	//单例实现框中的商品数量统计 		
    	if($(".singleton_span_three")){
    		var cookieStr = $.cookie("goods");
    		var arr = eval(cookieStr);
    		$(".singleton_span_three").html(arr.length);
    	}
    	//继续购物
    	$(".singleton_a_one").click(function(){
    		$("#singleton_buy").css("display","none");
    		$(".body_mask").css("display","none");
    	})
     }
    var singleton =(function(){
    	var oDiv = null;
    	var html ="";
    	var createDiv = function(){
    		if(!oDiv){
    			oDiv = document.createElement("div");
    			oDiv.id = "singleton_buy";
    			html += '<div class = "singleton_one"><span class= "singleton_span_one">加入购物车成功</span><span class= "singleton_span_two">X</span></div><div class = "singleton_two"><p>购物车共<span class= "singleton_span_three">1</span>种商品合计：￥<span class= "singleton_span_four">4299.00</span>。</p><p><a href="#" class = "singleton_a_one">继续购物</a><a href="#" class = "singleton_a_two">去购物车结算</a></p></div>';
    			document.body.appendChild(oDiv);
    			$("#singleton_buy").html(html);
    		}
    	}
    	return createDiv;
    })();




})