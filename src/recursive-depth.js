module.exports = class DepthCalculator {
    calculateDepth(arr) {
        let depth = 1;

        if (arr.some(el => Array.isArray(el))) {
            return 1 + this.calculateDepth(arr.flat(depth));
        }

        return depth;
    }

};