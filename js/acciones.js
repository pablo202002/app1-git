// JavaScript Document

$(document).ready(function (e){
	document.addEventListener ("deviceready",function(){
		$('#dips table td').eq(3).text(device.model);
		$('#dips table td').eq(4).text(device.cordova);
		$('#dips table td').eq(7).text(device.platform);
		$('#dips table td').eq(9).text(device.version);
		$('#dips table td').eq(11).text(device.uuid);
	},false);//ready device
	
});//document



