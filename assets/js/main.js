//Scroll down
$('a').click(function() {
	var href = $(this).attr('href');
    $('html, body').animate({
        scrollTop: $(href).offset().top
    }, 2000);
});