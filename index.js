function gameObject() {
    return {
        home: {
            teamName: "Brooklyn Nets",
            colors: ["Black", "White"],
            players: {
                "Alan Anderson": {
                    number: 0,
                    shoe: 16,
                    points: 22,
                    rebounds: 12,
                    assists: 12,
                    steals: 3,
                    blocks: 1,
                    slamDunks: 1,
                },
                "Reggie Evens": {
                    number: 30,
                    shoe: 14,
                    points: 12,
                    rebounds: 12,
                    assists: 12,
                    steals: 12,
                    blocks: 12,
                    slamDunks: 7,
                },
                "Brook Lopez": {
                    number: 11,
                    shoe: 17,
                    points: 17,
                    rebounds: 19,
                    assists: 10,
                    steals: 3,
                    blocks: 1,
                    slamDunks: 15,
                },
                "Mason Plumlee": {
                    number: 1,
                    shoe: 19,
                    points: 26,
                    rebounds: 12,
                    assists: 6,
                    steals: 3,
                    blocks: 8,
                    slamDunks: 5,
                },
                "Jason Terry": {
                    number: 31,
                    shoe: 15,
                    points: 19,
                    rebounds: 2,
                    assists: 2,
                    steals: 4,
                    blocks: 11,
                    slamDunks: 1,
                },
            },
        },
        away: {
            teamName: "Charlotte Hornets",
            colors: ["Turquoise", "Purple"],
            players: {
                "Jeff Adrien": {
                    number: 4,
                    shoe: 18,
                    points: 10,
                    rebounds: 1,
                    assists: 1,
                    steals: 2,
                    blocks: 7,
                    slamDunks: 2,
                },
                "Bismack Biyombo": {
                    number: 0,
                    shoe: 16,
                    points: 12,
                    rebounds: 4,
                    assists: 7,
                    steals: 7,
                    blocks: 15,
                    slamDunks: 10,
                },
                "DeSagna Diop": {
                    number: 2,
                    shoe: 14,
                    points: 24,
                    rebounds: 12,
                    assists: 12,
                    steals: 4,
                    blocks: 5,
                    slamDunks: 5,
                },
                "Ben Gordon": {
                    number: 8,
                    shoe: 15,
                    points: 33,
                    rebounds: 3,
                    assists: 2,
                    steals: 1,
                    blocks: 1,
                    slamDunks: 0,
                },
                "Brendan Hayword": {
                    number: 33,
                    shoe: 15,
                    points: 6,
                    rebounds: 12,
                    assists: 12,
                    steals: 22,
                    blocks: 5,
                    slamDunks: 12,
                },
            },
        },
    };
}
//-------retrieve player info-------

const game= gameObject();
let homePlayers= game.home.players;
let awayPlayers=game.away.players


//1.Returns the points scored by the given player.
function numPointsScored (playerName){
    let points=0;
    let playerFound=false;
    Object.keys(homePlayers).forEach((key)=>{
        if(playerName=== key){
            points= homePlayers[key].points;
            playerFound=true;
        }
    })
    Object.keys(awayPlayers).forEach(key=> {
        if(playerName === key){
            points = awayPlayers[key].points;
            playerFound=true;
        }
    })
    if (playerFound){
        return points;
    } else {
        return "Player not found.";
    }
}


//2.Returns the shoe size of the given player.
function shoeSize(playerName){
    let shoeSize;
    let playerFound=false;
    Object.keys(homePlayers).forEach(key=> {
        if(playerName===key){
            shoeSize = homePlayers[key].shoe;
            playerFound=true;
        }
    })
    Object.keys(awayPlayers).forEach(key=> {
        if(playerName === key){
            shoeSize = awayPlayers[key].shoe;
            playerFound=true;
        }
    })
    if(playerFound){
        return shoeSize;
    } else {
        return "Player not found.";
    }
}

//-------retrieve team info-------

//3.Returns an array of the team’s colors.
function teamColors(teamName){
    if (teamName ===game.home.teamName) {
        return game.home.colors;
    } else if (teamName === game.away.teamName){
        return game.away.colors;
    }else {
        return "Please enter a Team Name.";
    }

}


//4.Returns an array of both team names.
function teamNames() {
    let teamNames=[];
    teamNames.push(game.home.teamName);
    teamNames.push(game.away.teamName);
    return teamNames;
}


//-------retreive player nrs and stats-------

