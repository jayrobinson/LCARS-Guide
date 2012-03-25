Ext.define('LCARS.model.Episode', {
    extend: 'Ext.data.Model',

    config: {
        fields: [
            'SeasonNumber',
            {
                'name': 'EpisodeNumber',
                'convert': function(value, record){
                    if(parseInt(value) < 10){
                        return '0' + value;
                    } else {
                        return value;
                    }
                }
            },
            {
                'name': 'PrettyEpisodeID',
                'convert': function(value, record){
                    return 'S0' + record.get('SeasonNumber') + ' E' + record.get('EpisodeNumber') ;
                }
            },
            'EpisodeName',
            {
                'name': 'FirstAired',
                'type': 'date',
                'dateFormat': 'c'
            },
            {
                'name': 'PrettyFirstAired',
                'convert': function(value, record){
                    if (Ext.isDate(record.get('FirstAired'))){
                        return Ext.Date.format(record.get('FirstAired'), 'd M Y');
                    } else {
                        return 'Date Unknown';
                    }
                }
            },
            'Stardate',
            'Overview',
            'Screenshot',
            'IMDB_ID',
            'PlayCount'
        ],

        associations: [
            {
                type: 'belongsTo',
                name: 'series',
                associationKey: 'Series',
                model: 'LCARS.model.Series'
            }
        ]

    }
});
