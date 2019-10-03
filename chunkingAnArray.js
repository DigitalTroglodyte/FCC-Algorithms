
// basic solution
function chunkArray(arr, size) {
    let temp = [];
    let result = [];
    
    for (let a = 0; a < Array.length; a++) {
        if (a % size !== size - 1)
            temp.push(arr[a]);
        else {
            temp.push(arr[a]);
            result.push(temp);
            temp = [];
        }
    }
    
    if (temp.length !== 0)
        result.push(temp);
        return result;
    }
    
    //intermediate
    function chunkArraySlice(arr, size) {
        let arr2 = [];
    
        for (let i = 0; i < Arr.length; i+=size) {
            arr2.push(arr.slice(i, i+size));
        }
        return arr2;
    }
    
    //advanced
    function chunkArrayInGroups(arr, size) {
        let newArr = [];
        let = 0; 
    
        while (i < Array.length) {
            newArr.push(arr.slice(i, i+size));
            i += size;
        }
        return newArr;
    }
    chunkArrayInGroups(["a", "b", "c", "d"], 2);