
//basic
function truncateString(str, num) {
    if (str.length > num && num > 3) {
        return str.slice(0, (num - 3)) + "..."; 
    } else if (str.length > num && num <= 3) {
        return str.slice(0, num) + "...";
    } else {
        return str;
    }
}

//advanced
function truncateString(str, num) {
    if(str.length <= num) {
        return str;
    } else {
        return str.slice(0, num > 3 ? num - 3 : num) + '...';
    }
}

//Youtube solution
function truncateString(str, num) {
    if(str.length > num) {
        return str.substring(0, num) + '...'
    } else {
        return str
    }
}