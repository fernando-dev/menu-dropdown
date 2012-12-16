$(document).ready(function() {

	$('.dropdown-menu').each(function() {
		$(this).MenuDropdown({
			type: 'click',
			speed: 100
		});
	})

});