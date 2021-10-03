/**
 * In the popular Minesweeper game you have a board with some mines and those cells
 * that don't contain a mine have a number in it that indicates the total number of mines
 * in the neighboring cells. Starting off with some arrangement of mines
 * we want to create a Minesweeper game setup.
 *
 * @param {Array<Array>} matrix
 * @return {Array<Array>}
 *
 * @example
 * matrix = [
 *  [true, false, false],
 *  [false, true, false],
 *  [false, false, false]
 * ]
 *
 * The result should be following:
 * [
 *  [1, 2, 1],
 *  [2, 1, 1],
 *  [1, 1, 1]
 * ]
 */
export default function minesweeper(matrix) {
    let result = [];
    let row = [];

    for (let i = 0; i < matrix.length; i++) {
        row = [];
        for (let j = 0; j < matrix[0].length; j++) {
            let cnt = 0;
            if ((i - 1) >= 0) {
                cnt += matrix[i - 1][j] ? 1 : 0;
                cnt += matrix[i - 1][j + 1] ? 1 : 0;
                cnt += matrix[i - 1][j - 1] ? 1 : 0;
            }
            cnt += matrix[i][j + 1] ? 1 : 0;
            cnt += matrix[i][j - 1] ? 1 : 0;
            if (matrix.length > (i + 1)) {
                cnt += matrix[i + 1][j] ? 1 : 0;
                cnt += matrix[i + 1][j + 1] ? 1 : 0;
                cnt += matrix[i + 1][j - 1] ? 1 : 0;
            }
            row.push(cnt);
        }
        result.push(row);
    }
    return result;
}
