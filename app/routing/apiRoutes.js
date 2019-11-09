var friends = require("../data/friends")

module.exports = function (app) {
    // Route that shows the json of all the possible friends
    app.get("/api/friends", function (req, res) {
        res.json(friends);
    });
    app.post("/api/friends", function(req, res) {
        var userScore = req.body.scores;
        var scoresArr = [];
        var bestMatch = 0;

        for(var i = 0; i < friends.length; i++) {
            var scoreDiff = 0;

            for(var j = 0; j < userScore.length; j++) {
                scoreDiff += (Math.abs(parseInt(friends[i].scores[j]) - parseInt(userScore[j])))
            }
            scoresArr.push(scoreDiff);
            
        }
        for (var i = 0; i < scoresArr.length; i++) {
            if (scoresArr[i] <= scoresArr[bestMatch]) {
                bestMatch = i;
            }
        }
        var match = friends[bestMatch];
        res.json(match);

        console.log(req.body);
        friends.push(req.body)
    });
    // Clears out the user input after submission
    app.post("/api/clear", function(req, res) {
        friends.length = [];
        res.json({
            ok: true
        });
    });
    


};