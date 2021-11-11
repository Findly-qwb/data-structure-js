### 队列(Queue)

>队列是一种受限的线性表，遵循`先进先出(FIFO)`逻辑

##### 队列的概念

+ 一种受限的线性表，遵循`先进先出`
+ 只能在表的前端进行删除操作
+ 只能在表的后端进行插入操作

##### 生活中类似的队列结构

+ 排队
+ 登机，vip优先登机（优先队列）

##### 队列的实现

+ 基于数组实现

  ```js
  class Queue {
  	constructor() {
  		this.items = []; // 队列
  	}
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
  ```

  

+ 基于链表实现

##### 击鼓传花

```js
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
console.log(passGame(['lili', 'lucy', 'tom', 'lilei', 'findly'], 3));  // lilei
```



##### 优先队列

```js
// 优先级队列
// 封装实体类
class QueueElement {
	constructor(element, priority) {
		this.element = element;
		this.priority = priority; // 优先级
	}
}
// 继承队列
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
					break; // 一旦插入不做后续比较节省性能
				}
			}
			// 如果比较完还没找到位置则说明是最小的 直接插入到末尾
			if (!pushed) {
				this.items.push(queElement);
			}
		}
	}
}
let pq = new PriorityQueue();
pq.enqueue('赵钱', 10);
pq.enqueue('孙李', 9);
pq.enqueue('张三', 11);
pq.enqueue('李四', 30);
pq.enqueue('王五', 6);
console.log(pq);
```

