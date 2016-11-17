$(document).ready(function() {
	//资料修改保存
	$("#showTooltips").click(function() {
			alert1()
	});
	//当输入框获得焦点时，隐藏底部导航栏
	$(".bodyMarginTop form div.weui_cell input").focus(function(){
		$(".weui_tab").hide();
	})
	$(".bodyMarginTop form div.weui_cell input").blur(function(){
		$(".weui_tab").show()
	})
	//弹出框取消修改按钮
	$(".weui_dialog_ft a.default").click(function(){
		remove1();
		
	})
	//弹出框保存修改按钮
	$(".weui_dialog_ft a.primary").click(function(){
		remove1();
		kept();
		reseat();
	})
	//弹出提示确认操作按钮
	function alert1() {
		$(".weui_dialog_confirm div").addClass("weui_dialog_confirm_tianjia");
		
	};
	//移除弹出框
	function remove1(){
		$(".weui_dialog_confirm div").removeClass("weui_dialog_confirm_tianjia");
	}
	//提示操作完成
	function kept(){
		$("#toast div.weui_toast").addClass("weui_dialog_confirm_tianjia");
		$("#toast div.weui_toast").fadeOut(1000)
	}
	

	//提交
	$("#suggest_submit").click(function(){
		kept();
		$("form .weui_cell .weui_cell_bd .weui_textarea").val("")
	})
})