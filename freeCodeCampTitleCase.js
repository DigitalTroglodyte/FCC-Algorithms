
//basic
String.prototype.replaceAt = function(index, character) {
    return this.substr(0, index) + character + this.substr(index+character.length);

};

function titleCase(str) {
    let newTitle = str.split('');
    let updatedTitle = [];
    for (let st in newTitle) {
        updatedTitle[st] = newTitle[st].toLowerCase().replaceAt(0, newTitle[st].charAt(0).toUpperCase());

    }
    return updatedTitle.join('');
}
//intermediate
function titleCase(str) {
    let convertToArray = str.toLowerCase().split('');
    let result = convertToArray.map(function(val){
        return val.replace(val.charAt(0), val.charAt(0).toUpperCase());
    })
    return result.join("");
}

titleCase("Im a little tea pot");

//advanced
function titleCase(str) {
    return str.toLowerCase().replace (/(^|\s)\S/g, (L) => L.toUpperCase());
}
