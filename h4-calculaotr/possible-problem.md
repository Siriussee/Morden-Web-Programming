# possible problem

> seleted from dalaos' chatting log

- eval函数导致计算器强制支持次方运算 
    - 2**3 == 2^3 == 8
- 输入2//3这种东西后好像//3会被当成注释。。。然后直接输出2
    - 2//3 == 2
- 想问一下考不考0.1+0.2啊
    - 0.1+0.2 == [0.3000000004](http://0.30000000000000004.com/) (due to float in JS)
    - solution `toFixed`
- 可以写成后缀表达式
    - not `eval()` but `NPL(string expression)`
-  `eval()`不会出现[js注入](http://www.cnblogs.com/rentj1/archive/2010/08/15/1800213.html)的情况就可以
- 需要支持.28这种写法吗 A:想实现就实现 不做强制要求
- 为什么把js文件放在head里面就用不了了，必须要放在body里才行
- 打开html之后onclick自动执行然后失效是为什么？
    - 我之前遇到这个问题是改成onclick=fun；
- getElementsByClassName(correct) getElementByClassName(false)
