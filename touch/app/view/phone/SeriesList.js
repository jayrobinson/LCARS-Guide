Ext.define('LCARS.view.phone.SeriesList', {
    extend: 'Ext.List',
    xtype: 'serieslistphone',

    config: {
        id: 'serieslistphone',
        title: 'Select Series',

        store: 'Series',

        itemTpl: Ext.create('Ext.XTemplate',
            '<div class="seriesItem" title="{SeriesName}"><i>{SeriesAbbr}</i><span><b>000</b></span></div>'
        ),

        items: [
            {
                cls: ['ruleHeading', 'flushLeft'],
                xtype: 'titlebar',
                docked: 'top',
                items: [
                    {
                        xtype: 'button',
                        html: 'BK',
                        action: 'back',
                        align: 'left',
                        cls: 'backButton'
                    },
                    {
                        xtype: 'component',
                        html: 'Select Series',
                        cls: 'ruleTitle'
                    },
                    {
                        xtype: 'button',
                        html: 'END',
                        align: 'right',
                        cls: 'endCapRight'
                    }
                ]
            },
            {
                cls: ['ruleHeading'],
                xtype: 'titlebar',
                docked: 'bottom',
                items: [
                    {
                        cls: ['ruleButton', 'rulebuttonLeft'],
                        text: 'About',
                        align: 'left',
                        id: 'aboutButton'
                    },
                    {
                        cls: ['ruleButton', 'rulebuttonRight'],
                        text: 'Settings',
                        align: 'right',
                        id: 'settingsButton'
                    }
                ]
            }
        ],

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
