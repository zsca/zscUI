$(document).ready(function() {
	$(".delete").hide();
	$("#checkall").hide();
	
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
	//提示操作完成,并执行
	function kept(){
		var aaa=$(".weui_cells_checkbox label div input[type='checkbox']").length;
		for (i=0;i<aaa;i++) {
			if($(".weui_cells_checkbox label:eq("+i+") div input[type='checkbox']").is(':checked')==true){
				$(".weui_cells_checkbox label:eq("+i+")").fadeOut(1000);
				setTimeout(function(){
					$(".weui_cells_checkbox label:eq("+i+")").remove();
					$("#toast div.weui_toast").addClass("weui_dialog_confirm_tianjia");
					$("#toast div.weui_toast").fadeOut(1000);
				},1000)
			};
			
		}
	}
	//当多选被选中时
	$("body>.weui_cells_checkbox label div input").click(function(){
		$(".delete").show();
		$("#checkall").show();
		$(".weui_tab").hide();
		
	});
	
	//全选按钮
	$("#checkall").click(function() {
		$("input[name='checkname[]']").each(function() {
			$(this).attr("checked", true);
		});
	});
	//删除按钮
	$("#commodity_delete").click(function() {
		alert1();
		
		
	});
	//取消按钮
	$("#commodity_return").click(function(){
		reseat();
		$("input[name='checkname[]']").each(function() {
			$(this).attr("checked", false);
		});
	});
	//取消
	function reseat(){
		$(".delete").hide();
		$(".weui_tab").show();
	};
	//提交
	$("#suggest_submit").click(function(){
		kept();
		$("form .weui_cell .weui_cell_bd .weui_textarea").val("")
	})
	//滚动条事件
	$(window).scroll(function() {
		var scrollhight
		scrollhight = document.body.scrollTop;

		if(scrollhight > 500) {
			$("#topReturn").show();
		} else {
			$("#topReturn").hide();
		}
	});
})