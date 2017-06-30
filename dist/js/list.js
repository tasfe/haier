
$(function(){
	// ajax进行数据加载
	$.ajax({
		url:"data3.json",
		type:"GET",
		success:function(res){
			// console.log(res[0].children[0][0].title);
			var html = null;
			for(var i = 0; i<res[0].children.length;i++){
				html = "";
				for(var j = 0; j<res[0].children[0].length;j++){
					html += '<li class = "two_right_li"><a href="#" class="two_right_img"><img src = "'+ res[0].children[i][j].img
					+'"  /></a><h4 class = "two_right_h"><a href="#" class = "two_right_a commen_right_a active_right_aa">'+ res[0].children[i][j].info
					+'</a><p class ="two_span_one">'+res[0].children[i][j].title+'</p><p class ="two_span_two">'+res[0].children[i][j].type
					+'</p><p class = "two_right_p">抢购价：<span class ="two_span_three">'+res[0].children[i][j].price+'</span></p></h4></li>';
					
					$(".two_right_pic").find("ul").eq(i).html(html);
				}
			}
			for(var i = 0; i<res[0].children.length;i++){
				html = "";
				for(var j = 0; j<res[0].children[0].length;j++){
					html += '<li class = "three_right_li"><a href="#" class="three_right_img"><img src = "'+ res[0].children[i][j].img
					+'"  /></a><h4 class = "three_right_h"><a href="#" class = "three_right_a commen_right_a active_right_aa">'+ res[0].children[i][j].info
					+'</a><p class ="three_span_one">'+res[0].children[i][j].title+'</p><p class ="three_span_three">'+res[0].children[i][j].type
					+'</p><p class = "three_right_p">抢购价：<span class ="three_span_four">'+res[0].children[i][j].price+'</span></p></h4></li>';
					
					$(".three_right_pic").find("ul").eq(i).html(html);
				}
			}
			for(var i = 0; i<res[0].children.length;i++){
				html = "";
				for(var j = 0; j<res[0].children[0].length;j++){
					html += '<li class = "four_right_li"><a href="#" class="four_right_img"><img src = "'+ res[0].children[i][j].img
					+'"  /></a><h4 class = "four_right_h"><a href="#" class = "four_right_a commen_right_a active_right_aa">'+ res[0].children[i][j].info
					+'</a><p class ="four_span_one">'+res[0].children[i][j].title+'</p><p class ="four_span_four">'+res[0].children[i][j].type
					+'</p><p class = "four_right_p">抢购价：<span class ="four_span_five">'+res[0].children[i][j].price+'</span></p></h4></li>';
					
					$(".four_right_pic").find("ul").eq(i).html(html);
				}
			}



		}
	})


	//左侧伸缩栏的z-index问题
	$(".sort_left_aside").hover(function(){
		$(".list_one_left").css("zIndex","1");
	},function(){
		$(".list_one_left").css("zIndex","9");
	})

	//图片轮播
	var timer = null;
	var count = 0;
	timer = setInterval(function(){
		$(".right_pic").find("img").stop().animate({opacity:0.5},200).css("display","none");
		count++;
		$(".right_ul").find("li").css("backgroundColor","#606060");
		$(".right_ul").find("li").eq(count % 4).css("backgroundColor","#f87d2d");
		
		$(".right_pic").find("img").eq(count % 4).animate({opacity:1}).css("display","block");

	},4000);

	// 点击到达对应图片
	$(".right_ul").on("click","li",function(){
		$(this).siblings().css("backgroundColor","#606060");
		$(this).css("backgroundColor","#f87d2d");
		$(".right_pic").find("img").stop().animate({opacity:0.5},200).css("display","none");
		$(".right_pic").find("img").eq($(this).index()).animate({opacity:1}).css("display","block")
	})
	//滑过a标签状态
	$(".right_pic_commen").on("mouseover mouseout","ul",function(enent){
		if(event.type == "mouseover"){
			$(this).on("mouseover mouseout","li",function(event){
				if(event.type == "mouseover"){
					$(this).find(".commen_right_a").removeClass("active_right_aa");
				}else if(event.type == "mouseout"){
					$(this).find(".commen_right_a").addClass("active_right_aa");
				}
			})
			// $(".two_right_pic ul").find("li").eq($(this).index()).find(".two_right_a").removeClass("active_two_right_a");
		}else if(event.type == "mouseout"){
			
		}
	})

	//滑过切换列表
	$(".right_title_commen").on("mouseover mouseout",".right_title_span",function(event){
		if(event.type == "mouseover"){
			$(this).parents(".list_commen").find(".right_pic_commen").find("ul").css("display","none");
			$(this).parents(".list_commen").find(".right_pic_commen").find("ul").eq($(this).index()).css("display","block");
			$(this).parents(".right_title_commen").find("span").removeClass("right_commen_title_active");
			$(this).addClass("right_commen_title_active");

		}else if(event.type == "mouseout"){
			
		}
	})

	//input框获取与失去焦点placeholder的变化
	var str = null;
	$("input").focus(function(){
		str = $(this).attr("placeholder");
		$(this).attr("placeholder","");
	})
	$("input").blur(function(){
		$(this).attr("placeholder",str);
	})




})













