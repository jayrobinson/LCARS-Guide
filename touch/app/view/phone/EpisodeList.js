Ext.define('LCARS.view.phone.EpisodeList', {
    extend: 'Ext.List', // Ext.DataView is prettier? Changed only to see sort headers. They may be there but just unstyled.
    xtype: 'episodelistphone',

    config: {
        // grouped: true,
        // indexBar: {
        //     letters: ['S01','S02','S03','S04','S05','S06','S07']
        // },
        // store: 'Episodes',
        itemTpl: Ext.create('Ext.XTemplate',
            '<div class="listItem"><div class="screenshot"><img src="{Screenshot}" alt="" height="55"></div><span class="episodeListTitle">{EpisodeName}</span><br><span class="episodeNumber">S0{SeasonNumber} E0{EpisodeNumber}</span>&nbsp;&nbsp;&nbsp;<span class="airdate">{FirstAired}</span></div>'
        )
    }
});