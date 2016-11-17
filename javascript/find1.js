$(document).ready(function() {
	var pull1;
//	模拟从数据集库中已经获取数据
	var pullbodys=[{icon:"./images/icon_nav_search_bar.png",name:"家具一  实木",material:"实木"},
					{icon:"./images/icon_nav_search_bar.png",name:"家具2",material:"实木"},
					{icon:"./images/icon_nav_search_bar.png",name:"家具3",material:"实木"},
					{icon:"./images/icon_nav_search_bar.png",name:"家具4",material:"实木"},
					{icon:"./images/icon_nav_search_bar.png",name:"家具5 橡木",material:"实木"},
					{icon:"./images/icon_nav_search_bar.png",name:"实木1",material:"橡木"},
					{icon:"./images/icon_nav_search_bar.png",name:"橡木2",material:"橡木"},
					{icon:"./images/icon_nav_search_bar.png",name:"橡木3",material:"橡木"},
					{icon:"./images/icon_nav_search_bar.png",name:"橡木4",material:"橡木"},
					{icon:"./images/icon_nav_search_bar.png",name:"橡木5",material:"橡木"},
					{icon:"./images/icon_nav_search_bar.png",name:"橡木1",material:"橡木"},
					{icon:"./images/icon_nav_search_bar.png",name:"床",material:"实木"},
					{icon:"./images/icon_nav_search_bar.png",name:"床",material:"实木"},
					{icon:"./images/icon_nav_search_bar.png",name:"卧室 实木",material:"实木"},
					{icon:"./images/icon_nav_search_bar.png",name:"卧室",material:"实木"},
					{icon:"./images/icon_nav_search_bar.png",name:"卧室 橡木",material:"实木"},
					{icon:"./images/icon_nav_search_bar.png",name:"厨房",material:"实木"},
					{icon:"./images/icon_nav_search_bar.png",name:"厨房",material:"实木"},
					{icon:"./images/icon_nav_search_bar.png",name:"衣柜",material:"实木"},
					{icon:"./images/icon_nav_search_bar.png",name:"衣柜",material:"实木"},
					{icon:"./images/icon_nav_search_bar.png",name:"衣柜",material:"实木"},
					{icon:"./images/icon_nav_search_bar.png",name:"餐桌",material:"实木"},
					{icon:"./images/icon_nav_search_bar.png",name:"餐桌",material:"实木"},
					
					{icon:"./images/icon_nav_search_bar.png",name:"餐桌",material:"实木"},
					{icon:"./images/icon_nav_search_bar.png",name:"餐桌",material:"实木"},
					{icon:"./images/icon_nav_search_bar.png",name:"餐桌",material:"实木"}
					];
	function renderpullbodys(pullbodys){
		var html="";
		var pullbody;
		for (var i=0;i<pullbodys.length;i++) {
			pullbody=pullbodys[i];
			
			html +=	'<a href="javascript:void(0);" class="weui_media_box weui_media_appmsg">'+
						'<div class="weui_media_hd">'+
							'<img class="weui_media_appmsg_thumb" src="'+pullbody.icon+'" alt="">'+
						'</div>'+
						'<div class="weui_media_bd">'+
							'<h4 class="weui_media_title">'+pullbody.name+'</h4>'+
							'<p class="weui_media_desc">'+pullbody.material+'</p>'+
						'</div>'
					'</a>';
					
		};
		document.getElementById("pullbody").innerHTML=html;
	}
	renderpullbodys(pullbodys)
	
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