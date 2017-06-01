
    /****************************SLIDER HEADER********************************/
     $(function() {
        $('#slider').carousel({
        interval: 4000
        })
    });

    /****************************SLIDER HEADER********************************/


    /****************************SCROLL TO TOP********************************/
     $(function() {      
        $('a.smooth_scroll').on("click", function (e) {
                  e.preventDefault();

            var anchor = $(this);
                  $('html, body').stop().animate({
                      scrollTop: $(anchor.attr('href')).offset().top - 50
                  }, 1000);
            })
    });   
    /****************************SCROLL TO TOP********************************/
    

    $('#share').on('shown.bs.modal', function () {
      $('#myInput').focus()
    })
    