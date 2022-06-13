function findMissing(arr) {
    const fix = 1 - arr.reduce((result, curr) => Math.min(result, curr), Infinity);

    const neededSum = (arr.length + 1) * (arr.length + 2) / 2;

    const sum = arr.reduce((acc, curr) => acc + curr + fix, 0);
    
    return neededSum - sum - fix;
}
module.exports = findMissing