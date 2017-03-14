var stream;

function hasUserMedia(){
	navigator.getUserMedia=navigator.getUserMedia || navigator.webkitGetUserMedia || 
	navigator.mozGetUserMedia || navigator.msGetUserMedia;
	return !!navigator.getUserMedia;
}

if (hasUserMedia) {
	navigator.getUserMedia=navigator.getUserMedia || navigator.webkitGetUserMedia || 
	navigator.mozGetUserMedia || navigator.msGetUserMedia;

	navigator.getUserMedia({video:true, audio:true}, function(s){
		stream=s;
		var video=document.querySelector('video');
	

		video.src=window.URL.createObjectURL(stream);
	},
	function(err){
		console.log("Error:::::" + err);
	});

}
else{
	alert("Error. WebRTC is not supported");
}

btnGetAudioTracks.addEventListener("click", function(){
	console.log("getAudioTracks");
	console.log(stream.getAudioTracks());
});

btnGetTrackById.addEventListener("click", function(){
	console.log("getTrackById");
	console.log(stream.getTrackById(stream.getAudioTracks()[0].id));
});

btnGetTracks.addEventListener("click", function(){
	console.log("getTracks()");
	console.log(stream.getTracks());
});

btnGetVideoTracks.addEventListener("click", function(){
	console.log("getVideoTracks()");
	console.log(stream.getVideoTracks());
});

btnRemoveAudioTracks.addEventListener("click", function(){
	console.log("removeAudioTracks()");
	stream.removeTrack(stream.getAudioTracks()[0]);
});

btnRemoveVideoTracks.addEventListener("click", function(){
	console.log("removeVideoTrack()");
	stream.removeTrack(stream.getVideoTracks()[0]);
});