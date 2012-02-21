Ext.define('LCARS.view.Main', {
    extend: 'Ext.NavigationView',
    xtype: 'main',

    config: {
        items: [
            { xtype: 'episodelist' }
        ]
    }
});