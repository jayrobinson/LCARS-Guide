Ext.define('LCARS.view.tablet.Episode', {
    extend: 'Ext.Container',
    xtype: 'episodetablet',

    config: {
        id: 'episodeTablet',
        styleHtmlContent: true,
        scrollable: {
            direction: 'vertical',
            directionLock: true
        },

        tpl: [
            '<div class="content"><img class="screenshot" src="{Screenshot}" alt="Screenshot"><p><strong>Stardate:</strong> {Stardate}<br><strong>Airdate:</strong> {FirstAired}</p><p><strong>Teaser:</strong> {Overview}</p></div>'
        ],

        items: [
            {
                xtype: 'button',
                action: 'addPlays',
                text: 'Play Count: 0'
            }
        ]
    }
    
});
