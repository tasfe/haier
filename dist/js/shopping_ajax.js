$(function(){
	ajax(0);
	function ajax(snum){
		$.ajax({
		url: "data2.json",
		type: "GET",
		success: function(res){
			var html ="";
			for(var i = 0;i<res[snum].children3.length ;i++){//最小图
				html +='<img src = "'+ res[snum].children3[i].img +'"  />';
			}
			$(".small_pic_con").html(html);
			html ="";
			for(var i = 0;i<res[snum].children2.length;i++){//放大图
				html +='<img src = "'+ res[snum].children2[i].img +'" style= "display:'+ res[snum].children2[i].display +'" />';
			}
			$("#b_pic").html(html);
			html ="";
			for(var i = 0;i<res[snum].children1.length;i++){//小图
				html +='<img src = "'+ res[snum].children1[i].img +'" style="display:'+ res[snum].children1[i].display +'" />';
			}
			$(".me_pic").html(html);
			html ="";
			for(var i = 0;i<res[snum].children2.length;i++){
				html += '<img src = "'+ res[snum].children2[i].img +'"  />';
			}
			$(".show_pic_ul").html(html);

			//详细信息
			html ="";
			html +='<p class = "p_one">'+res[snum].type 
			+'</p><p class = "p_two">'+ res[snum].detail
			+'</p><p class = "p_three">'+ res[snum].info
			+'</p><ul class = "shop_ul_info"><li><span>商城价：</span><span class = "info_span_one">￥'+ res[snum].price
			+'</span></li><li><span>已售出：</span><span class = "info_span_two">'+ res[snum].sale
			+'</span></li><li><span>客户评价：</span><span class = "star"></span><span class = "info_span_three">'+ res[snum].star
			+'</span><span>(共有<span class = "info_span_three">'+ res[snum].comment
			+'</span>条评价)</span></li><li><span>服务承诺：</span><span>送货入户（违约赔付100元），送装同步</span><a class = "info_span_four">在线客服</a></li></ul><div class = "buy_info"><p> <span>配送至:</span><span class = "info_buy_one">请选择地区</span><span class = "info_buy_two">   &nbsp; (请选择配送区域) &nbsp;   预计25-27天送达</span></p><p class = "info_p"><span>我要买：</span><span><span class = "c_but"><span class = "info_buy_three">-</span><input type="text" value="1" class = "num_buy"/><span class = "info_buy_four">+</span></span></span></p><p>分期付：<span class = "info_buy_five">花呗 | 建行信用卡分期	</span></p><p><a href = "#" class = "pay_button">立即购买</a><a href = "#" class = "buy_button" id = "'+ res[snum].id
			+'">加入购物车</a></p><p class="last_p">海尔商城作为全国首批电子发票试点网上商城，于2014年3月31日起全面推行电子发票</p></div>';
			$(".shop_info").html(html);
			//商品介绍
			html = "";
			for(var i =0;i<res[snum].children4.length;i++){
				html += '<a href="'+ res[snum].children4[i].href +'"><img src = "'+ res[snum].children4[i].img +'" /></a>';
			}
			$(".intro_pic").html(html);
			html = "";
			html += '<embed class = "video" type = "application/x-shockwave-flash" src="'+ res[snum].src+'" allowfullscreen="true"  quality="high" allowscriptaccess="always" flashvars="uu=fb7b745c6e&vu=f939819ec2&auto_play=1&gpcflag=1&width=640&height=360" width="640" height="360" align="middle" >'; 
			for(var i = 0;i<res[snum].children5.length;i++){
				html += '<img src="'+ res[snum].children5[i].img+'" alt="'+ res[snum].children5[i].alt+'">';
			}
			$(".intro_pic_two").html(html);
			// 规格参数
			html ="";
			for(var i = 0 ;i < res[snum].type_num.length ;i++){
				html += '<tr><th>'+ res[snum].type_num[i].type+'</th><td>'+ res[snum].type_num[i].info+'</td></tr>';
			}
			$(".type_goods tbody").html(html);
			html ="";
			html += '<div class = "enter">您现在的位置是：<a href = "index.html">首页 > </a><a href="#">冰箱 > </a><span>'+res[snum].title +'</span> </div>';
			$(".shop_main_con").html(html);
		}
	})
	}
})