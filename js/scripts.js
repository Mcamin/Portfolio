jQuery(function ($) {

    'use strict';

    // --------------------------------------------------------------------
    // PreLoader
    // --------------------------------------------------------------------

    (function () {
        $('#preloader').delay(200).fadeOut('slow');
    }());


}); // JQuery end

// --------------------------------------------------------------------
// Typed
// --------------------------------------------------------------------
 var typed = $(".typed");

 $(function() {

   typed.typed({

     strings: ["Hello There.", "I am Amine.", "A master Student at Tu Berlin."],
     typeSpeed: 150,
     loop: true,

   });

 });
