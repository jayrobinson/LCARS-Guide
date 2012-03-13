Ext.define('LCARS.model.Episode', {
    extend: 'Ext.data.Model',

    config: {
        fields: [
            'SeasonNumber',
            'EpisodeNumber',
            'EpisodeName',
            'FirstAired',
            'Stardate',
            'Overview',
            'Screenshot',
            'IMDB_ID'
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