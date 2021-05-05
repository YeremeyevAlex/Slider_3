$(document).ready(()=>{
	let images = ["snow.jpg","fog.jpg","rashi.jpg","storm.jpg","sky.jpg","rain.jpg","tornado.jpg","bckg1.jpg","bckg2.jpg"];
	let slider = $("#slider");
	let slide = $("#slide");
	let x = 0;
	let dir = 1;
	let t;

	slider.click(function(e){
		if(e.pageX > $(window).width()/2) { dir = 1; x++; }
		else { dir = -1; x--;  }
		start();
	});
				
	start();
			
	function start() {
		stop();
		show();
		t = setInterval(()=>{x++; show()}, 3000);
	}
				
	function stop() {
		clearInterval(t);
	}
				
	function show() {
		if(x == images.length) x = 0;
		if(x < 0) x = images.length - 1;
		slide.css({
				left: dir * 100 + "%",
				backgroundImage: getPath()
			})
			.animate({left: 0}, 500, ()=>{
				slider.css('backgroundImage', getPath());
			});
	}
				
	function getPath(){
		return "url('../Slider_3/img/" + images[x] + "')";
	}
});