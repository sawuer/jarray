/**
 * Jarray - useful vanilla js library for working with array
 * Author: Ruslan Timurziyev (sawuer)
 * Version: 1.0
 */

(function(global) {

  global.jar = (function() {

    return {

      contain(arr, element) {
        return arr.includes(element) ? true : false;
      },

      even(arr) {
        var newArr = [];
        arr.forEach(i => {
          if ((typeof i === 'number') && (i % 2 === 0)) {
            newArr.push(i);
          }
        });
        return newArr;
      },

      every(arr, index) {
        var newArr = []; 
        var indexUp = index;
        for (var i = 0; i < arr.length; i++) {
          if (i === indexUp) {
            newArr.push(arr[i]);
            indexUp += index;
          }
        }
        return newArr;
      },

      randomRange(arr, a, b) {
         var newArr = [];
        arr.forEach(i => {
          if (i >= a && i <= b) {
            newArr.push(i);
          }
        });
        return newArr[~~(Math.random() * newArr.length)];
      },

      odd(arr) {
        var newArr = [];
        arr.forEach(i => {
          if ((typeof i === 'number') && (i % 2 !== 0)) {
            newArr.push(i);
          }
        });
        return newArr;
      },

      max(arr) {
        return Math.max.apply(null, arr);
      },

      first(arr) {
        return arr[0];
      },

      last(arr) {
        return arr[arr.length - 1];
      },

      random(arr) {
        return arr[~~(Math.random() * arr.length)];
      },

      shuffle(arr) {
        return arr.sort(() => ~~(Math.random() * arr.length));
      },

      unique(arr) {
        return [...new Set(arr)];
      },

      reverse(arr) {
        return arr.sort((a, b) => b - a);
      },

      propsLength(arr) {
        return arr.map(i => i.length);
      },

      sum(arr) {
        return arr.reduce((a, b) => a + b);
      },

      sort(arr, sign) {
        if (sign === '>') {
          return arr.sort((a, b) => a > b);
        } else if (sign === '<') {
          return arr.sort((a, b) => a < b);
        }
      },

      sortRange(arr, a, b) {
        return arr.map(i => {
          if (i >= a && i <= b) i;
        });
      },

 

      missing(arr) {
        var arrOfNums = [];
        for (var i = 1; i <= Math.max.apply(null, arr); i++) {
          arrOfNums.push(i);
        }
        var missing = [];
        arr.sort((a, b) => a > b);
        for (var i = 0; i < Math.max.apply(null, arr); i++) {
          if (!arr.includes(arrOfNums[i])) {
            missing.push(arrOfNums[i]);
          }
        }
        if (missing.length === 0) {
          return false;
        }
        return missing;
      },

      without(arr, withoutArr) {
        return arr.map(i => !withoutArr.includes(i) ? i : '')
      },
    
    }

  })();

})(this);
