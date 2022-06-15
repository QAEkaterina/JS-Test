function countSmileys(arr) {
    return arr.filter(smile => smile.match(/[;:][~-]{0,1}[D)]/)).length;
 }
 module.exports = countSmileys;