$(window).load(function () {
    ion.cmd('ajax=/ion.js.html;html=#WorkSpace;');
});

var ion = new Ion();

/* Ajax commands */
$(document).on('mousedown', '[ion]', function ()
{
    ion.cmd($(this).attr('ion'));
});

$(document).on('click', '#TopMenu li', function ()
{
    $('#TopMenu li').removeClass('active');
    $(this).addClass('active');
});