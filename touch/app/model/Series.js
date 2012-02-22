Ext.define('LCARS.model.Series', {
    extend: 'Ext.data.Model',

    config: {
        fields: [
            'SeriesName',
            'SeriesAbbr'
        ],
        associations: [
            {
                type: 'hasMany',
                name: 'episodes',
                associationKey: 'Episode',
                model: 'LCARS.model.Episode'
            }
        ]
    }
});