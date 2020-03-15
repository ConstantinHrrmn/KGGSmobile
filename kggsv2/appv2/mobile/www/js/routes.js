routes = [
    {
        path: '/',
        templateUrl: './index.html',
        on: {
            pageAfterIn: () => {
                //displayCharacters();
                onDeviceReady();
            }
        }
    },
    {
        name: 'classes',
        path: '/classes/',
        templateUrl: './pages/classes.html',
        on: {
            pageAfterIn: () => {
                displayAllClasses();
            }
        }
    },
    {
        name: 'stat',
        path: '/stat/:charId',
        templateUrl: './pages/stat.html',
        on: {
            pageInit: (e, page) => {
                const charId = page.route.params.charId;
                if (charId != null) {
                    const char = feData.characters.find(x => x.id == charId);
                    let charFullName = (char.lastName) ? char.firstName + " " + char.lastName
                                                       : char.firstName;

                    $$("#title-char").text(charFullName);
                    $$("#picture-char").attr("src", "img/characters/" + char.firstName + ".png");
                    actualCharId = charId;
                    createTableOfStats();
                    createListOfAvailableClasses();
                    displayCharGrowthRates();
                }
                createEventForGraphSwitch(displayGraphOfGrowthRatesForChar);
            }
        }
    },
    {
        name: 'teams',
        path: '/teams/:id',
        templateUrl: './pages/teams.html',
        on: {
            pageInit: (e, page) => {
                const id = page.route.params.id;
                DisplayAllTeams();
            }
        }
    },
    {
        name: 'programme',
        path: '/programme/',
        templateUrl: './pages/programme.html',
        on: {
            pageInit: (e, page) => {
                const id = page.route.params.id;
                GetProgram();
            }
        }
    },

    {
        name: 'comparator',
        path: '/comparator/',
        templateUrl: './pages/comparator.html',
        on: {
            pageInit: (e, page) => createEventForGraphSwitch(displayCurrentGraph),
            // We must use the pageAfterIn event in order to open the smartselect directly
            pageAfterIn: (e, page) => {
                configureSmartSelectOfCharacters();
            },
            pageBeforeRemove: function (e, page) {
                // Reset the classes selected when exiting the page
                feData.characters.forEach(char => {
                    char.idClassSelected = null;
                });
            },
        }
    },
    {
        path: '/about/',
        templateUrl: './pages/about.html'
    },
];

function createEventForGraphSwitch(callback) {
    $$("#btn-graph-column-chart").on("click", (event) => {
        switchGraph(event, callback);
    });
    $$("#btn-graph-spider-web").on("click", (event) => {
        switchGraph(event, callback);
    });
}