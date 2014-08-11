_386 = { onePass: true, speedFactor: 1.25};

$(document).ready(function(){
    $('#email-address').hover(
        function(){
            $(this).text("gr@nt-hunter.ca");
        },
        function(){
            setTimeout(function(){
                console.log(this);
                 $('#email-address').text('Hover for Email');   
            }, 5000)
        }
    );
    $('.cursor').show();
});