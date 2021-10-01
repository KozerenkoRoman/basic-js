/**
 * Create transformed array based on the control sequences that original
 * array contains
 *
 * @param {Array} arr initial array
 * @returns {Array} transformed array
 *
 * @example
 *
 * transform([1, 2, 3, '--double-next', 4, 5]) => [1, 2, 3, 4, 4, 5]
 * transform([1, 2, 3, '--discard-prev', 4, 5]) => [1, 2, 4, 5]
 *
 */
export default function transform(arr) {
    if (!Array.isArray(arr)) throw new Error(`'arr' parameter must be an instance of the Array!`);
    if (arr.length === 0) return [];
    let resArr = [];
    let command = null;

    return arr.forEach(((item, i) => {
        switch (item) {
            case '--discard-next':
                i !== arr.length - 1 && (resArr.push(item), command = '--discard-next');
                break;
            case '--discard-prev':
                resArr.length && null != command && (resArr.pop(), command = resArr.length ? resArr.slice(-1) : null);
                break;
            case '--double-next':
                i !== arr.length - 1 && (command = '--double-next', resArr.push(item));
                break;
            case '--double-prev':
                if (command === null) break;
                resArr.push(command);
                break;
            default:
                if (command === '--double-next') {
                    resArr.pop();
                    resArr.push(item, item);
                    command = item;
                    break;
                }
                if (command === '--discard-next') {
                    resArr.pop();
                    command = null;
                    break;
                }
                resArr.push(item);
                command = item;
        }
    })), resArr
}
