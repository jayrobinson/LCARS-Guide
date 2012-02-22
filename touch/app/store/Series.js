Ext.define('LCARS.store.Series', {
    extend: 'Ext.data.Store',

    config: {
        model: 'LCARS.model.Series',

        proxy: {
            type: 'ajax',
            url: '../data/all.json',
            
            reader: {
                rootProperty: 'Data.Series'
            }
        },
        
        autoLoad: true
    }
});