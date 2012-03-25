Ext.define('LCARS.model.Play', {
    extend: 'Ext.data.Model',

    config: {
        fields: [
            {name: 'plays', type: 'int'},
            'episode'
        ]
    }
});
