function hasUserMedia(){
	navigator.getUserMedia=navigator.getUserMedia || navigator.webkitGetUserMedia || 
	navigator.mozGetUserMedia || navigator.msGetUserMedia;
	return !!navigator.getUserMedia;
}

if (hasUserMedia) {
	navigator.getUserMedia=navigator.getUserMedia || navigator.webkitGetUserMedia || 
	navigator.mozGetUserMedia || navigator.msGetUserMedia;

	navigator.getUserMedia({video:true, audio:true}, function(stream){
		var video=document.querySelector('video');
		console.log(stream);
		video.src=window.URL.createObjectURL(stream);
	},
	function(err){
		console.log("Error:::::" + err);
	});

}
else{
	alert("Error. WebRTC is not supported");
}
