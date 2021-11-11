/*
 * @Author:  Findly <weninqiu42@gmail.com>
 * @Date: 2021-11-04 17:26:20
 * @LastEditors: Findly
 * @LastEditTime: 2021-11-10 16:37:38
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
function passGame(nameList, num) {
	let queue = new Queue();
	// 将所有人入列
	for (let i = 0; i < nameList.length; i++) {
		queue.enqueue(nameList[i]);
	}
	// 开始数数，不是num的时候重新入列，是则删除,给定num，则num之前的人都不用被删除;
	//只要剩>1个人就继续
	while (queue.size() > 1) {
		for (let i = 0; i < num - 1; i++) {
			queue.enqueue(queue.dequeue());
		}
		queue.dequeue();
	}
	// 获取剩下的那个人
	return queue.front();
}
console.log(passGame(['lili', 'lucy', 'tom', 'lilei', 'findly'], 3));
