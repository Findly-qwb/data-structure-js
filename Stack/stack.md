<!--
 * @Author:  Findly <weninqiu42@gmail.com>
 * @Date: 2021-11-04 16:13:01
 * @LastEditors: Findly
 * @LastEditTime: 2021-11-10 16:18:04
 * @Description: 
-->
### 栈(Stack)

>栈也是一种非常常见的数据结构，遵循`后进先出(LIFO)`的逻辑

##### 栈的概念

+ 一种首先的线性表，遵循`后进先出(LIFO)`规则。
+ 只能在表的一端进行插入和删除操作，这一端被称为`栈顶`，对应的把另一端称为`栈底`
+ 插入元素一般也叫`入栈`
+ 删除元素一般也叫`出栈`

##### 栈结构示意图：

![image-20211104161739156](https://i.loli.net/2021/11/04/QqhuJvSODY2gbMP.png)

##### 栈结构的实现

+ [基于数组进行实现]()



##### 栈的应用

+ 十进制转二进制

  ```js
  function dec2bin(decNumber) {
    	// 利用栈将余数压紧栈，再拼接弹出的栈元素，就是转换结果
      const stack = new Stack();
      while (decNumber > 0) {
        stack.push(decNumber % 2);
        decNumber = ~~(decNumber / 2);
      }
      let bin = '';
      while (!stack.isEmpty()) {
        bin += stack.pop();
      }
  
      return bin;
    }
  ```

  