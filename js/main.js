var bg_width;
var bg_height;
var button_width;
var button_height;
$(document).ready(function()
{
	//$("#main").css({"background-image":"url(./images/background.jpg)","background-position": "center"});
	//$("#friendWindow").css("display","none");

	var img = new Image();
	img.src = "images/background.jpg";
	img.onload = function()
	{
		bg_width = img.width;
		bg_height = img.height;
		img = null;
		var button = new Image();
		button.src = "images/btn_download_Andriod.png";
		button.onload = function()
		{
			button_width = button.width;
			button_height = button.height;
			button = null;
			//font();
			resizeDiv();
		}
	}
	$(window).resize(function()
	{
	 //   	font();
		resizeDiv();
	});
});
window.addEventListener("orientationchange", function() {
	if(window.orientation==90 || window.orientation==270){
		$("#main").css({"min-height":$("#main").width()*1.2+"px"})
	}else{
		$("#main").css({"min-height":"auto"});
	}

}, false);

function resizeDiv()
{
	var width = $(window).width();
	var height = $(window).height();
	if (width / height >= bg_width / bg_height)
	{

		$("#main").attr("style", "background-size: 100% auto");//.height($("#main").width() * bg_height / bg_width + "px");
		$(".bt").width(button_width * width  / bg_width + "px").height(button_height * width  / bg_width  + "px");
	}
	else
	{
		$("#main").attr("style", "background-size: auto 100%");
		$(".bt").width(button_width * height / bg_height + "px").height(button_height * height / bg_height + "px");
	}
	
	if($(".main").height()>$(window).height()){
		$(".slogan-0").css("bottom",($(".main").height()-$(window).height())*1+30+"px");
	}
	
	
	//$("#main").css({"background-image":"url(./images/background.jpg)","background-position": "center"});
	//$("#friendWindow").css("display","none");
    //$("#button").css("visibility","visible");
	$("#button").removeClass("hidden");
	$("#button").css({"bottom":$(".slogan-0").css("bottom").replace("px","")*1+$(".slogan-0").height()*1+"px"});
	
	// if($("#button").css("bottom").replace("px","")*1+$("#button").height()>$(window).height()){
		// $(".slogan-0").css("bottom","0");
		// $("#button").css({"bottom":$(".slogan-0").css("bottom").replace("px","")*1+$(".slogan-0").height()*1+"px"});
	// }
	setTimeout(function(){
		if($("#button").offset().top<610){
		$(".slogan-0").css("bottom","-50px");
		$("#button").css({"bottom":$(".slogan-0").css("bottom").replace("px","")*1+$(".slogan-0").height()*1+"px"});
	}else{
		$(".slogan-0").css("bottom","25px");
		$("#button").css({"bottom":$(".slogan-0").css("bottom").replace("px","")*1+$(".slogan-0").height()*1+"px"});
	}
	},100)
		if(window.orientation=="90" || window.orientation=="-90"){
		$("#main").css({"min-height":$("#main").width()*1.2+"px"})
	}else{
		$("#main").css({"min-height":"auto"});
	}
}

function font()
{
	var width = $(window).width();
	var height = $(window).height();
	if (width <= 240 || height <= 240)
		$(".text").attr("style", "font-size:12px");
	else if (width <= 480 || height <= 480)
		$(".text").attr("style", "font-size:14px");
	else if (width <= 600 || height <= 600)
		$(".text").attr("style", "font-size:16px");
	else if (width <= 768 || height <= 768)
		$(".text").attr("style", "font-size:18px");
	else if (width <= 960 || height <= 960)
		$(".text").attr("style", "font-size:20px");
	else if (width <= 1050 || height <= 1050)
		$(".text").attr("style", "font-size:22px");
	else
		$(".text").attr("style", "font-size:24px");
	//$("#main").css({"background-image":"url(./images/background.jpg)","background-position": "center"});
	//$("#friendWindow").css("display","none");

}
function GetQueryString(name)
{
	var reg = new RegExp("(^|&)"+ name +"=([^&]*)(&|$)");
	var r = window.location.search.substr(1).match(reg);
	if(r!=null)return  unescape(r[2]); return null;
}

function showOver()
{
	var ua = navigator.userAgent.toLowerCase();
	if (ua.toString().indexOf("micromessenger") != -1)
	{

		document.getElementById('popWindow').style.display = 'block';
	}
	else
	{

	//var linkAddress = "http://test.gymj.331wan.com/download/" + GetQueryString("qid") +"/gymj.apk";
	//var linkAddress = "http://mj.51uban.com/api/v3.0/share/download/channel?X-Lvan-App-Key="+GetQueryString("X-Lvan-App-Key")+"&X-Lvan-Channel="+GetQueryString("X-Lvan-Channel") +"&X-Lvan-Platform=1";
    var linkAddress = "http://a.app.qq.com/o/simple.jsp?pkgname=com.iwgame.zzmj&android_schema='myApp://'";
				window.location = linkAddress;

				$.get("android", function() {});

	}
}

function showOver2()
{
	var ua = navigator.userAgent.toLowerCase();
	if (ua.toString().indexOf("micromessenger") != -1)
	{
		document.getElementById('popWindow').style.display = 'block';
	}
	else
	{
		var linkAddress = "http://123.207.172.12/download/123.apk";

				window.location = linkAddress;
				$.get("ios", function() {});
	}
}

function hideOver()
{
	document.getElementById('popWindow').style.display = 'none';
}

function getQueryString(name)
{
	var reg = new RegExp("(^|&)" + name + "=([^&]*)(&|$)", "i");
	var r = window.location.search.substr(1).match(reg);
	if (r != null)
		return unescape(r[2]);
	return null;
}
