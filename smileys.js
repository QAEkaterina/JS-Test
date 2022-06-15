function countSmileys(arr) {
    return arr.filter(smile => typeof smile ==="string" && smile.match(/[;:][~-]{0,1}[D)]/)).length;
}
 module.exports = countSmileys;
