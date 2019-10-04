
//procedural approach
function largestOfFour(arr) {
    let results = [];
    for (let n = 0; n < arr.length; n++) {
        let largestNumber = arr[n][0];
        for (let sb = 1; sb < arr[n].length; sb++) {
            if (arr[n][sb] > largestNumber) {
                largestNumber = arr[n][sb];
            }
        }
        results[n] = largestNumber;
    }
    return results;
}

//declarative approach
function largestOfFour(arr) {
    return arr.map(function(group){
        return group.reduce(function(prev, current) {
            return(current > prev) ? current : prev;
        });
    });
}

//less code declarative approach
function largestOfFour(arr) {
    return arr.map(Function.apply.bind(Math.max, null));
}