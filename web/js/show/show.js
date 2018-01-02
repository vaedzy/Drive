// JavaScript Document
$(function(){
	var nav_flag=false; //true为展开  false为关闭
	var second_flag=true;
	$("html").bind("click",function(){
		if(second_flag){
			$(".nav_second").css("display","none");
		}
	});
	
	$("#nav_btn").bind("click",function(){
		$("#nav").stop(true);
		$(".nav_second").css("display","none");
		if(nav_flag){
			nav_flag=false;
			$("#nav").animate({"opacity":"0","width":"0px","height":"0px","top":"30px","left":"30px"},350,function(){
				$("#nav").css({"opacity":"0","width":"0px","height":"0px","top":"30px","left":"30px","display":"block"});
			});
		}else{
			$("#nav").css("display","block");
			$("#nav").animate({"opacity":"1","width":"200px","height":"250px","top":"-220px","left":"-170px"},350,function(){
				$("#nav").css({"opacity":"1","width":"200px","height":"250px","top":"-220px","left":"-170px"});
				nav_flag=true;
			});
		}
	});


    $("#userlog").click(function () {
        window.location.href="/toLogin"
    });

    $("#logout").click(function () {
        window.location.href="/logout"
    });


	$("#search_btn").bind("click",function(){
		$.ajax({
			url:"",
			type:"post",
			dataType:"text",
			data:"search="+$("#search").val(),
			success:function(data){
					
			}
		})
			
	});

	
})