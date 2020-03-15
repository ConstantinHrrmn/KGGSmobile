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
        name: 'match',
        path: '/match/:id',
        templateUrl: './pages/match.html',
        on: {
            pageInit: (e, page) => {
                const id = page.route.params.id;
                console.log(id);

                $.getJSON(URL_TEAMS_FOR_MATCH + id, function(result) {
                    if(result.length > 0){
                        result.forEach(team =>{
                            var card = document.createElement('div');
                            card.setAttribute('class', 'card');
                            var content = document.createElement('div');
                            content.setAttribute('class','card-content card-content-padding');
                            var teams = document.createTextNode(team['Name'] + " --> " + team['Score']);
                            content.appendChild(teams);
                            card.appendChild(content);
                            document.getElementById("teams").appendChild(card);
                        })
                    }else{
                        var card = document.createElement('div');
                        card.setAttribute('class', 'card');
                        var content = document.createElement('div');
                        content.setAttribute('class','card-content card-content-padding');
                        var teams = document.createTextNode("AUCUNE EQUIPE POUR CE MATCH");
                        content.appendChild(teams);
                        card.appendChild(content);
                        document.getElementById("teams").appendChild(card);
                    }
                });
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
        name: 'staff',
        path: '/staff/',
        templateUrl: './pages/staff.html',
        on: {
            pageInit: (e, page) => {
                const id = page.route.params.id;
                DisplayStaff();
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
        name: 'login',
        path: '/login/',
        templateUrl: './pages/login.html',
        on: {
            pageInit: (e, page) => {

            }
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