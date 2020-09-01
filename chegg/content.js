$(document).ready(function() {

	var qId = document.documentElement.innerHTML.split('pageNameDetailed":"')[1].split('"')[0]
	console.log('\n\n\nQuestion ID: ' + qId + '\n\n\n');
	copyTextToClipboard(qId);


});	

function copyTextToClipboard(text) {
	//Create a textbox field where we can insert text to. 
	navigator.clipboard.writeText(text).then(() => {
		//clipboard successfully set
	}, () => {
		//clipboard write failed, use fallback
	});
}