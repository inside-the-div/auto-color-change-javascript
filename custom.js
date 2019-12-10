// jquery file


$(document).ready(function(){

	// catch body
	var body = $('body');

	// now make a array of your color 
	// add more color
	var color = [
		'red',
		'green',
		'blue',
		'yellow',
		'#00bcd4',
		'#e91e63',
		'#FF9801',
		'#ff5722',
		'rgb(58, 94, 105)'
	];




	var i = 0;

	// make a function 
	function changeColor(){
		// add css to body 
		body.css('background',color[i]);
		// change value of i 
		i++;

		if(i>=color.length){
			i=0;
		}
	}
	// call function 
	//changeColor();
	// now change the value of `i` and call function 

	setInterval(changeColor,1000);
	// call function every 1s




})