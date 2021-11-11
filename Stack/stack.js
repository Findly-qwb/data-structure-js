/*
 * @Author:  Findly <weninqiu42@gmail.com>
 * @Date: 2021-11-04 16:06:15
 * @LastEditors: Findly
 * @LastEditTime: 2021-11-04 16:59:34
 * @Description:  栈:基于数组实现
 */
class Stack {
	constructor() {
		this.items = []; // 栈
	}
	// 栈的方法实现
	// 出栈,同时返回出栈的元素
	pop() {
		// 判断栈是否为空
		if (this.isEmpty()) throw new Error('栈空了');
		return this.items.pop();
	}
	// 入栈
	push(item) {
		this.items.push(item);
	}
	// 查看栈顶元素
	peek() {
		return this.items[this.items.length - 1];
	}
	// 检查栈是否为空
	isEmpty() {
		return this.items.length === 0;
	}
	// 栈大小
	size() {
		return this.items.length;
	}
  // 返回以字符串形式的栈内元素数据
	toString() {
		let result = '栈底:';
		for (let i of this.items) {
			result += '' + i + '<----';
		}
		return result;
	}
}

const stack = new Stack();
[1, 2, 3, 4, 5, 6].forEach((i) => {
	console.log(i);
	stack.push(i);
});
console.log(stack.toString());
console.log(stack.pop());
console.log(stack.toString());



