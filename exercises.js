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
    var min = function(){
        minVal = scores[0];
        for (var i = 0; i<scores.length;i++){
            if (scores[i] < minVal){
                minVal = scores[i]
            }
        }
        return minVal
    }
    var rand = function(){
        var randInd = Math.floor(Math.random()*scores.length)
        return scores[randInd]
    }
    var above70 = function(){
        var retArr = [];
        for (var i = 0; i < scores.length; i++){
            if (scores[i] >= 70){
                retArr.push(scores[i])
            }
        }
        return retArr
    }
    var first = function(){
        return scores[0]
    }
    var last = function(){
        return scores[scores.length-1]
    }
    var addFivePercent = function(){
        var retArr = [];
        for (var i = 0; i < scores.length; i++){
            var newI = scores[i]*.05 + scores[i];
            retArr.push(newI)
        }
        return retArr
    }
    return{
        sum: sum,
        avg: avg,
        max: max,
        min: min,
        rand: rand,
        above70: above70,
        first: first,
        last: last,
        addFivePercent: addFivePercent
    }
}())

// console.log(rmp.sum())
// console.log(rmp.avg())
// console.log(rmp.max())
// console.log(rmp.min())
// console.log(rmp.rand())
// console.log(rmp.above70())
// console.log(rmp.first())
// console.log(rmp.last())
console.log(rmp.addFivePercent())