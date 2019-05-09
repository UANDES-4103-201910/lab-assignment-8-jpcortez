// Note: $(() => {}); is equivalent to $(document).ready(function(){})
$(() => {
	console.log('Document ready! [app/assets/javascripts/keyboard.js]');
	$('.key').click(function()
		{
			console.log($(this).text());

			var showed = ""

			if ($(this).text()=="Bksp"){
				$('#onscreenkeys').text().slice(-1) ;
			}
			else {
				showed =  $('#onscreenkeys').text() + $(this).text();
			}
	    $('#onscreenkeys').text(showed) ;

		})
});
