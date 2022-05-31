let count = 0
function solve03 (size, map) {
    let m = size[0]
    let n = size[1]
    let max = 0
 

    for (let i = 0; i < m; i++) {
        for (let j = 0; j < n; j++) {
            if (map[i][j] == 1) {
                let temp = dfs(map, i, j)
                max = max > temp ? max : temp 
            }
        }
    }

    console.log(max);
    return max
   
}
// [
//     [1, 0, 1], 
//     [1, 0, 1], 
//     [0, 1, 1]
// ]

function dfs (map, x, y) {
    if (x >= map.length || y >= map[0].length  || x < 0 || y < 0 || map[x][y] == 0) {
        return 0
    }

    map[x][y] = 0

    
   return 1 + dfs(map, x+1, y) + dfs(map, x, y+1) + dfs(map, x-1, y) + dfs(map, x, y-1)
    

}


describe('should function solve03 be correctly', () => {
    test('test1', () => {
        expect(solve03([2, 2], [[1, 0], [1, 1]])).toEqual(3);
    });
    
    test('test2', () => {
        expect(solve03([3, 3], [[0, 0, 1], [1, 1, 0], [1, 0, 0]])).toEqual(3);
    });
    
    test('test3', () => {
        expect(solve03([3, 3], [[1, 0, 1], [1, 0, 1], [0, 1, 1]])).toEqual(4);
    });

    test('test4', () => {
        expect(solve03([4, 4], [[1, 1, 0, 1], [1, 1, 0, 1], [1, 0, 1, 1], [1, 1, 0, 0]])).toEqual(7)
    })

})

