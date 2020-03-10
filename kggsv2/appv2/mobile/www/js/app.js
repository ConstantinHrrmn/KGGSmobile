// Dom7
var $$ = Dom7;

// Framework7 App main instance
var app = new Framework7({
    root: '#app', // App root element
    id: 'net.dariogenga.fecharts', // App bundle ID
    name: 'Fire Emblem Charts', // App name
    theme: 'auto', // Automatic theme detection
    // App root data
    data: function () {
        return {};
    },
    // App root methods
    methods: {},
    // App routes
    routes: routes,

    // panel: {
    //     swipe: "left"
    // }
});

// Init/Create main view
var mainView = app.views.create('.view-main');