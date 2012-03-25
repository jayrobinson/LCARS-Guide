Ext.define('LCARS.view.phone.About', {
    extend: 'Ext.Container',
    xtype: 'aboutphone',

    config: {
        title: 'About This App',

        items: [
            {
                html: '<p><strong>APP DESIGN & DEVELOPMENT:</strong> Jay Robinson&nbsp;&nbsp;&nbsp;<a href="mailto:jay@jayrobinson.org">jay@jayrobinson.org</a><br><br>All content herein is copyrighted, and only displayed under Fair Use guidelines. The owner of the copyright is Paramount Pictures and/or CBS Studios.<br><br><strong>FAIR USE:</strong>Copyright Disclaimer Under Section 107 of the Copyright Act 1976, allowance is made for “fair use” for purposes such as criticism, comment, news reporting, teaching, scholarship, and research. Fair use is a use permitted by copyright statute that might otherwise be infringing. Non-profit, educational or personal use tips the balance in favor of fair use.<br><br><a href="http://en.wikipedia.org/wiki/Fair_Use">http://en.wikipedia.org/wiki/Fair_Use</a>'
            }
        ]
    }
});
