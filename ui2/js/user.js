$(document).ready(function() {
//	/加载完成后隐藏多选和删除按钮/
	$("#checkall").hide();
	$(".delete").hide()
	
//	/按下全选按钮后,多选按钮被选中/
	$("#checkall").click(function() {
		$("input[name='checkname[]']").each(function() {
			
			$(this).attr("checked", !$(this).attr("checked"));
		});
	});
	
//	/当有选项选中时，出现全选和删除取消按钮/
	$("body>div.weui_cells_checkbox label input").click(function() {
				$("#checkall").show();
				$(".delete").show();
				$(".weui_tabbar").hide()
	});
//	按下取消按钮时，全选，删除取消隐藏
	$("#commodity_off").click(function() {
				$("#checkall").hide();
				$(".delete").hide();
				$(".weui_tabbar").show()
	});
//	/确认完成后弹出完成提示/
	$("#toast").hide();
	$("#commodity_delete").click(function() {
		
		$(".weui_dialog_confirm div").addClass("weui_dialog_confirm_tianjia")
		
	});
	$(" .weui_dialog_confirm  .weui_dialog .weui_dialog_ft a").click(function() {
		$(" .weui_dialog_confirm div").removeClass("weui_dialog_confirm_tianjia")
	});

//	按下保存按钮时弹出确认保持或取消
	$("#showTooltips").click(function() {
		$(".weui_dialog_confirm div").addClass("weui_dialog_confirm_tianjia")
	});
	//不管确定或取消都移除样式
	$("#user_home_useralter .weui_dialog_confirm  .weui_dialog .weui_dialog_ft a").click(function() {
		$("#user_home_useralter .weui_dialog_confirm div").removeClass("weui_dialog_confirm_tianjia")
	});
	
//	/提示操作状态为成功/
	$("#user_home_useralter .weui_dialog_confirm  .weui_dialog .weui_dialog_ft .primary").click(function() {
		$("#toast").show()
		$("#toast .weui_toast").addClass("weui_dialog_confirm_tianjia").fadeOut(2000);
		$("#toast").fadeOut(1000)
	});
//  /黄页中编辑
	$("#YpOne .YpOneHide").click(function(){
		$("#YpOne").hide().siblings().show();
	})
	$("#YpTwo .YpTwoHide").click(function(){
		$("#YpTwo").hide().siblings().show();
	})
	$("#YpTwo button:submit").click(function(){
		$("#YpTwo").hide().siblings().show();
	})
//  /客户订单管理
	$(".Of>ul:eq(0)>li").click(function(){
		$(".Of>ul:eq(0)>li").removeClass('bg-gray')
		var className=$(this).attr('class');
		$(".Of>ul:eq(1)>li[class='"+className+"']").show()
		$(".Of>ul:eq(1)>li[class!='"+className+"'],.Of>p.bg_white").hide();
		$(this).addClass("bg-gray").siblings().removeClass("bg-gray");
	})
	//当输入框获取焦点时底部导航栏隐藏
	$("body input:text,body textarea").focus(function(){
		$('.weui_tab').hide()
	})
	$("body input:text,body textarea").blur(function(){
		$('.weui_tab').show()
	})
	 
})