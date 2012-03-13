Ext.define('LCARS.profile.Tablet', {
    extend: 'Ext.app.Profile',

    config: {
        name: 'tablet',
        namespace: 'tablet',
        controllers: [
            'Series',
            'Episodes',
            'Plays'
        ],
        views: ['Main']
    },
    
    isActive: function() {
        return !Ext.os.is.Phone;
    },

    launch: function() {
        Ext.create('LCARS.view.tablet.Main', {
            fullscreen: true
        });
    }
});
