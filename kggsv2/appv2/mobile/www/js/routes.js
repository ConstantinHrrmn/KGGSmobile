routes = [
    {
        path: '/',
        templateUrl: './index.html',
        on: {
            pageAfterIn: () => {
                onDeviceReady();
            }
        }
    },
    {
        name: 'admin',
        path: '/admin/',
        templateUrl: './pages/admin.html',
        on: {
            pageAfterIn: () => {
                if(user == null || user['seclevel'] != "1"){
                    window.location.replace("/");
                }else{
                    LoadStaff();
                    LoadData();
                }
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

                    if(user != null && user['seclevel'] == "1"){
                        var text5 = document.createTextNode("Edit");
                        var link = document.createElement('a');
                        link.setAttribute('class', 'button');
                        link.setAttribute('href', "/editM/"+id);
                        link.appendChild(text5);
                        document.getElementById("data").appendChild(link);
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
        name: 'editmatch',
        path: '/editM/:id',
        templateUrl: './pages/editMatch.html',
        on: {
            pageInit: (e, page) => {
                const id = page.route.params.id;
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
        name: 'editStaff',
        path: '/editS/:id',
        templateUrl: './pages/editStaff.html',
        on: {
            pageInit: (e, page) => {
                const id = page.route.params.id;
                kggsStaff.forEach(staff =>{
                    if(staff['IdUser'] == id){
                        StaffToEdit(staff);
                    }
                });
                
            }
        }
    },
    {
        name: 'editTeam',
        path: '/editT/:id',
        templateUrl: './pages/editTeam.html',
        on: {
            pageInit: (e, page) => {
                const id = page.route.params.id;
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
];