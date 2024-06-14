var modifier = 'Tab_Selected';
$('.tp-Tab').each(function(){
    var $el = $(this);
    var $tabs = $el.find('.tp-Tab_List_Item');
    var $buttons = $el.find('.tp-Tab_Button');
    var $panels = $('.tp-Tabpanel');

    $buttons.on('click', function(){
        var index = $buttons.index(this);
        $panels.hide();
        $panels.attr({
            'aria-hidden':'true'
        });
        $tabs.removeClass( modifier );
        $tabs.attr({
            'aria-selected': 'false',
            'aria-expanded': 'false'
        });

        var $panel = $panels.eq(index);
        var $tab = $tabs.eq(index);

        $panel.show();
        $panel.attr({
            'aria-hidden':'false'
        });
        $tab.addClass(modifier);
        $tab.attr({
            'aria-selected':'true',
            'aria-expanded':'true'
        });
    });
})