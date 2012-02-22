Ext.define('LCARS.view.tablet.Content', {
    extend: 'Ext.Container',
    xtype: 'content',

    config: {
        cls: ['orange','bottomContent'], // these classes go on the header thingy, Ext.Container
        layout: 'fit',

        items: [
            {
                cls: ['inner'],
                layout: 'fit',
                items: [
                    {
                        xtype: 'serieslisttablet'
                    }
                ]
            }
        ]
    }
});