### 集合

>集合通常是一组无须的，不能重复的元素构成

##### 集合的实现

+ Object实现

  ```js
  class Set {
  	constructor() {
  		this.items = {}; //集合
  	}
  	// 增加一个项
  	add(value) {
  		// 判断集合是否已经有了该元素,如果已经有了return
  		if (this.has(value)) return;
  		this.items[value] = value; // key=value
  	}
  	// 移除一个项
  	remove(value) {
  		// 判断是否存在需要移除的项
  		if (!this.has(value)) {
  			throw new Error('未找到该元素');
  		} else {
  			delete this.items[value];
  		}
  	}
  	// 判断值是否在集合中
  	has(value) {
  		return this.items.hasOwnProperty(value);
  	}
  	clear() {
  		this.items = {};
  	}
  	size() {
  		return Object.keys(this.items).length;
  	}
  	// 获取集合所有值
  	values() {
  		return Object.keys(this.items);
  	}
  }
  ```

  

+ 哈希表实现

##### 集合间的操作

+ 并集

  >对于给定的两个集合，返回一个包含两个集合中的所有元素的新集合

  ```js
  // 并集	
  unionSet(otherSet) {
  		// this =当前集合A，otherSet为另一个集合B
  		let resultSet = new Set();
  		let values = this.values();
  		for (let i = 0; i < values.length; i++) {
  			resultSet.add(values[i]);
  		}
  		values = otherSet.values();
  		for (let i = 0; i < values.length; i++) {
  			// add已经做了重复不添加处理了
  			resultSet.add(values[i]);
  		}
  
  		return resultSet;
  	}
  ```
  
+ 交集

  >对于给定的两个集合，返回一个包含两个集合中共有元素的新集合

  ```js
  // 交集
  interSection(otherSet) {
  		let resultSet = new Set();
  		let values = this.values();
  		for (let i = 0; i < values.length; i++) {
  			if (otherSet.has(values[i])) {
  				resultSet.add(values[i]);
  			}
  		}
  		return resultSet;
  	}
  ```

  

+ 差集

  >对于给定的两个集合，返回一个包含所有存在第一个集合并且不存在第二个集合中元素的新集合

  ```js
  // 差集
  diff(otherSet) {
  		let resultSet = new Set();
  		let values = this.values();
  		for (let i = 0; i < values.length; i++) {
  			if (!otherSet.has(values[i])) {
  				resultSet.add(values[i]);
  			}
  		}
  		return resultSet;
  	}
  ```

  

+ 子集

  >验证一个给定集合是否是另一个集合的子集
  
  ```js
  	// 子集
  subSet(otherSet) {
    let values = this.values();
    for (let i = 0; i < values.length; i++) {
      if (!otherSet.has(values[i])) {
        return false;
      }
    }
    return true;
  }
  ```



##### 完整代码

```js
/*
 * @Author:  Findly <wenbinqiu42@gmail.com>
 * @Date: 2021-11-18 20:16:07
 * @LastEditors: Findly
 * @LastEditTime: 2021-11-18 21:09:19
 * @Description: 集合
 */

class Set {
	constructor() {
		this.items = {}; //集合
	}
	// 增加一个项
	add(value) {
		// 判断集合是否已经有了该元素,如果已经有了return
		if (this.has(value)) return;
		this.items[value] = value; // key=value
	}
	// 移除一个项
	remove(value) {
		// 判断是否存在需要移除的项
		if (!this.has(value)) {
			throw new Error('未找到该元素');
		} else {
			delete this.items[value];
		}
	}
	// 判断值是否在集合中
	has(value) {
		return this.items.hasOwnProperty(value);
	}
	clear() {
		this.items = {};
	}
	size() {
		return Object.keys(this.items).length;
	}
	// 获取集合所有值
	values() {
		return Object.keys(this.items);
	}

	/* 集合间的操作 */
	//并集
	unionSet(otherSet) {
		// this =当前集合A，otherSet为另一个集合B
		let resultSet = new Set();
		let values = this.values();
		for (let i = 0; i < values.length; i++) {
			resultSet.add(values[i]);
		}
		values = otherSet.values();
		for (let i = 0; i < values.length; i++) {
			// add已经做了重复不添加处理了
			resultSet.add(values[i]);
		}

		return resultSet;
	}

	// 交集
	interSection(otherSet) {
		let resultSet = new Set();
		let values = this.values();
		for (let i = 0; i < values.length; i++) {
			if (otherSet.has(values[i])) {
				resultSet.add(values[i]);
			}
		}
		return resultSet;
	}

	// 差集
	diff(otherSet) {
		let resultSet = new Set();
		let values = this.values();
		for (let i = 0; i < values.length; i++) {
			if (otherSet.has(values[i])) {
				resultSet.add(values[i]);
			}
		}
		return resultSet;
	}

	// 子集
	subSet(otherSet) {
		let values = this.values();
		for (let i = 0; i < values.length; i++) {
			if (!otherSet.has(values[i])) {
				return false;
			}
		}
		return true;
	}
}

let set = new Set();
set.add('a');
set.add('b');
set.add('c');
set.add('d');
let set1 = new Set();
set1.add('a');
set1.add('d');
set1.add('e');
set1.add('f');
// set.remove('a');
// // set.remove('a');
// set.has('abc');
// set.has('a');
console.log(set.interSection(set1));

```

