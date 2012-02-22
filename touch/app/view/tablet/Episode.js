Ext.define('LCARS.view.tablet.Episode', {
    extend: 'Ext.Container',
    xtype: 'episodetablet',

    config: {
        styleHtmlContent: true,
        scrollable: {
            direction: 'vertical',
            directionLock: true
        },
        tpl: [
            '<div class="content"><img src="{Screenshot}" alt="Screenshot" style="float:right;margin: 0 -10px 20px 10px;" width="48%"><p><strong>Stardate:</strong> {Stardate}<br><strong>Airdate:</strong> {FirstAired}</p><p><strong>Teaser:</strong> {Overview}</p></div>'
        ]
    }
    
});
