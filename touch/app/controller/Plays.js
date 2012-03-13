Ext.define('LCARS.controller.Plays', {
    extend: 'Ext.app.Controller',

    onAddPlays: function(button) {
        var main = this.getMain(),
            activeItem = main.getActiveItem(),
            episode = activeItem.getRecord(),
            series = episode.getSeries(),
            store = Ext.getStore('Plays'),
            id = series.get('SeriesAbbr') + episode.get('SeasonNumber') + episode.get('EpisodeNumber'),
            existingIndex = store.find('episode', id),
            existing,
            plays = 1;
        
        if (existingIndex != -1) {
            existing = store.getAt(existingIndex);
            existing.set('plays', existing.get('plays') + 1);
            plays = existing.get('plays');
        } else {
            store.add({
                plays: 1,
                episode: id
            });
        }

        button.setText('Play Count: ' + plays);
        store.sync();
    }
});