function save(){
	var oCA = document.getElementById('canv');
	var data = oCA.toDataURL('image/jpeg');
	var json_data = JSON.stringify(data);

	fileName = "Picture.png";
	downloadFile(fileName,data);
	document.getElementById('text').style.display = "none";
}

function base64Img2Blob(code){
	var parts = code.split(';base64,');
	var contentType = parts[0].split(':')[1];
	var raw = window.atob(parts[1]);
	var rawLength = raw.length;
	var uInt8Array = new Uint8Array(rawLength);
	for (var i = 0; i < rawLength; ++i) {
		uInt8Array[i] = raw.charCodeAt(i);
	}
	return new Blob([uInt8Array], {type: contentType});
}

function downloadFile(fileName, content){
	var aLink = document.createElement('a');
	var blob = base64Img2Blob(content);
	var evt = document.createEvent("HTMLEvents");
	evt.initEvent("click", false, false);
	aLink.download = fileName;
	aLink.href = URL.createObjectURL(blob);
	aLink.dispatchEvent(evt);
}
