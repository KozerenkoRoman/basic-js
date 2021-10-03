/**
 * Given a string, return its encoding version.
 *
 * @param {String} str
 * @return {String}
 *
 * @example
 * For aabbbc should return 2a3bc
 *
 */
export default function encodeLine(str) {
    let last = str[0];
    let cnt = 0;
    let result = '';
    str = str + '_';
    str.split('').forEach((item) => {
        if (last === item) {
            cnt++
        } else {
            result += cnt === 1 ? last : cnt + last;
            cnt = 1;
            last = item;
        }
        // console.log('item=' + item + ', last=' + last + ', cnt=' + cnt);
    });
    return result;
}

