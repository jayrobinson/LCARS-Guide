Ext.define('LCARS.store.Plays', {
    extend: 'Ext.data.Store',

    config: {
        model: 'LCARS.model.Play',
        proxy: 'localstorage',
        autoLoad: true
    }
});
