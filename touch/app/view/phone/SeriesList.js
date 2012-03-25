Ext.define('LCARS.view.phone.SeriesList', {
    extend: 'Ext.List',
    xtype: 'serieslistphone',

    config: {
        title: 'Select Series',

        store: 'Series',

        itemTpl: Ext.create('Ext.XTemplate',
            '<div class="">{SeriesName} {SeriesAbbr}</div>'
        ),
        onItemDisclosure: function(){
            alert(this.id); // returns entire Series List ID.
                            // Need to narrow scope.
        }




        // ,
        //
        // I'd like to add a toolbar along the bottom, but probably
        // have to create an Ext.Container above and insert this view.
        //
        // items: [
        //     {
        //         xtype: 'titlebar',
        //         docked: 'bottom',
        //         items: [
        //             {
        //                 id: 'topEpisodesButton'
        //                 xtype: 'button',
        //                 html: 'Top Episodes',
        //                 align: 'right'
        //             }
        //         ]
        //     }
        // ]
    }
});
