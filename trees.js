class Node {
	constructor (val, children = []) {
		this.val = val;
		this.children = children;
	}
	// depth first search
	find (val) {
		const toVisitStack = [ this ]; // this is htmlEl
		while (toVisitStack.length) {
			// while there is anything that's greater than 0
			const current = toVisitStack.pop(); // we will pop from the stack
			console.log("VISITING: ", current.val);
			if (current.val === val) {
				return current; // found value
			}
			for (let child of current.children) {
				toVisitStack.push(child); // search children push to stack
			}
		}
	}
	// stack: ['html'] -> current: [], length: yes, push children
	// stack: ['head', 'body'] -> current: ['html'], length: yes, push children
	// stack: ['head'] -> current: ['body'], length: yes, push children
	// stack: ['head', 'ul'] -> current: ['body'], length: yes, push children
	// stack: ['head'] -> current: ['ul'], length: yes, push children
	// stack: ['head', 'li', 'li2'] -> current: ['ul'], length: yes, push children
	// stack: ['head', 'li'] -> current: ['li2'], length: yes, push children
	// stack: ['head'] -> current: ['li'], FOUND IT

	//breadth first search
	find2 (val) {
		const toVisitQueue = [ this ]; // this is htmlEl
		while (toVisitQueue.length) {
			const current = toVisitQueue.shift(); // remove from beginning
			console.log("VISITING: ", current.val);
			if (current.val === val) {
				return current;
			}
			for (let child of current.children) {
				toVisitQueue.push(child);
			}
		}
	}
}
// queue: ['html'] -> current: [], length: yes, push children
// queue: ['head', 'body'] -> current: ['html'], length: yes, push children
// queue: ['body'] -> current: ['head'], length: yes, push children
// queue: ['body', 'title'] -> current: ['head'], length: yes, push children
// queue: ['title', 'ul'] -> current: ['body'], length: yes, push children
// queue: ['ul', 'li', 'li2'] -> current: ['title'], length: yes, push children
// queue: ['li', 'li2'] -> current: ['ul'], length: yes, push children
// queue: ['li2'] -> current: ['li'], FOUND IT

let htmlEl = new Node("html", [
	new Node("head", [ new Node("title") ]),
	new Node("body", [ new Node("ul", [ new Node("li"), new Node("li2") ]) ])
]);

console.log(htmlEl.find("li")); // Node { val: 'li', children: [] }
// VISITING: html -> body -> ul -> li2 -> li
//        html
//    head    body
// title    li   li2

console.log(htmlEl.find2("li")); // Node { val: 'li', children: [] }
// VISITING: html -> head -> body -> title -> li
//        html
//    head    body
// title    li   li2

class Tree {
	constructor (root) {
		this.root = root;
	}
	findInTreeDFS (val) {
		return this.root.find(val);
	}
	findInTreeBFS (val) {
		return this.root.find2(val);
	}
}

// let tree = new Tree(htmlEl);
// console.log(tree.root); // Node {val: html, children: head body}
// console.log(tree.findInTreeBFS("ul"));
