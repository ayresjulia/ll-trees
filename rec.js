// function sumRange (num) {
// 	if (num === 0) return 0;
// 	return num + sumRange(num - 1);
// }

// console.log("SUMRANGE", sumRange(4));

// function power (base, exp) {
// 	if (exp === 0) return 1;
// 	return base * power(base, exp - 1);
// }

// console.log("POWER", power(4, 2)); // 16

// function factorial (num) {
// 	if (num < 2) return num;
// 	return num * factorial(num - 1);
// }
// console.log("FACTORIAL", factorial(3)); // 6

// function longestWord (arr, i = 0, longest = 0) {
// 	if (i === arr.length) return longest;
// 	longest = Math.max(longest, arr[i].length);
// 	return longestWord(arr, i + 1, longest);
// }

// console.log("LONGESTWORD", longestWord([ "banana", "mum", "dog", "lolly" ])); // 6

// rithm school

function productOfArray (arr, i = 0) {
	if (i === arr.length) return 0;

	return arr[i] + productOfArray(arr, i + 1);
}
console.log(productOfArray([ 1, 2, 3 ])); // 6
console.log(productOfArray([ 1, 2, 3, 10 ])); // 60

let nestedObject = {
	data: {
		info: {
			stuff: {
				thing: {
					moreStuff: {
						magicNumber: 44
					}
				}
			}
		}
	}
};
function contains (obj, target, i = 0) {
	if (i === obj.length) return;
	while (obj.length) {
		if (obj.contains(target)) {
			return true;
		}
		return false;
	}
}

console.log(nestedObject, 44); // true
console.log(nestedObject, "foo"); // false

let node6 = new BinaryTreeNode(1);
let node5 = new BinaryTreeNode(1);
let node4 = new BinaryTreeNode(2);
let node3 = new BinaryTreeNode(3, node4, node6);
let node2 = new BinaryTreeNode(5, node3, node5);
let node1 = new BinaryTreeNode(5);
let root = new BinaryTreeNode(6, node1, node2);
largeTree = new BinaryTree(root);

//         root = 6
//        /         \
// node1 = 5       node2 = 5
//                  /       \
//             node3 = 3   node5 = 1
//          /       \
//  node4 = 2   node6 = 1
