/**
 * Given an array of domains, return the object with the appearances of the DNS.
 *
 * @param {Array} domains
 * @return {Object}
 *
 * @example
 * domains = [
 *  'code.yandex.ru',
 *  'music.yandex.ru',
 *  'yandex.ru'
 * ]
 *
 * The result should be the following:
 * {
 *   '.ru': 3,
 *   '.ru.yandex': 3,
 *   '.ru.yandex.code': 1,
 *   '.ru.yandex.music': 1,
 * }
 *
 */
export default function getDNSStats(domains) {
    let obj = {};
    return domains.forEach((item => {
        (e => {
            let arrItem = e.split('.');
            arrItem[arrItem.length - 1] = `.${arrItem[arrItem.length - 1]}`, arrItem.reverse();
            for (let i = 0; i < arrItem.length; i++) {
                let key = arrItem.slice(0, i + 1).join('.');
                Object.keys(obj).includes(key) ? obj[key]++ : obj[key] = 1
            }
        })(item)
    })), obj
}
