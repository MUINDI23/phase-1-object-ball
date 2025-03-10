//builds object function thats house home, away and player stats
function gameObject() {
    let gameStats = {
        home: {
            teamName:"Brooklyn Nets",
            colors:["Black", "White"],
            players:{
                "Alan Anderson":{
                    number:0,
                    shoe:16,
                    points:22,
                    rebounds:12,
                    assists:12,
                    steals:3,
                    blocks:1,
                    slamDunks:1,
                },
                "Reggie Evans":{
                    number:30,
                    shoe:14,
                    points:12,
                    rebounds:12,
                    assists:12,
                    steals:12,
                    blocks:12,
                    slamDunks:7,
                },
                "Brook Lopez":{
                    number:11,
                    shoe:17,
                    points:17,
                    rebounds:19,
                    assists:10,
                    steals:3,
                    blocks:1,
                    slamDunks:15,
                },
                "Mason Plumlee":{
                    number:1,
                    shoe:19,
                    points:26,
                    rebounds:12,
                    assists:6,
                    steals:3,
                    blocks:8,
                    slamDunks:5,
                },
                "Jason Terry":{
                    number:31,
                    shoe:15,
                    points:19,
                    rebounds:2,
                    assists:2,
                    steals:4,
                    blocks:11,
                    slamDunks:1,
                },
            }
        },
        away: {
            teamName: "Charlotte Hornets",
            colors:["Turquoise", "Purple"],
            players:{
                "Jeff Adrien":{
                    number:4,
                    shoe:18,
                    points:10,
                    rebounds:1,
                    assists:1,
                    steals:2,
                    blocks:7,
                    slamDunks:2,
                },
                "Bismak Biyombo":{
                    number:0,
                    shoe:16,
                    points:12,
                    rebounds:4,
                    assists:7,
                    steals:7,
                    blocks:15,
                    slamDunks:10,
                },
                "Desagna Diop":{
                    number:2,
                    shoe:14,
                    points:24,
                    rebounds:12,
                    assists:12,
                    steals:4,
                    blocks:5,
                    slamDunks:5,
                },
                "Ben Gordon":{
                    number:8,
                    shoe:15,
                    points:33,
                    rebounds:3,
                    assists:2,
                    steals:1,
                    blocks:1,
                    slamDunks:0,
                },
                "Brendan Haywood":{
                    number:33,
                    shoe:15,
                    points:6,
                    rebounds:12,
                    assists:12,
                    steals:22,
                    blocks:5,
                    slamDunks:12,
                },
            }
        }
    }
    return gameStats;
}
//creates dependable functions

function homeTeamName() {
    return gameObject()["home"]["teamName"];
}
function awayTeamName() {
    return gameObject()["away"]["teamName"];
}
function homeTeamColors() {
    return gameObject()["home"]["colors"];
}
function awayTeamColors() {
    return gameObject()["away"]["colors"];
}
function numPointsScored(team, playerName) {
    return gameObject()[team]["players"][playerName]["points"];
}
function shoeSize(team, playerName) {
    return gameObject()[team]["players"][playerName]["shoe"];
}
function playerNumber(team, playerName) {
    return gameObject()[team]["players"][playerName]["number"];
}

//functions for pulling players stats
function playerStats(playerName) {
    let game = gameObject();

    for (let team in game){
        if (game[team].players[playerName]) {return game[team].players[playerName];}
    }
    return null;
}

//function to return the number of rebounds associated with shoesizes
function bigShoeRebounds() {
    let game = gameObject();
    let biggestShoe = 0;
    let playerWithBiggestShoe = null;

    for (let team in game) {
        for (let player in game[team.players]) { if (game[team].players[player].shoe > biggestShoe) {
            biggestShoe = game[team].players[player].shoe;
        }
    }
}
if (playerWithBiggestShoe) {
    for (let team in game) {
        if (game[team].players[playerWithBiggestShoe]) {
            return game[team].players[playerWithBiggestShoe].rebounds;
        }
    }
}
return null;
}

//player with most points
function mostPointsScored() {
    let game = gameObject();
    let mostPoints = 0;
    let playerWithMostPoints = null;

    for (let team in game) {
        for (let player in game[team.players]) 
            { if (game[team].players[player].points > mostPoints) {
            mostPoints = game[team].players[player].points;
            playerWithMostPoints = player;
        }
    }
}
return playerWithMostPoints;
}

//Team with most point(winning team)
function winningTeam() {
    let game = gameObject();
    let homePoints = 0;
    let awayPoints = 0;

    for (let player in game.home.players) {
        homePoints += game.home.players[player].points;
    }
    for (let player in game.away.players) {
        awayPoints += game.away.players[player].points;
    }
    if (homePoints > homePoints) {
        return game.away.teamName;
    } else {
        return "Tie";
    }
}

//The player with the longest name
function playerWithLongestName() {
    let game = gameObject();
    let longestName = "";
    let playerWithLongestName = null;

    for (let team in game) {
        for (let player in game[team].players) {
            if (player.length > longestName.length) {
                longestName = player;
                playerWithLongestName = player;
            }
        }
    }
    return playerWithLongestName;
}

//A function that filters through the array to get a player with most steals/longest name
function doesLongNameStealATon() {
    let game = gameObject();
    let longestName = "";
    let playerWithLongestName = null;
    for (let team in game) {
        for (let player in game[team].players) {
            if (player.length > longestName.length) {
                longestName = player;
                playerWithLongestName = player;
            }
        }
    }
    let mostSteals = 0;
    let playerWithMostSteals = null;
    for (let team in game) {
        for (let player in game[team].players) {
            if (game[team].players[player].steals > mostSteals) {
                mostSteals = game[team].players[player].steals;
                playerWithMostSteals = player;
            }
        }
    }
    if (playerWithLongestName === playerWithMostSteals && playerWithLongestName !== null) {
        return true;
    } else {
        return false;
    }
}

//console.log() for each function above
console.log(homeTeamName());
console.log(awayTeamName());
console.log(homeTeamColors());
console.log(awayTeamColors());
console.log("Alan Anderson points:", numPointsScored("home", "Alan Anderson"));
console.log("Alan Anderson Shoe Size:", shoeSize("home", "Alan Anderson"));
console.log("Alan Anderson Jersey Number:", playerNumber("home", "Alan Anderson"));
console.log("Alan Anderson stats:", playerStats("Alan Anderson"));
console.log(bigShoeRebounds());
console.log("Player with most points:", mostPointsScored());
console.log("Winning team:", winningTeam());
console.log("Player with longest name:", playerWithLongestName());
console.log("Does the player with the longest name steal a ton?", doesLongNameStealATon());



