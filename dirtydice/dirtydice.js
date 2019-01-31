$(function() {

    
    $("#buttonStart").click(function show() {
        
        var face = Math.floor((Math.random() * 6) + 1);

        $('#cube').attr('class', 'show' + face);
        if (face == 6) {
            face = 1;
        } else {
            face++;
        }
    });
    var timer = setInterval(show, 500);
});

$(function() {
    $("#buttonStartTwo").click(function showMe() {

        var face = Math.floor((Math.random() * 6) + 1);

        $('#cube2').attr('class', 'show' + face);
        if (face == 6) {
            face = 1;
        } else {
            face++;
        }
    });
    var timer = setInterval(showMe, 500);


});

$(function () {

    var w = $(window).width(),
        h = $(window).height();
    //$('section').width(w);
    $('section').height(h);
    $('menu .container').height(h - 60);
    $('body').prepend('<div id="overlay">');

    $('#menu').click(function () { $('html').addClass('active'); });
    $('#close-menu').click(function () { $('html').removeClass('active'); });
    $('#overlay').click(function () { $('html').removeClass('active'); });
    $(window).resize(function () {
        var w = $(window).width(),
            h = $(window).height();
        //$('section').width(w);
        $('section').height(h);
        $('menu .container').height(h - 60);
    });

});