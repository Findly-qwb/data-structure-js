/*
 * @Author:  Findly <weninqiu42@gmail.com>
 * @Date: 2021-11-15 20:19:45
 * @LastEditors: Findly
 * @LastEditTime: 2021-11-16 19:28:35
 * @Description: 链表
 */

// 节点类
class Node {
	constructor(data) {
		this.data = data; //数据
		this.next = null; // 指向下一个节点的指针
		this.prev = null; // 指向上一个节点的指针
	}
}
// 链表类
class LinkedList {
	constructor() {
		// this.head = new Node('head'); // 链表头
		this.head = null; // 初始化表头为空
		this.length = 0; // 初始化链表长度
	}

	/**
	 * @description:  在末尾插入元素
	 * @param {Node} element 元素
	 * @return {*} 无返回值
	 */
	append(element) {
		let newNode = new Node(element);
		//判断链表是否为空
		if (this.head === null) {
			this.head = newNode;
		} else {
			// 定义临时变量保持当前指针
			let current = this.head;
			while (current.next) {
				current = current.next; // 移动current
			}
			// 跳出while循环表示走到底了
			current.next = newNode;
		}
		// 链表长度+1
		this.length++;
	}

	/**
	 * @description: 在特定下标插入元素
	 * @param {indx} position 下标
	 * @param {Node} element 元素
	 * @return {*} 无返回值
	 */
	insert(position, element) {
		// 对position进行越界判断
		if (position < 0 || position > this.length) throw new Error('越界了');
		let newNode = new Node(element);
		if (position === 0) {
			newNode.next = this.head;
			this.head = newNode;
		} else {
			let index = 0; // 定义下标初始值
			let current = this.head;
			let prev = null; // 初始化上一节点为null
			while (index++ < position) {
				prev = current; // 上一节点为当前节点
				current = current.next; // 当前节点为下一节点
			}
			// 跳出循环则找到了position位置的节点
			newNode.next = current;
			prev.next = newNode;
		}
		this.length++;
	}

	/**
	 * @description: 根据下标寻找节点
	 * @param {index} position 下标
	 * @return {Node} 返回下标元素
	 */
	get(position) {
		if (position < 0 || position > this.length) throw new Error('未找到该元素');
		let index = 0;
		let current = this.head;
		while (index++ < position) {
			current = current.next;
		}
		return current;
	}

	/**
	 * @description: 返回元素在链表中的索引，没找到则返回-1
	 * @param {Node} element 元素
	 * @return {index||-1} 返回index||-1
	 */
	indexOf(element) {
		let current = this.head;
		let index = 0; // 初始化位置为0
		while (current) {
			if (current.data == element) {
				return index;
			}
			current = current.next;
			index += 1;
		}
		// 跳出循环则未找到
		return -1;
	}

	/**
	 * @description:
	 * @param {index} position 下标
	 * @param {Node} element 元素
	 * @return {*}
	 */
	update(position, element) {
		if (position < 0 || position > this.length) throw new Error('未找到该元素');
		let index = 0;
		let current = this.head;
		while (index++ < position) {
			current = current.next;
		}
		current.data = element;
	}
	// 移除特定位置元素
	removeAt(position) {
		// 注意此处position要>=this.length
		if (position < 0 || position >= this.length) throw new Error('越界了');
		let index = 0;
		let current = this.head;
		let prev = null;
		if (position === 0) {
			// throw new Error('你把头删了干嘛')
			this.head = this.head.next;
		} else {
			while (index++ < position) {
				prev = current;
				current = current.next;
			}
			prev.next = current.next;
		}
		this.length--;
	}
	// 移除特定元素
	// TODO: 有点问题 要看看
	remove(element) {
		let current = this.head;
		let prev = null;
		if (element == current.data) {
			this.head = current.next;
			this.length--;
		} else {
			while (current) {
				if (current.data == element) {
					prev.next = current.next; // 删除完找到的元素之后 return掉，避免进入throw new Error内
					this.length--;
					return;
				}
				prev = current;
				current = current.next;
			}
			throw new Error('未找到指定元素');
		}
	}
	// 判断链表是否为空
	isEmpty() {
		return this.length === 0;
	}
	//获取链表长度
	size() {
		return this.length;
	}
	// 展示链表
	toString() {
		let current = this.head;
		let resultString = '';
		while (current) {
			resultString += current.data + '-->';
			current = current.next;
		}
		return resultString;
	}
}

let list = new LinkedList();
let arr = [1, 2, 3, 4, 5];
for (let i = 0; i < arr.length; i++) {
	list.append(arr[i]);
}
list.removeAt(0);
console.log(list, list.toString());
