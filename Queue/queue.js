/*
 * @Author:  Findly <weninqiu42@gmail.com>
 * @Date: 2021-11-04 17:26:20
 * @LastEditors: Findly
 * @LastEditTime: 2021-11-11 21:45:02
 * @Description: 队列
 */
class Queue {
	constructor() {
		this.items = []; // 队列
	}

	// 方法

	// 入列
	enqueue(ele) {
		this.items.push(ele);
	}
	//出列,删除队列第一个元素，并返回被删除的元素
	dequeue() {
		return this.items.shift();
	}
	// 返回队列的第一个元素，不改变队列
	front() {
		return this.items[0];
	}
	// 是否为空
	isEmpty() {
		return this.items.length === 0;
	}
	// 返回队列长度
	size() {
		return this.items.length;
	}
	//将队列内容转换成字符串
	toString() {
		let result = '';
		for (let i in this.items) {
			result += this.items[i] + '<---';
		}
		return result;
	}
}

let queue = new Queue();
queue.enqueue('a');
queue.enqueue('b');
queue.enqueue('c');
queue.enqueue('d');
queue.enqueue('e');
queue.dequeue();
queue.dequeue();
console.log(queue.front());
console.log(queue.toString());

console.log('------------------------------');

// 优先级队列

class QueueElement {
	constructor(element, priority) {
		this.element = element;
		this.priority = priority; // 优先级
	}
}
class PriorityQueue extends Queue {
	constructor() {
		super();
	}
	// 插入方法
	enqueue(element, priority) {
		// 创建一个对象
		let queElement = new QueueElement(element, priority);
		// 判断队列是否为空, 为空直接插入;
		if (this.items.length === 0) {
			this.items.push(queElement);
		} else {
			var pushed = false;
			for (let i = 0; i < this.items.length; i++) {
				if (queElement.priority < this.items[i].priority) {
					// 插入
					this.items.splice(i, 0, queElement);
					pushed = true;
					break;
				}
			}
			// 如果比较完还没找到位置则说明是最小的 直接插入到末尾
			if (!pushed) {
				this.items.push(queElement);
			}
		}
	}
}
// console.log(new PriorityQueue());

// console.log(new QueueElement('findly', 100));
let pq = new PriorityQueue();
pq.enqueue('赵钱', 10);
pq.enqueue('孙李', 9);
pq.enqueue('张三', 11);
pq.enqueue('李四', 30);
pq.enqueue('王五', 6);
console.log(pq);
