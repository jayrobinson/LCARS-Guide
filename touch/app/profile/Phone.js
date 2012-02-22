Ext.define('LCARS.profile.Phone', {
    extend: 'Ext.app.Profile',

    config: {
        name: 'phone',
        namespace: 'phone',
        controllers: ['Series'],
        views: ['LCARS.view.phone.Main']
    },
    
    isActive: function() {
        return Ext.os.is.Phone;
    },

    launch: function() {
        Ext.create('LCARS.view.phone.Main', {
            fullscreen: true
        });
    }
});
