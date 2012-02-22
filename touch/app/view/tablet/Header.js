Ext.define('LCARS.view.tablet.Header', {
    extend: 'Ext.Container',
    xtype: 'header',

    config: {
        cls: ['orange','topHeader'], // these classes go on the header thingy, Ext.Container
        layout: 'fit',
        height: 150,
    
        items: [
            {
                cls: ['inner'],
                items: [
                    {
                        html: 'Series Name',
                        cls: 'seriesOrEpisodeTitle',
                        id: 'seriesOrEpisodeTitle'
                    },
                    {
                        cls: ['buttonGroup'],
                        right: 0,
                        bottom: 0,
                        height: 100,
                        width: 400,
                        items: [
                            {
                                xtype: 'textfield',
                                placeHolder: 'Search'
                            },
                            {
                                layout: 'hbox',
                                items: [
                                    {
                                        flex: 1,
                                        xtype: 'button',
                                        text: 'Top Episodes',
                                        cls: 'sweepButton'
                                    },
                                    {
                                        flex: 1,
                                        xtype: 'button',
                                        text: 'Random',
                                        cls: 'sweepButton'
                                    }
                                ]
                            }
                        ]
                    }
                ]
            },
        ]
    }
});