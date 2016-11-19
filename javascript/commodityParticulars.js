

<!--//留言版-->

$(document).ready(function() {
	var html = " "
	var positionbox = " "
		//文本框
	function input_box() {
		html = " "
		html += '<div id="input_box">' +
			'<div class="weui_cell">' +
			'<div class="weui_cell_bd weui_cell_primary">' +
			'<textarea class="weui_textarea border" placeholder="请输入评论" rows="3"></textarea>' +
			'<div class="weui_textarea_counter">' +
			'<span id=' + 'textarea_num' + '>最多200字</span></div>' +
			'</div>' +
			'</div>' +
			'<div class="lheigth">&nbsp;' +
			'<div class="suggest_submit right">' +
			'<a id="suggest_submit_cancel" class="weui_btn weui_btn_mini bg-gray tright f-black">取消</a>' +
			'<a id="suggest_submit" class="weui_btn weui_btn_mini weui_btn_primary tright">提交</a>' +
			'</div>' +
			'</div>' +
			'</div>';

		document.getElementById("one").innerHTML = html;

	}
	//点赞事件
	$(".p ul li .discuss_opr>span").click(function() {
		if ($(this).is(".praised") != true) {
			$(this).addClass("praised");
			$(this).children("span").text(parseInt($(this).children("span").text()) + 1);
		} else {
			$(this).removeClass("praised");
			$(this).children("span").text(parseInt($(this).children("span").text()) - 1);
		}
	});
	//多文本框消失
	function hideappear() {
		$("#input_box").empty("#input_box");
		html = " ";
		html += '<span class="icon  icon-80 f-blue f22 right "></span>';
		document.getElementById("one").innerHTML = html;
		$("#one").attr("id", " ");

	}
	//新增留言按钮
	$(".p .discuss_list .bold>a").click(function() {
			$(this).siblings("div").attr("id", "one");
			positionbox = $(this).siblings("div");
			$(this).hide();
			//console.log(b);

			//console.log(positionbox);
			input_box();
		})
		//取消事件
	$("li").on("click", "#suggest_submit_cancel", function() {

		$(".weui_tab_bd .particulars .right_leaveword .p .discuss_list .bold>a").show();
		hideappear();
	});
	//确定事件
	$("li").on("click", "#suggest_submit", function() {

		$(".weui_tab_bd .particulars .right_leaveword .p .discuss_list .bold>a").show();
		hideappear();
	});
	//回复留言事件
	$(".p>.discuss_list>.discuss_item .discuss_extra_info").on("click", "span", function() {
		positionbox = " "
		$(this).parent(".discuss_extra_info").attr("id", "one");
		positionbox = $(this).parent();
		
		input_box();
		
	});
	//收藏事件；
	$("#message .bd ul li .left_manufacturers .row a").click(function(){
		if ($(this).hasClass('icon-49')==true) {
			
			$(this).removeClass("icon-49").html("已收藏").addClass("f-gray");
		} 
		
	})
	//选中按钮颜色改变
	$(".commodity div button").click(function(){
		$(this).addClass("buttonAdd").siblings().removeClass("buttonAdd")
	})
	
})