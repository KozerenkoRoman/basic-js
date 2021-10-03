/**
 * Given some integer, find the maximal number you can obtain
 * by deleting exactly one digit of the given number.
 *
 * @param {Number} n
 * @return {Number}
 *
 * @example
 * For n = 152, the output should be 52
 *
 */
export default function deleteDigit(n) {
    let min = String(n).split('').sort().slice(0, 1).join('');
    let arr = String(n).split('');
    let result = '';
    for (let i = arr.length - 1; i >= 0; i--) {
        if (arr[i] == min) min = ''
        else
            result += arr[i];
    }
    return Number(result.split('').reverse().join(''));
}