//5.Returns an array of jersey numbers for the given team.
function playerNumbers(teamName){
    let playerNumbers=[];
    if(teamName===game.home.teamName){
        Object.values(game.home.players).forEach(player=> playerNumbers.push(player.number))
        return playerNumbers;
    }
    if(teamName===game.away.teamName){
        Object.values(awayPlayers).forEach(player => playerNumbers.push(player.number))
        return playerNumbers;
    }
    else {return "Team not found.";
    }


}
//Returns an object containing all stats for the given player.
function playerStats (playerName){
    let playerStats={};
    let playerFound=false;
    Object.keys(homePlayers).forEach(key=>{if (playerName===key){
        playerStats=homePlayers[key];
        playerFound=true;
    }})
    Object.keys(awayPlayers).forEach(key=>{if (playerName===key){
        playerStats=awayPlayers[key];
        playerFound=true;
    }})
    if(playerFound){
        return playerStats;
    } else {
        return "Player not found."
    }

}

//-------advanced challenge-------

//7.Finds the player with the largest shoe size and returns their number of rebounds.
function bigShoeRebounds() {
    let largestShoeSize=0;
    let reboundCount=0;

    // Check home team players shoe size and keep track of their rebound
    for (let player in homePlayers) {
        const shoeSize = homePlayers[player].shoe; 
        const rebounds = homePlayers[player].rebounds;
        if (shoeSize > largestShoeSize) {
            largestShoeSize = shoeSize;
            reboundCount = rebounds;
        }
    }

    // Check away team players shoe size and keep track of their rebound
    for (let player in awayPlayers) {
        const shoeSize = awayPlayers[player].shoe;
        const rebounds = awayPlayers[player].rebounds;

        if (shoeSize > largestShoeSize) {
            largestShoeSize = shoeSize;
            reboundCount = rebounds;
        }
    }
    return reboundCount;

}





//-------Bonus questions-------
function mostPointsScored(){
    let maxPoints = 0;
    let topScorer = "";
    
    for (let player in homePlayers) {
        if (homePlayers[player].points > maxPoints) {
                maxPoints = homePlayers[player].points;
                topScorer = player;
        }
    }
    
    for (let player in awayPlayers) {
        if (awayPlayers[player].points > maxPoints) {
                maxPoints = awayPlayers[player].points;
                topScorer = player;
        }
    }
    
    return topScorer;
}

// Identifies which team has the most total points.
function winningTeam() {
    let homePoints = 0;
    let awayPoints = 0;
    Object.values(homePlayers).forEach(player => homePoints += player.points);
    Object.values(awayPlayers).forEach(player => awayPoints += player.points);

    if (homePoints > awayPoints) {
        return game.home.teamName;
    } else if (awayPoints > homePoints) {
        return game.away.teamName;
    } else {
        return "It's a tie.";
    }
}
//Finds the player with the longest name
function playerWithLongestName() {
    let longestName = "";
    for (let player in homePlayers) {
        if (player.length > longestName.length) {
            longestName = player;
        }
    }
    for (let player in awayPlayers) {
        if (player.length > longestName.length) {
            longestName = player;
        }
    }

    return longestName;
}

//-------Super bonus challenge-------
//Returns true if the player with the longest name has the most steals
function doesLongNameStealATon() {
    const longest = playerWithLongestName();
    
    //find the steals for the longest‐name player:
    let stealsOfLongest = 0;
    if (homePlayers[longest]) {
      stealsOfLongest = homePlayers[longest].steals;
    } else if (awayPlayers[longest]) {
      stealsOfLongest = awayPlayers[longest].steals;
    }
    
    //find the maximum steals among ALL players:
    let maxSteals = 0;
    for (const name in homePlayers) {
      if (homePlayers[name].steals > maxSteals) {
        maxSteals = homePlayers[name].steals;
      }
    }
    for (const name in awayPlayers) {
      if (awayPlayers[name].steals > maxSteals) {
        maxSteals = awayPlayers[name].steals;
      }
    }
    
    //check if the steals of player with longest name match with max steals amongst all players
    if (stealsOfLongest === maxSteals) {
      return true;
    } else {
      return false;
    }
  }
  module.exports = {
    gameObject,
    numPointsScored,
    shoeSize,
    teamColors,
    teamNames,
    playerNumbers,
    playerStats,
    bigShoeRebounds,
    mostPointsScored,
    winningTeam,
    doesLongNameStealATon,
  };