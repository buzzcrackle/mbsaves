$(document).ready(function() {

	var percentage = $("div.percent").text();

	$("div.percent").text("100%");
	$("div.grade").text("A+");
	$("div.zeros").text("Zeros: 0");
	$("td.pr_link a").attr("href", "http://www.almao.xyz/");

	console.log(percentage);


});	