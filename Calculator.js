$(document).ready(function(){
$("button").not("#equal,#clear").click(function(){
$("div").css("color","black");
if($("div").text()=="ERROR")
$("div").text("");
var title=$(this).text();
if(title=="+"||title=="-"||title=="*"||title=="/")
$(".opt").prop("disabled",true);
else
$(".opt").prop("disabled",false);
	$("div").append(title);
});
$("#equal").click(function(){
$(".opt").prop("disabled",false);
$("div").css("color","green");
	var str=$("div").text();
	var n=str.length;
	if(str[0]=='*'||str[0]=='/'||str[n-1]=="+"||str[n-1]=="-"||str[n-1]=="*"||str[n-1]=="/"){
		$("div").css("color","red");
		$("div").text("ERROR");
		return
	}
	for(var i=0;i<str.length;i++){
		var k=str[i+1];
		if(k==str[i]&&(k=='+'||k=='-'||k=='*'||k=='/')){
			$("div").css("color","red");
			$("div").text("ERROR");
			return;
		}
	}
	var a=eval(str);
	if(a=="Infinity"||a=="-Infinity"){
	$("div").css("color","red");
	$("div").text("ERROR");
	}
	else
	$("div").text(a);
});
$("#clear").click(function(){
$(".opt").prop("disabled",false);
	$("div").text("");
});
});