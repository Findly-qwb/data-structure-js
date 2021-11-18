/*
 * @Author:  Findly <wenbinqiu42@gmail.com>
 * @Date: 2021-11-16 19:43:52
 * @LastEditors: Findly
 * @LastEditTime: 2021-11-16 21:01:29
 * @Description: 双向链表
 */

// 节点类
class Node {
	constructor(data) {
		this.data = data; //数据
		this.next = null; // 指向下一个节点的指针
		this.prev = null; // 指向上一个节点的指针
	}
}

// 双向链表
class DoublyLinkedList {
	constructor() {
		this.head = null;
		this.length = 0; // 初始化链表长度
	}

	findLast() {
		let current = this.head;
		let count = 0;
		while (count++ < this.size) {
			current = current.next;
		}
		return current;
	}

	append(element) {
		let newNode = new Node(element);
		if (this.length === 0) {
			this.head = newNode;
		} else {
			let lastNode = this.findLast();
			lastNode.next = newNode;
			newNode.prev = lastNode;
		}

		this.length++;
	}
}

const list = new DoublyLinkedList();
let arr = [1, 2];
arr.forEach((i) => {
	list.append(i);
});
console.log(list);
