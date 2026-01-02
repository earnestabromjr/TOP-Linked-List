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

	append(value) {
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

	prepend(value) {
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
		if (index > this.size()) return undefined;
		let current = this.head;
		for (let i = 0; i < index; i++) {
			if (current === null) return undefined;
			current = current.next;
		}
		return current ? current.value : null;
	}

	pop() {
		const newHead = this.head.next;
		const returnValue = this.head.value;
		this.head = newHead;
		return returnValue;
	}

	toString() {
		let linknode = this.head;
		while (linknode != null) {
			console.log(`( ${linknode.value} ) ->\t`);
			linknode = linknode.next;
			if (linknode == null) {
				console.log("null");
				break;
			}
		}
	}

	contains(value) {
		if (this.head.value === value) return true;
		let node = this.head;
		while (node !== null) {
			if (node.value === value) return true;
			node = node.next;
		}
		return false;
	}

	findIndex(value) {
		let node = this.head;
		for (let i = 0; i < this.size(); i++) {
			if (value === node.value) return i;
			if (node.next === null && node.value !== value) return -1;
			node = node.next;
		}
	}
}
const linkedList = new LinkedList();
linkedList.append(1);
linkedList.append(2);
linkedList.prepend(0);

// console.log(linkedList.pop());
// console.log(linkedList.pop());

console.log(linkedList.toString());

// console.log(linkedList.contains(1));
