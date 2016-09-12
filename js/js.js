$(window).load(function () {
    var hash = window.location.hash;
    if (hash) {
        page(hash);
    } else {
        page('#ion');
    }
});

function page(hash) {
    $('#WorkSpace').html($(hash).html()).hide().fadeIn(300);
    $('#TopMenu li').removeClass('active');
    $('#TopMenu li[hash=' + hash + ']').addClass('active');
    window.location.hash = hash;
}

$(document).on('click', '#TopMenu li', function ()
{
    page($(this).attr('hash'));
});