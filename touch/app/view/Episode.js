Ext.define('LCARS.view.Episode', {
    extend: 'Ext.Component',
    xtype: 'episode',

    config: {
        styleHtmlContent: true,
        tpl: [
            '<div class="content"><img src="{filename}" alt="Screenshot" style="float:right;margin: 0 -10px 20px 10px;" width="48%"><p><strong>Stardate:</strong> {Stardate}<br><strong>Airdate:</strong> {FirstAired}</p><p><strong>Teaser:</strong> {Overview}</p></div>'
        ]
    }
    
});
