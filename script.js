$(document).ready(() => {
    $('.contact-section').on('mouseenter', (event) => {
        $(event.currentTarget).css({
            backgroundColor: '#DBDBDB'
        });
    }).on('mouseleave', (event) => {
        $(event.currentTarget).css({
            backgroundColor: '#EDEDED'
        });
    });

    $('#imgrobo1').mouseover(function() {
        $(this).addClass('hover');
        $(this).mouseout(function () {
            $(this).removeClass('hover');
        });
    });

    $('#imgrobo2').mouseover(function() {
        $(this).addClass('hover');
        $(this).mouseout(function () {
            $(this).removeClass('hover');
        });
    });

    $('#imgrobo3').mouseover(function() {
        $(this).addClass('hover');
        $(this).mouseout(function () {
            $(this).removeClass('hover');
        });
    });

/* TODO: Move To js file */
      /*********************************************************
       *
       *   Test Checkboxes/Radio Buttons Script
       *
       *********************************************************/
       // loop through each form and handle submit event
       for (var i=0;i<document.forms.length;i++) {
        var form = document.forms[i];
        form.addEventListener('submit', function(e){
          e.preventDefault();
          var results = '';
         // loop through all checkboxes to see if checked
         var checkboxes = form.querySelectorAll("input[type='checkbox']");
         for(var k = 0; k < checkboxes.length; k++) {
           results += checkboxes[k].id + '=' + checkboxes[k].checked + '\n';
         }
         // loop through all radio butotns to display value
         var radiobuttons = form.querySelectorAll("input[type='radio']:checked");
         for(var m = 0; m < radiobuttons.length; m++) {
           results += radiobuttons[m].name + '=' + radiobuttons[m].value + '\n';
         }
         // alert results
         console.log(results);
       });
     }
     
});

      