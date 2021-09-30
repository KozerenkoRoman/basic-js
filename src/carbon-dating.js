import { NotImplementedError } from '../extensions/index.js';

const MODERN_ACTIVITY = 15;
const HALF_LIFE_PERIOD = 5730;

/**
 * Determine the age of archeological find by using
 * given MODERN_ACTIVITY and HALF_LIFE_PERIOD values
 * 
 * @param {String} sampleActivity string representation of current activity 
 * @return {Number | Boolean} calculated age in years or false
 * in case of incorrect sampleActivity
 *
 * @example
 * 
 * dateSample('1') => 22387
 * dateSample('WOOT!') => false
 *
 */

export default function dateSample(sampleActivity) {
    if (sampleActivity === "0") return false;
    if (typeof sampleActivity != "string" || !isNaN(sampleActivity) && isNaN(parseInt(sampleActivity, 10)))
        return false;

    const decay = 0.693 / HALF_LIFE_PERIOD
    const age = Math.ceil(1 / decay * Math.log(MODERN_ACTIVITY / Number(sampleActivity)));
    return age > 0 && age
}

