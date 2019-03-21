//Create a Revealing Module Pattern that will have the following data and methods:

//data
//scores 65, 76, 100, 88, 17, 55

//methods
// 1. finds the sum of all scores
// 2. finds the avg of all scores
// 3. finds the highest score
// 4. finds the lowest score
// 5. generates a random score
// 6. finds the number of passing scores above 70
// 7. finds the first score in the list 
// 8. finds the last score in the list 
// 9. generates a new score list with a 5% increase for each score 
// 10.generates a list of scores that are odd numbered

var rmp = (function(){
    var scores = [65,76,100,88,17,55]
    var sum = function(){
        var total = 0;
        for (var i = 0; i<scores.length; i++){
            total += scores[i]
        }
        return total;
    }
    var avg = function(){
        var total = 0;
        for (var i = 0; i<scores.length;i++){
            total += scores[i]
            var avg = total/scores.length
        }
        return avg
    }
    var max = function(){
        maxVal = 0;
        for (var i = 0; i<scores.length;i++){
            if (scores[i] > maxVal){
                maxVal = scores[i]
            }
        }
        return maxVal
    }
    return{
        sum: sum,
        avg: avg,
        max: max
    }
}())

console.log(rmp.sum())
console.log(rmp.avg())
console.log(rmp.max())