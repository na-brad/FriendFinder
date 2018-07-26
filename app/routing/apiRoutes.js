var friends = require("./../data/friends.js");


module.exports = function (app) {

    app.get("/api/friends", function (req, res) {
        res.json(friends)
    });
    app.post("/api/friends", function (req, res) {
        friends.push(req.body);
        var userInput = req.body.scores;
        console.log(userInput);

        var comparedValues = [];

       for (var i=0;i<friends.length;i++){
            var result = 0;
            for (var j=0;j<userInput.length;j++){
                result = result + Math.abs(friends[i].scores[j] - parseFloat(userInput[j]));
            }
            comparedValues.push(result);
       }
        
        console.log(comparedValues);
        var index = 0;
        var value = comparedValues[0];
        for (let i = 1; i < comparedValues.length; i++) {
            if (comparedValues[i] < value) {
                value = comparedValues[i];
                index = i;
            }
        };
        res.json(friends[index]);
    });
}