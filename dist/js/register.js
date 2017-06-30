$(function(){
	//注册切换
	$("#register_commen").click(function(){
		$("#commen").css("display","block");
		$("#bussiness").css("display","none");
		isYes = false;
	})
	$("#register_bussiness").click(function(){
		$("#commen").css("display","none");
		$("#bussiness").css("display","block");
	})
	var isYes = false;

	var str = null;
	$(".input_commen").focus(function(){
		str = $(this).attr("placeholder");
		$(this).attr("placeholder","");
	})
	//验证码
	$(".showcode").html(testCode(4));
	$(".showcode").click(function(){
		$(".showcode").html(testCode(4));
	})
	//验证邮箱
	$("#email").blur(function(){
		$(this).attr("placeholder",str);
		var oEmail = $("#email").get(0).value.replace(/\s/ig,"");
		if(!(/^([a-zA-Z0-9_-])+@([a-zA-Z0-9_-])+(.[a-zA-Z0-9_-])+/).test(oEmail)){
			$("#email_error").attr("class","active");
			$("#email_error").html("邮箱格式不正确");
			isYes = false;
		}else{
			$("#email_error").attr("class","");
			$("#email_error").html("&nbsp;");
			isYes = true;
		}
	})
	//手机注册切换
	var count = 0;
	$(".phone_r").click(function(){
		count++;
		if(count % 2 != 0){
			$("#mail_label").html("手机号码");
			$("#email").val("");
			$("#email").attr("placeholder","请输入手机号码");
			$(".phone_r").html("用电子邮箱注册");
			$("#email").blur(function(){
				var oPhone = $("#email").get(0).value.replace(/\s/ig,"");
				if(oPhone.length == 0){
					$("#email_error").attr("class","active");
					$("#email_error").html("请输入手机号码");
					isYes = false;
				}else if(!(/^1[3|4|5|7|8][0-9]{9}$/.test(oPhone))){
					$("#email_error").attr("class","active");
					$("#email_error").html("手机号码格式不正确");
					isYes = false;
				}else{
					$("#email_error").attr("class","");
					$("#email_error").html("&nbsp;");
					isYes = true;
				}
			})
		}else{
			$("#mail_label").html("邮箱");
			$("#email").val("");
			$("#email").attr("placeholder","请输入邮箱");
			$(".phone_r").html("用手机号码注册");
			$("#email").blur(function(){
				var oEmail = $("#email").get(0).value.replace(/\s/ig,"");
				if(!(/^([a-zA-Z0-9_-])+@([a-zA-Z0-9_-])+(.[a-zA-Z0-9_-])+/).test(oEmail)){
					$("#email_error").attr("class","active");
					$("#email_error").html("邮箱格式不正确");
					isYes = false;
				}else{
					$("#email_error").attr("class","");
					$("#email_error").html("&nbsp;");
					isYes = true;
				}
			})
		}
		
	})
	//登录密码
	$("#password_one").blur(function(){
		$(this).attr("placeholder",str);
		var oPassword = $("#password_one").get(0).value.replace(/\s/ig,"");
		if(oPassword.length < 6){
			$("#pass_one_error").attr("class","active");
			$("#pass_one_error").html("密码不能小于6位");
			isYes = false;
		}else if(oPassword.length == 0){
			$("#pass_one_error").attr("class","active");
			$("#pass_one_error").html("密码不能为空");
			isYes = false;
		}else{
			$("#pass_one_error").attr("class","");
			$("#pass_one_error").html("&nbsp;");
			isYes = true;
		}
	})
	//确认密码
	$("#password_two").blur(function(){
		$(this).attr("placeholder",str);
		if($("#password_two").val() != $("#password_one").val()){
			$("#pass_two_error").attr("class","active");
			$("#pass_two_error").html("两次密码不一致");
			isYes = false;
		}else if($("#password_two").get(0).value.length == 0){
			$("#pass_two_error").attr("class","active");
			$("#pass_two_error").html("确认密码不能为空");
			isYes = false;
		}else{
			$("#pass_two_error").attr("class","");
			$("#pass_two_error").html("&nbsp;");
			isYes = true;
		}
	})
	//验证码验证
	$("#code_one").blur(function(){
		$(this).attr("placeholder",str);
		if($("#code_one").val() != $("#showcode").html()){
			$("#code_one_error").attr("class","active");
			$("#code_one_error").html("验证码错误");
			$("#showcode").html(testCode(4));
			isYes = false;
		}else{
			$("#code_one_error").attr("class","");
			$("#code_one_error").html("&nbsp;");
			isYes = true;
		}
	})
	//普通注册
	$("#submit_commen").click(function(){
		if(isYes){
			alert("注册成功");
		}
	})

	//微店主注册
	//手机号码
	$("#phone").blur(function(){
		$(this).attr("placeholder",str);
		var oPhone = $("#phone").get(0).value.replace(/\s/ig,"");
		if(!(/^([a-zA-Z0-9_-])+@([a-zA-Z0-9_-])+(.[a-zA-Z0-9_-])+/).test(oPhone)){
			$("#phone_error").attr("class","active");
			$("#phone_error").html("手机号码不正确");
			isYes = false;
		}else{
			$("#phone_error").attr("class","");
			$("#phone_error").html("&nbsp;");
			isYes = true;
		}
	})
		//验证码验证
	$("#code_two").blur(function(){
		$(this).attr("placeholder",str);
		if($("#code_two").val() != $("#showcode_one").html()){
			$("#code_two_error").attr("class","active");
			$("#code_two_error").html("验证码错误");
			$("#showcode_one").html(testCode(4));
			isYes = false;
		}else{
			$("#code_two_error").attr("class","");
			$("#code_two_error").html("&nbsp;");
			isYes = true;
		}
	})

	//登录密码
	$("#password_three").blur(function(){
		$(this).attr("placeholder",str);
		var oPassword = $("#password_three").get(0).value.replace(/\s/ig,"");
		if(oPassword.length < 6){
			$("#password_three_error").attr("class","active");
			$("#password_three_error").html("密码不能小于6位");
			isYes = false;
		}else if(oPassword.length == 0){
			$("#password_three_error").attr("class","active");
			$("#password_three_error").html("密码不能为空");
			isYes = false;
		}else{
			$("#password_three_error").attr("class","");
			$("#password_three_error").html("&nbsp;");
			isYes = true;
		}
	})
	//确认密码
	$("#password_four").blur(function(){
		$(this).attr("placeholder",str);
		if($("#password_four").val() != $("#password_three").val()){
			$("#password_four_error").attr("class","active");
			$("#password_four_error").html("两次密码不一致");
			isYes = false;
		}else if($("#password_four").get(0).value.length == 0){
			$("#password_four_error").attr("class","active");
			$("#password_four_error").html("确认密码不能为空");
			isYes = false;
		}else{
			$("#password_four_error").attr("class","");
			$("#password_four_error").html("&nbsp;");
			isYes = true;
		}
	})

	//姓名
	$("#name").blur(function(){
		$(this).attr("placeholder",str);
		if($("#name").get(0).value.length == 0){
			$("#name_error").attr("class","active");
			$("#name_error").html("姓名不能为空");
			isYes = false;
		}else{
			$("#name_error").attr("class","");
			$("#name_error").html("&nbsp;");
			isYes = true;
		}
	})
	var sum = 0;
	$("#check1").click(function(){
		sum++;
		if(sum % 2 != 0){
			$("#submit_bussiness").attr("disabled","disabled");
			$("#submit_bussiness").css("background","gray");
		}else{
			$("#submit_bussiness").removeAttr("disabled");
			$("#submit_bussiness").css("background","#005aa9");
		}
	})
	//注册
	$("#submit_bussiness").click(function(){
		if(isYes){
			alert("注册成功");
		}
	})

	




})
//生成验证码
function testCode(n){
	//n 生成几位验证码
	var arr = []; //数组存储验证码
	for(var i = 0; i < n; i++){
		//<1>随机0~100的数
		var tmp = parseInt(Math.random() * 100);
		if(tmp < 10){ //数字
			arr.push(tmp);
		}else if(tmp >= 65 && tmp <= 90){ //大写字母
			var str = String.fromCharCode(tmp);
			arr.push(str);
		}else if(tmp >= 17 && tmp <= 42){ //小写字母
			var str = String.fromCharCode(tmp + 80);
			arr.push(str);
		}else{
			//无效数字
			i--;
		}
	}
	return arr.join("");
}