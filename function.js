function findMissing(arr) {
    const fix = 1 - arr.reduce((result, curr) => Math.min(result, curr), Infinity);

    const neededSum = (arr.length + 1) * (arr.length + 2) / 2;

    const sum = arr.reduce((acc, curr) => acc + curr + fix, 0);
    
    return neededSum - sum - fix;
} 

/*function findMissing(arr) {
    const sorted = arr.slice().sort((a, b) => a - b);

    return sorted.find((current, index, arr) => {
        const prev = arr[index > 0 ? index - 1 : index];

        return (current - prev) > 1;
    }) - 1;
}*/
module.exports = findMissing 