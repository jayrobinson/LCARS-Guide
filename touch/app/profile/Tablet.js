Ext.define('LCARS.profile.Tablet', {
    extend: 'Ext.app.Profile',

    config: {
        name: 'tablet',
        namespace: 'tablet',
        controllers: ['Series'],
        views: ['Main']
        
    },
    
    isActive: function() {
        return Ext.os.is.Tablet;
    },

    launch: function() {
        Ext.create('LCARS.view.tablet.Main', {
            fullscreen: true
        });
    }
});
