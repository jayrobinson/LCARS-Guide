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
                store: {
                    grouper: {
                        groupFn: function(record){
                            return "S0" + record.get('SeasonNumber');
                        },
                        sortProperty: 'SeasonNumber'
                    }
                },
                name: 'episodes',
                associationKey: 'Episode',
                model: 'LCARS.model.Episode'
            }
        ]
    }
});