class Node {
	constructor(value) {
		this.value = value;
		this.nextNode = null;
	}
}
class LinkedList {
	constructor() {
		this.head = new Node();
	}

	append = (value) => {
		let node = this.head;
		if (this.head.nextNode == null) {
			this.head = new Node(value);
			return;
		}
		do {
			let currentnode = node.nextNode;
			if (currentnode.nextNode == null) {
				let lastNode = new Node(value);
				currentnode.nextNode = lastNode;
				return;
			}
		} while (node);
	};

	prepend = (value) => {
		let newHead = new Node(value);
		newHead.nextNode = this.head;
		this.head = newHead;
		return;
	};

	size = () => {
		let count = 0;
		let node = this.head;
		while (node) {
			count += 1;
			node = node.nextNode;
		}
		return count;
	};
}
const linkedList = new LinkedList();
linkedList.append(1);
console.log(linkedList.head.value);
linkedList.append(2);
// console.log(linkedList.head.nextNode.value);

console.log(linkedList.size());
// console.log(linkedList.size(), linkedList.head.value);

let linknode = linkedList.head;
for (let i = 0; i < linkedList.size(); i++) {
	console.log(linknode.value);
	linknode = linknode.nextNode;
}
