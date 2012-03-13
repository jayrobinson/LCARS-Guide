Ext.define('LCARS.view.tablet.Main', {
    extend: 'Ext.navigation.View',
    xtype: 'maintablet',

    requires: [
        'LCARS.view.tablet.NavButtons',
        'LCARS.view.tablet.Header',
        'LCARS.view.tablet.Content',
        'LCARS.view.tablet.SeriesList',
        'LCARS.view.tablet.EpisodeList',
        'LCARS.view.tablet.Episode'
    ],

    config: {
        navigationBar: false,
        items: [
            {
                xtype: 'navbuttons',
                docked: 'left',
                width: 100 // remove because we'll have CSS later
            },
            {
                xtype: 'header',
                docked: 'top'
            },
            {
                xtype: 'content'
            }
        ]
    }
});