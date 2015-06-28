// PARALLAX
var splashLayers = document.querySelectorAll("#splash > div");
var whyBackgrounds = document.querySelectorAll("#why_background");

// Render
var render = function(){

	// Scroll Offset
	var scrollTop = (document.documentElement && document.documentElement.scrollTop) || document.body.scrollTop;
	scrollTop -= 160;

	// Splash Layers
	for(var i=0;i<splashLayers.length;i++){
		var layer = splashLayers[i];
		var y = (scrollTop*(1-Math.pow(0.9,((splashLayers.length+2)-i))))+"px";
		var x = (i==splashLayers.length-1) ? "50%" : "calc(50% + 250px)";
		layer.style.backgroundPosition = x+" "+y;
	}

	// Why Background
	for(var i=0;i<whyBackgrounds.length;i++){
		var layer = whyBackgrounds[i];
		var y = (scrollTop-layer.offsetTop)*0.5;
		layer.style.backgroundPosition = "0px "+y+"px";
	}

};

// Re-render whenever scrolling
window.onscroll = function(){
	render();
};
setTimeout(function(){
	render();
},50);