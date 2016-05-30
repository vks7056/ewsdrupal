// We define a function that takes one parameter named $.
(function ($) {
Drupal.behaviors.bootstrap1 = {
    attach: function(context) {
	alert(context);	
}}		
}(jQuery));
