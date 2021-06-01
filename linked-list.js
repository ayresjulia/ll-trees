//direct array - all array items are of the same size

// linked list 0 - 0 - 0 - 0 - null
class Node {
	// class for the single Node
	constructor (val, next = null) {
		this.val = val;
		this.next = next;
	}
}

class LinkedList {
	constructor () {
		this.head = null;
		this.tail = null;
		this.length = 0;
	}
	traverse () {
		let currentNode = this.head;
		while (currentNode) {
			console.log(currentNode.val);
			currentNode = currentNode.next;
		}
	}
	find (val) {
		let currentNode = this.head;
		while (currentNode) {
			if (currentNode.val === val) return true;
			currentNode = currentNode.next;
		}
		return false;
	}
	push (val) {
		const newNode = new Node(val);
		if (!this.head) {
			this.head = newNode;
			this.tail = newNode;
		}
		this.tail.next = newNode;
		this.tail = newNode;
		this.length++;
	}
	unshift (val) {
		const newNode = new Node(val);
		if (!this.head) {
			this.head = newNode;
			this.tail = newNode;
		}
		newNode.next = this.head;
		this.head = newNode;
		this.length++;
	}
	getAt (idx) {
		if (!this.head) return undefined;
		let currentNode = this.head;
		let count = 0;
		while (currentNode) {
			currentNode = currentNode.next;
			count++;
			if (count === idx) {
				return currentNode;
			}
		}
	}
	setAt (idx, val) {
		if (!this.head) return undefined;
		let currentNode = this.head;
		let count = 0;
		while (currentNode) {
			currentNode = currentNode.next;
			count++;
			if (count === idx) {
				currentNode.val = val;
				return currentNode;
			}
		}
	}
	insertAt (idx, val) {
		let newNode = new Node(val);

		if (!this.head) {
			this.head = newNode;
			this.tail = newNode;
		}
		let currentNode = this.head;
		let count = 0;
		while (currentNode) {
			currentNode = currentNode.next;
			count++;
			if (count === idx - 1) {
				let prev = currentNode;
				newNode.next = prev.next;
				prev.next = newNode;
				this.length++;
			}
		}
	}
	// removeAt (idx) {
	// 	if (!this.head) return undefined;
	// 	let currentNode = this.head;
	// 	let count = 0;
	// 	// shift()
	// 	if (idx === 0 && this.length === 1) {
	// 		this.length--;
	// 	} else if (idx === 0 && this.length === 2) {
	// 		this.head = this.head.next;
	// 		this.tail = this.head;
	// 		this.length--;
	// 	} else if (idx === 0) {
	// 		this.head = this.head.next;
	// 		this.length--;
	// 	}

	// 	// pop()
	// 	if (idx === this.length - 1) {
	// 		while (currentNode.next !== null) {
	// 			currentNode = currentNode.next;
	// 			count++;
	// 			currentNode.next = null;
	// 			this.tail = currentNode;
	// 			this.length--;
	// 		}
	// 	}

	// 	// middle remove()
	// 	if (idx !== 0 && idx !== this.length - 1) {
	// 		while (currentNode) {
	// 			currentNode = currentNode.next;
	// 			count++;
	// 			if (count === idx - 1) {
	// 				let rmvNode = currentNode.next;
	// 				currentNode.next = rmvNode.next;
	// 				this.length--;
	// 			}
	// 		}
	// 	}
	// }
}

const train = new LinkedList();
train.push("engine");
train.push("freight car 1");
train.push("freight car 2");
train.unshift("start");
// console.log(train.insertAt(2, "cherry"));
console.log(train.traverse());
