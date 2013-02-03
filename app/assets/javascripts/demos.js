function createTemplate () {
	var step = 0;
	
	// Step 1 - Narrow vs Wide
	$('#create-step-1').fadeIn(400);
	$('#step-1-wide').click(function(){
		$('.body').css({width: '100%'});
	});
	$('#step-1-narrow').click(function(){
		$('.body').css({width: '1248px'});
	});

	$('#create-step-1 .confirm').click(function(){
		$('#create-step-1').fadeOut(800);
		$('#create-step-2').delay(800).fadeIn(400);
	});

	// Step 2
	$('#step-2-single-col').click(function(){
		$('.main-column').css({width: '100%', display: 'block'});
		$('.sidebar').css({display: 'none'});
		$('.secondary-column').css({display: 'none'});
	});

	$('#step-2-sidebar').click(function(){
		$('.main-column').css({width: '80%', display: 'block'});
		$('.secondary-column').css({display: 'none'});
		$('.sidebar').css({width: '20%', display: 'block'});
	});

	$('#step-2-sidebar-2-col').click(function(){
		$('.sidebar').css({width: '20%', display: 'block'});
		$('.main-column').css({width: '40%', display: 'block'});
		$('.secondary-column').css({width: '40%', display: 'block'});
	});

	$('#create-step-1 .confirm').click(function(){
		$('#create-step-1').fadeOut(800);
		$('#create-step-2').delay(800).fadeIn(400);
	});
}

createTemplate();