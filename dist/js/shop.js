define(["jquery-1.10.1.min", "jquery.cookie","shop","index"], function($,cookie,shop,index){
	var shop = function(){
			$.ajax({
			url: "data2.json",
			type: "GET",
			success: function(res){
				var html ="";
				for(var i = 0;i<res[0].children3.length ;i++){//最小图
					html +='<img src = "'+ res[0].children3[i].img +'"  />';
				}
				$(".small_pic_con").html(html);
				html ="";
				for(var i = 0;i<res[0].children2.length;i++){//放大图
					html +='<img src = "'+ res[0].children2[i].img +'" style= "display:'+ res[0].children2[i].display +'" />';
				}
				$("#b_pic").html(html);
				html ="";
				for(var i = 0;i<res[0].children1.length;i++){//小图
					html +='<img src = "'+ res[0].children1[i].img +'" style="display:'+ res[0].children1[i].display +'" />';
				}
				$(".me_pic").html(html);
				html ="";
				for(var i = 0;i<res[0].children2.length;i++){
					html += '<img src = "'+ res[0].children2[i].img +'"  />';
				}
				$(".show_pic_ul").html(html);

				//详细信息
				html ="";
				html +='<p class = "p_one">'+res[0].type 
				+'</p><p class = "p_two">'+ res[0].detail
				+'</p><p class = "p_three">'+ res[0].info
				+'</p><ul class = "shop_ul_info"><li><span>商城价：</span><span class = "info_span_one">￥'+ res[0].price
				+'</span></li><li><span>已售出：</span><span class = "info_span_two">'+ res[0].sale
				+'</span></li><li><span>客户评价：</span><span class = "star"></span><span class = "info_span_three">'+ res[0].star
				+'</span><span>(共有<span class = "info_span_three">'+ res[0].comment
				+'</span>条评价)</span></li><li><span>服务承诺：</span><span>送货入户（违约赔付100元），送装同步</span><a class = "info_span_four">在线客服</a></li></ul><div class = "buy_info"><p> <span>配送至:</span><span class = "info_buy_one">请选择地区</span><span class = "info_buy_two">   &nbsp; (请选择配送区域) &nbsp;   预计25-27天送达</span></p><p class = "info_p"><span>我要买：</span><span><span class = "c_but"><span class = "info_buy_three">-</span><input type="text" value="1" class = "num_buy"/><span class = "info_buy_four">+</span></span></span></p><p>分期付：<span class = "info_buy_five">花呗 | 建行信用卡分期	</span></p><p><a href = "#" class = "pay_button">立即购买</a><a href = "#" class = "buy_button" id = "'+ res[0].id
				+'">加入购物车</a></p><p class="last_p">海尔商城作为全国首批电子发票试点网上商城，于2014年3月31日起全面推行电子发票</p></div>';
				$(".shop_info").html(html);
				//商品介绍
				html = "";
				for(var i =0;i<res[0].children4.length;i++){
					html += '<a href="'+ res[0].children4[i].href +'"><img src = "'+ res[0].children4[i].img +'" /></a>';
				}
				$(".intro_pic").html(html);
				html = "";
				html += '<embed class = "video" type = "application/x-shockwave-flash" src="'+ res[0].src+'" allowfullscreen="true"  quality="high" allowscriptaccess="always" flashvars="uu=fb7b745c6e&vu=f939819ec2&auto_play=1&gpcflag=1&width=640&height=360" width="640" height="360" align="middle" >'; 
				for(var i = 0;i<res[0].children5.length;i++){
					html += '<img src="'+ res[0].children5[i].img+'" alt="'+ res[0].children5[i].alt+'">';
				}
				$(".intro_pic_two").html(html);
				// 规格参数
				html ="";
				for(var i = 0 ;i < res[0].type_num.length ;i++){
					html += '<tr><th>'+ res[0].type_num[i].type+'</th><td>'+ res[0].type_num[i].info+'</td></tr>';
				}
				$(".type_goods tbody").html(html);
			}
		})



		$(".shopping_sort").hover(function(){
			$(".aside").stop().animate({top:0},500);
		},function(){
			$(".aside").stop().animate({top:-425},500);
		})

		$(".aside").hover(function(){
			$(".aside").stop().animate({top:0},500);
		},function(){
			$(".aside").stop().animate({top:-425},500);
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
				$(".intro_menu").css("position","fixed").css("top","0").css("right","212px");
				$(".feature").css("marginTop","40px");
				$(".buy_button_two").css("display","block");
			}else{
				$(".intro_menu").css("position","static");
				$(".feature").css("marginTop","0");
				$(".buy_button_two").css("display","none");
			}
		})
		//购物车显示
		$(".buy_button_two").hover(function(){
			$(".intro_goods_show").css("display","block");
		},function(){
			$(".intro_goods_show").css("display","none");
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

	    $(window).scroll(function(){
	    	var scrollTop = document.documentElement.scrollTop ||document.body.scrollTop;
	    	$(".body_mask").css("top",scrollTop  + "px");
	    	$(".body_pic_show").css("top", scrollTop + document.documentElement.clientHeight * 0.5 + "px");
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
	}

	return {
		shop: shop
	}
})