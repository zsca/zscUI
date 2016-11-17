$(document).ready(function() {
	$(".container>div.show div").click(function() {
		if($(this).is(".clickAdd") != true) {
			$(this).addClass("clickAdd").siblings().removeClass("clickAdd");
		};
			$(".clickShow>div:eq(" + $(this).index() + ")").show().siblings().hide();
		
	});
	$("nav>div>a:eq(1)").click(function(){
		if ($(this).is(".icon-49")==true) {
			$(this).removeClass("icon-49 f-black").addClass("icon-48 f-color")
		} else{
			$(this).removeClass("icon-48 f-color").addClass("icon-49 f-black")
		}
	});
	
	$(window).scroll(function() {
		var scrollhight
		scrollhight = document.body.scrollTop;

		if(scrollhight > 200) {
			$(".show").addClass("scrollTop");
			$(".container>a").show()

		} else {
			$(".show").removeClass("scrollTop")
			$(".container>a").hide()
		}
	});
})