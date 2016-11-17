$(document).ready(function() {

	$(".commodit>div:eq(0)>div").click(function() {
		$(this).addClass("commoditTianJia").siblings().removeClass("commoditTianJia");
		if($(this).index() == 1) {
			$(".commodit>div:eq(1)").hide();
			$(".commodit>div:eq(2)").show();
		} else {
			$(".commodit>div:eq(2)").hide();
			$(".commodit>div:eq(1)").show();
		}
	});
	$(".choose button").click(function() {
		if($(this).siblings().length > 1) {
			$(this).addClass("buttonTianJia").siblings().removeClass("buttonTianJia")
		}
	});

	$(".showOne").click(function() {
		$("#popup").show();
		$("#popup>div:eq(0)").show().siblings().hide();
	});
	$(".showTwo").click(function() {
		$("#popup").show();
		$("#popup>div:eq(1)").show().siblings().hide();
	});
	$(".hideOne").click(function() {
		$("#popup").hide();
	});
	$(".hideTwo").click(function() {
		$("#popup").hide();
	})
	//点击任何一处关闭
	$("#popup").click(function() {
		$("#popup").hide();
	});
	$(".popup").click(function(event) {
		event.stopPropagation();
	});
	//收藏商品
	$(".colle-commodity").click(function(){
		if ($(this).is(".icon-49 ")==true) {
			$(this).removeClass("icon-49 f-blue ").addClass("icon-48 fb-color");
		} else{
			$(this).removeClass("icon-48 fb-color").addClass("icon-49 f-blue");
		}
	});
	//收藏店铺
	$(".button-padding").click(function(){
		$(this).parent().text("已收藏").addClass("f-gray")
	});
})