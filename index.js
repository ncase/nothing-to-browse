window.onload = function(){

	// THE BANNER LAYERS - PARALLAX
	var layers = document.querySelectorAll("#splash > div");
	window.onscroll = function(){

		// Scroll Offset
		var scrollTop = (document.documentElement && document.documentElement.scrollTop) || document.body.scrollTop;

		// Move all layers
		for(var i=0;i<layers.length;i++){
			var layer = layers[i];
			var y = (scrollTop*(1-Math.pow(0.9,((layers.length+2)-i))))+"px";
			var x = (i==layers.length-1) ? "50%" : "calc(50% + 250px)";
			layer.style.backgroundPosition = x+" "+y;
		}

	};

}