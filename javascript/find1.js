$(document).ready(function() {
	
	
	//顶部赛选点击
	$("#pull>div").click(function(){
		var pullDivIndex=$(this).index();
		if ($(this).is(".f-blue")==true) {
			$(this).removeClass("f-blue").find("a").removeClass("icon-8").addClass("icon-6 f-gray");
			$("#pulldown").hide();
			$("#pull").css('position','');
		} else{
			$(this).siblings().removeClass("f-blue").find("a").removeClass("icon-8").addClass("icon-6 f-gray")
			$(this).addClass("f-blue").find("a").addClass("icon-8").removeClass("f-gray");
			$("#pull").css('position','fixed');
			$("#pulldown").show();
			$("#pulldown div.weui_tab>div:eq("+pullDivIndex+")").show().siblings().hide();
		}
		
	})
	$("#pullLeft #find_manu_xiala_left ul li").click(function(){
		var pullLeftLiIndex=$(this).index();
		$(this).addClass("leftLiAdd").siblings().removeClass("leftLiAdd")
		$("#pullLeft #find_manu_xiala_right ul:eq("+pullLeftLiIndex+")").show().siblings().hide();
	})
	
	//点击任意处隐藏
	// 点击#pulldown任何地方  让#pulldown隐藏
	$("#pulldown").click(function(){  
		$("#pull>div").removeClass("f-blue").find("a").removeClass("icon-8").addClass("icon-6 f-gray");
		$("#pull").css('position','');
		$('#pulldown').hide();
	
	});
	// 点击#pulldown>div>div,阻拦(让pulldown隐藏)(stopPropagation阻拦click事件冒泡)
	//及实现了 点击#pulldown>div>div之外的任何地方  让#pulldown隐藏 
	$('#pulldown>div>div').click(function(event){ 
		event.stopPropagation(); 
	});

	//重置按钮
	$(".resetting1").click(function(){
		$('#material div ul li input').each(function() { 
			this.checked = false; 
		}); 
	
	});
	$(".resetting2").click(function(){
		$('#pullright div ul li input').each(function() { 
			this.checked = false; 
		}); 
		
	})
//	滚动条事件
	$(window).scroll(function(){
		var scrollhight=document.body.scrollTop;
		if (scrollhight>400) {
			$("#topReturn").show()
		} else{
			$("#topReturn").hide()
		}
		

	})
	
})