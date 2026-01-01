class Node {
	constructor(value = null) {
		this.value = value;
		this.nextNode = null;
	}
}
export class LinkedList {
	constructor(head = null) {
		this.head = head;
	}

	append = (value) => {
		let node = this.head;
		if (node.nextNode == null) {
			this.head = new Node(value);
			return;
		}
		while (node.nextNode) {
			if (node.nextNode == null) {
				let lastNode = new Node(value);
				node.nextNode = lastNode;
				return;
			}
		}
	};

	prepend = (value) => {
		let newHead = new Node(value);
		let oldHead = this.head;
		newHead.nextNode = oldHead;
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
