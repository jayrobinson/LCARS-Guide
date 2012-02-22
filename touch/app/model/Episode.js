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
            'playCount'
        ]
    }
});