/**
 * Jarray - useful vanilla js library for working with array
 * Author: Ruslan Timurziyev (sawuer)
 * Version: 1.0
 */

window.jarray = (function() {
	
	return {

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
			var newArr = [];
	    for (var i = 0; i < arr.length; i++) {
        if (arr[i] != newArr[newArr.indexOf(arr[i])]) {
          newArr.push(arr[i]);
        }
	    }
  		return newArr;
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

		sort(arr) {
			return arr.sort((a, b) => a > b);
		},

		sortRange(arr, a, b) {
			var newArr = [];
	    arr.forEach(i => {
        if (i >= a && i <= b) {
          newArr.push(i);
        }
      });
  		return newArr;
		},

		even(arr) {
			var newArr = [];
			arr.forEach(i => {
				if ((typeof i === 'number') && (i % 2 == 0)) {
					newArr.push(i);
				}
			});
  		return newArr;
		},

		/**
		 * Find missing num from 1 to arr.length
		 */
		missing(arr) {
			var arrOfNums = [];
			for (var i = 1; i <= Math.max(...arr); i++) {
				arrOfNums.push(i);
			}
			var missing = [];
			arr.sort((a, b) => a > b);
			for (var i = 0; i < Math.max(...arr); i++) {
				if (!arr.includes(arrOfNums[i])) {
					missing.push(arrOfNums[i]);
				}
			}
			if (missing.length === 0) {
				return false;
			}
			return missing;
		}
		/**
		 * End of Array methods
		 */

	}

}());
