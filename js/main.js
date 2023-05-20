(function($){
	'use strict';

//Mobile Menu


$('.sp-menu-icon i').on('click', function(){
	$('.sp-mobile-menu').slideToggle();
})



$(window).resize(function(){

	var screenSize = $(window).width();

	if(screenSize > 991){
		$('.sp-mobile-menu').removeAttr('style');
	}
});





// isotope
$(document).ready(function ($) {
setTimeout(function(){ 
          // filter items on button click
$('.filter-button-group').on( 'click', 'button', function() {
  var filterValue = $(this).attr('data-filter');
  $grid.isotope({ filter: filterValue });
});
var $grid = $('.grid').isotope({
  // set itemSelector so .grid-sizer is not used in layout
  itemSelector: '.grid-item',
  percentPosition: true,
  masonry: {
    // use element for option
    columnWidth: '.grid-item'
  }
});
     }, 1000);
});









}) (jQuery);