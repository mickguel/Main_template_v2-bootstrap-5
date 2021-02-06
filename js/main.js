(function($){"use strict";
	$('#sidebarCollapse').on('click',function(){
		// $('#sidebar, #content').toggleClass('active');
		$('#sidebar').toggleClass('d-none');
		// $('#button-collapse').toggleClass('fa-bars fa-times');
	});
	// Sidebar - Collapse-icon, hide submmenu
	$('.collapse').collapse('hide');
	$('#collapse-icon').addClass('fa-angle-double-left');
	$('#collapse-icon').toggleClass('fa-angle-double-left fa-angle-double-right');
})
(jQuery);
