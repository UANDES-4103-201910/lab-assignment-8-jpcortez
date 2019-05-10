// Note: $(() => {}); is equivalent to $(document).ready(function(){})
$(() => {
	console.log('Document ready! [app/assets/javascripts/keyboard.js]');
	$('.key').click(function()
		{
			console.log($(this).text());
			
	//		var showed = ""
//
			if ($(this).text()=="Enter"){
				var para = document.createElement("p");
				var node = document.createTextNode(" ");
				para.appendChild(node);

				var element = document.getElementById("onscreenkeys");
				element.appendChild(para);
			}
			else if ($(this).text()=="Bksp"){
				var some = document.getElementById("onscreenkeys").value;
				document.getElementById("onscreenkeys").text(some.substring(0,some.length-1)) ;
			//	var para = document.createElement("p");
			//	var node = document.createTextNode($(this).text());
			//	para.appendChild(node);
//
//				var element = document.getElementById("onscreenkeys");
//				element.appendChild(node);
			}

			else if ($(this).text()=="Accept" || $(this).text()=="Cancel" || $(this).text()=="Shift" ){
				var node = document.createTextNode("");
				var element = document.getElementById("onscreenkeys");
				element.appendChild(node);
			}

			else {
				
				var node = document.createTextNode($(this).text());
				

				var element = document.getElementById("onscreenkeys");
				element.appendChild(node);
			}
//				showed = $('#onscreenkeys').text().slice(0,-1) ;
//			}
//			else if ($(this).text()=="Accept" || $(this).text()=="Cancel" || $(this).text()=="Shift"){
//				showed =  $('#onscreenkeys').text();
//			}
//			else if ($(this).text()=="Enter"){
//				showed =  $('#onscreenkeys').text() + "\n";
//			}
//
//			else {
//				showed =  $('#onscreenkeys').text() + $(this).text();
//			}
//	    $('#onscreenkeys').text(showed) ;

		})
});
