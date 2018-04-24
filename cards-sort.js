var cards = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11]

function shuffle(array) {
    var _array = array.concat();  
    for (var i = _array.length; i--; ) {
      var j = Math.floor(Math.random() * (i + 1));
      var temp = _array[i];
      _array[i] = _array[j];
      _array[j] = temp;
    }    
    return _array;
}
var wrong_list = shuffle(cards)
// console.log("wrong_list",wrong_list)

/**
 * 扑克牌排序
 * 只知道前两张牌
 * 允许调换顺序或者把最前面一张牌放到牌堆最下面
 * @param {*} array 
 */
function sortX(array) {
    var _array = array.concat();
    var length = _array.length
    var keepIndex = 1
    while (true) {
        for (let index = 0; index < length - keepIndex; index++) {
            var first = _array[0], second = _array[1]
            if (first > second) {
                _array.push(second)
                _array.shift()            
                _array.shift()     
                _array.unshift(first)
            }
            else {
                _array.push(first)
                _array.shift()                
            }
        }
        // console.log(_array)

        for (let index = 0; index < keepIndex; index++) {
            _array.push(_array[0])
            _array.shift()
        }
        keepIndex ++
        // console.log(_array)
        //check
        var check = false
        for (let index = 0; index < length-1; index++) {
            // console.log(index +"====")
            if (_array[index] <_array[index+1]) {
                // console.log('OK')
                check = true
            }
            else {
                // console.log("NO")
                check = false
                break
            }
        }
        if (check) {
            return _array
        }
    }
}

console.log(wrong_list,sortX(wrong_list))
