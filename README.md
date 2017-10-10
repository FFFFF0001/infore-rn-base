# react-native-template-infore 框架介绍

> 1. 代码组织说明
> 2. 组织思路
> 3. 依赖包
> 4. 开发流程

## 代码组织说明
![image](./image/r1.png)
## 组织思路
![image](https://github.com/MIFind/rn-template-infore/blob/master/image/r2.png)
## 依赖包
![image](https://github.com/MIFind/rn-template-infore/blob/master/image/r3.png)
* 在link之后还需要额外配置的包有：
![image](https://github.com/MIFind/rn-template-infore/blob/master/image/r4.png)
* 大家参考github进行配置就好。

## 开发流程
> 1. 使用infore-init脚本新建项目
![image](https://github.com/MIFind/rn-template-infore/blob/master/image/r5.png)
> 2. node运行项目目录下的脚本文件：node script/dev.js
> 3. 在脚本文件中已经进行了react-native link 的操作，但是可能会出现一个警告：
![image](https://github.com/MIFind/rn-template-infore/blob/master/image/r6.png)
此时需要执行图中的命令。
> 然后需要手动将这几个包进行配置（Android和IOS都需要配置）
![image](https://github.com/MIFind/rn-template-infore/blob/master/image/r7.png)

## 最后
项目已经移交npm<link>https://www.npmjs.com/react-native-template-infore</link>
大家也可以通过<br>
<strong>react-native install --template infore </strong><br>
来使用该项目。

<a href="https://nodei.co/npm/react-native-template-infore/"><img src="https://nodei.co/npm/react-native-template-infore.png?downloads=true&downloadRank=true&stars=true"></a>

### 祝大家大吉大利，今晚吃鸡~
