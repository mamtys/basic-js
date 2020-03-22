module.exports = function transform(arr) {
    if (!Array.isArray(arr)){
        throw new Error();
    }

    for (let i = 0; i < arr.length; i++) {
        if (arr[i] in TRANSFORMATION_TABLE) {
            TRANSFORMATION_TABLE[arr[i]](arr, i)
        }
    }
    return arr;
};

const TRANSFORMATION_TABLE = {
    '--discard-next': (arr, ind)  => arr.splice(ind, 2),
    '--discard-prev': (arr, ind)  => arr.splice(ind - 1 > 0 ? ind - 1 : ind , 2),
    '--double-next': (arr, ind)  => arr.splice(ind, 1, arr[ind+1]),
    '--double-prev': (arr, ind)  =>arr.splice(ind, 1, arr[ind-1]),
}
