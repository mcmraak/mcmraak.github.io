$(window).load(function () {
    ion.cmd('data=#Ion;html=#WorkSpace;debug=true;');
});

var ion = new Ion();

/* Ajax commands */
$(document).on('click', '[ion]', function ()
{
    ion.cmd($(this).attr('ion'));
});

$(document).on('click', '#TopMenu li', function ()
{
    $('#TopMenu li').removeClass('active');
    $(this).addClass('active');
});