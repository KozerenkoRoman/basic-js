/**
 * Create name of dream team based on the names of its members
 *
 * @param {Array} members names of the members
 * @return {String | Boolean} name of the team or false
 * in case of incorrect members
 *
 * @example
 *
 * createDreamTeam(['Matt', 'Ann', 'Dmitry', 'Max']) => 'ADMM'
 * createDreamTeam(['Olivia', 1111, 'Lily', 'Oscar', true, null]) => 'LOO'
 *
 */
export default function createDreamTeam(members) {
    let abbr = '';
    if (Array.isArray(members)) {
        members.map((item, index, array) => {
            if (typeof item == 'string' && Boolean(item)) {
                abbr += item.trim().charAt(0).toUpperCase();
            } else
                return false;
        });
        return abbr.split('').sort().join('');
    }
    return false;
};

