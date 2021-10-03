/**
 * Create a repeating string based on the given parameters
 *
 * @param {String} str string to repeat
 * @param {Object} options options object
 * @return {String} repeating string
 *
 *
 * @example
 *
 * repeater('STRING', { repeatTimes: 3, separator: '**', 
 * addition: 'PLUS', additionRepeatTimes: 3, additionSeparator: '00' })
 * => 'STRINGPLUS00PLUS00PLUS**STRINGPLUS00PLUS00PLUS**STRINGPLUS00PLUS00PLUS'
 *
 */
export default function repeater(str, options) {
    let sep = '';
    let res = '';

    if (str === undefined) str = ''
    else if (str === null) str = 'null'
    else if (typeof str == 'object') str.toString();

    if (!options.repeatTimes) options.repeatTimes = 1;
    if (!options.additionRepeatTimes) options.additionRepeatTimes = 1;
    if (!options.additionSeparator) options.additionSeparator = '|';
    if (!options.separator) options.separator = '+';

    if (options.addition === null) options.addition = 'null'
    else if (typeof options.addition == 'object') options.addition.toString()
    else if (options.addition === undefined) options.addition = '';

    for (let i = 0; i < options.additionRepeatTimes - 1; i++) {
        sep += options.addition + options.additionSeparator
    }

    sep += options.addition;
    for (let i = 0; i < options.repeatTimes - 1; i++) {
        res += str + sep + options.separator
    }

    return res + str + sep
}
