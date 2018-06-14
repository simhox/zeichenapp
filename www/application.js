document.addEventListener('deviceready', function() {
    // erst jetzt ist APP geladen und ready um was zu tun!
    console.log( 'DEVICE READY!' );
    $( document ).ready( function() {
      console.log( 'DOM READY!' );

      var c = $('<canvas>',{width:$(window).width(),height:$(window).height()}).prependTo('body');

      var ctx = c.get(0).getContext("2d");
      ctx.fillRect(100,100,100,100)
      $( document ).on( 'touchmove', '#bilder', function( event ) {

      	var x =event.changedTouches[0].clientX;
        var y =event.changedTouches[0].clientY;



      });





    });
});
