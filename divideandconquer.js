// linear search - for loop search one by one
// binary search - O(log n)
function binarysearch (arr, val, left = 0, right = arr.length - 1) {
	while (left <= right) {
		let mid = Math.floor((left + right) / 2);
		let midVal = arr[mid];
		if (midVal < val) {
			left = mid + 1;
		} else if (midVal > val) {
			right = mid - 1;
		} else {
			return mid;
		}
	}
	return -1;
}

console.log(binarysearch([ 3, 4, 5, 6, 7, 8, 9, 10 ], 4)); //1
