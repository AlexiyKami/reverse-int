module.exports = function reverse(n) {
    let tempString = "";
    let num= n.toString();
    for (let i = 1; i <= num.length; i++) {
        tempString += num[num.length-i];
    }
    let int = parseInt(tempString);
    return int;
}
