$(function(){
	$("#commen").click(function(){
		$("#commen_body").css("display","block");
		$("#commen").attr("class","active");
		$("#phone").attr("class","con");
		$("#phone_body").css("display","none");
	});
	$("#phone").click(function(){
		$("#commen_body").css("display","none");
		$("#phone_body").css("display","block");
		$("#phone").attr("class","active");
		$("#commen").attr("class","con");
	});

	// $(".input_commen").foucs(function(){
	// 	alert(1);
	// })
	// $(".input_commen").blur(function(){
	// 	alert(2);
	// })
	var str = null;
	$(".input_commen").focus(function(){
		str = $(this).attr("placeholder");
		$(this).attr("placeholder","");
	})
	//输入信息判断
	//用户名
	var isYeas = true;
	$("#username").blur(function(){
		$(this).attr("placeholder",str);
		var oUser = $("#username").get(0).value.replace(/\s/ig,"");
		if(oUser.length == 0){
			$("#user_error").html("请输入登录名");
			isYeas = false;
		}else{
			$("#user_error").html("&nbsp");
			isYeas = true;
		}
	});
	//密码
	$("#password").blur(function(){
		$(this).attr("placeholder",str);
		var oPass = $("#password").get(0).value.replace(/\s/ig,"");
		if(oPass.length < 6){
			$("#pass_error").html("密码不能小于6位");
			isYeas = false;
		}else{
			$("#pass_error").html("&nbsp");
			isYeas = true;
		}
	})
	//手机号
	$("#user_phone").blur(function(){
		$(this).attr("placeholder",str);
		var oPhone = $("#user_phone").get(0).value.replace(/\s/ig,"");
		if(oPhone.length == 0){
			$("#userphone_error").html("请输入手机号");
			isYeas = false;
		}else if(!(/^1[3|4|5|7|8][0-9]{9}$/.test(oPhone))){
			$("#userphone_error").html("请输入正确的手机号");
			isYeas = false;
		}else{
			$("#userphone_error").html("&nbsp");
			isYeas = true;
		}
	})
	//验证码
	$("#code").blur(function(){
		$(this).attr("placeholder",str);
		var oCode = $("#code").get(0).value.replace(/\s/ig,"");
		if(oCode.length == 0){
			$("#code_error").html("请输入验证码");
			isYeas = false;
		}else{
			$("#code_error").html("&nbsp");
			isYeas = true;
		}
	})
	//用户名密码cookie缓存
	if($.cookie("username")){
		alert("登录成功");
	}
	//登录按钮进行cookie缓存
	
	$("#submit_commen").click(function(){
		if(isYeas){
			$.cookie($("#username").attr("name"),$("#username").get(0).value);
			$.cookie($("#password").attr("name"),$("#password").get(0).value);
		}else{
			alert("请正确填写信息");
		}
	})
	
})	