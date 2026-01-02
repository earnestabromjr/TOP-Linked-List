class Node {
	constructor(value = 0, next = null) {
		this.value = value;
		this.next = next;
	}
}
class LinkedList {
	constructor() {
		this.head = null;
	}

	append() {
		const newNode = new Node(value);
		if (!this.head) {
			this.head = newNode;
			return;
		}
		let current = this.head;
		while (current.next) {
			current = current.next;
		}
		current.next = newNode;
	}

	prepend() {
		let newHead = new Node(value);
		newHead.next = this.head;
		this.head = newHead;
		return;
	}

	size() {
		let count = 0;
		let node = this.head;
		while (node !== null) {
			count++;
			node = node.next;
		}
		return count;
	}
	printHead() {
		if (this.head.value == null) return undefined;
		return this.head.value;
	}

	printTail() {
		if (this.head.value == null) return undefined;
		let node = this.head;
		while (node !== null) {
			if (node.next === null) return node.value;
			node = node.next;
		}
	}

	at(index) {
		if (index === 0) return this.head.value;
		current = this.head;
		let count = 1;
		while (current !== null) {
			if (index === count) return current.value;
			current = current.next;
			count++;
		}
		return;
	}

	printList = (linkedList) => {
		let linknode = linkedList.head;
		for (let i = 0; i < linkedList.size(); i++) {
			console.log(linknode.value);
			linknode = linknode.next;
		}
	};
}
const linkedList = new LinkedList();
linkedList.append(1);
linkedList.append(2);
linkedList.prepend(0);
console.log(linkedList.size());
// console.log(linkedList.size(), linkedList.head.value);

console.log(linkedList.printTail());
