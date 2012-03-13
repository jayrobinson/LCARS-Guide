Ext.define('LCARS.controller.Series', {
    extend: 'Ext.app.Controller',

    updatePlayCountButton: function(record, item) {
        var main = this.getMain(),
            series = record.getSeries(),
            store = Ext.getStore('Plays'),
            id = series.get('SeriesAbbr') + record.get('SeasonNumber') + record.get('EpisodeNumber'),
            existingIndex = store.find('episode', id),
            existing,
            plays = 0;

        if (existingIndex != -1) {
            existing = store.getAt(existingIndex);
            plays = existing.get('plays');
        }
        item.down('button[action=addPlays]').setText('Play Count: ' + plays);
    }
});
