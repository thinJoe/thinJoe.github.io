$(function(){
	$("#sidebar a").on("click",function(){
		var con=$(this).data("con");
		$("#main-content").load(con+".html")
	})
})

