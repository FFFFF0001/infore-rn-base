# react-native-template-infore 框架介绍
> 1. 代码组织说明
> 2. 组织思路
> 3. 依赖包
> 4. 开发流程
> 5. 打包

## 代码组织说明
### app  
* core  
	* widget  
		* 封装好的公共组件  
	* api  
		* baseRequest.js  
	* base  
		* infore.js与init.js  
			* 初始化App与配置  
		* initGlobal.js  
	* utils  
		* StyleSheet的适配  
		* 各个工具类  
* config  
	* api  
		* 请求配置、公共code配置、commonFailHandler、token拦截器handler  
	* nav  
		* router与tab的配置  
	* entry.js  
		* 这里用于测试可将代码入口改成测试页面。  
	* setting.js  
		* 项目名，global，baseURL的动态配置  
* project  
	* images  
	* pages  
		* widget  
		* fragment  
	* redux  
	* 每个项目的差异量代码，页面，逻辑，组件  
  
### example  
  
* ui  
	* UI组件例子与说明  
* business  
	* 业务组件例子与说明  
  
### script  
  
* dev.js  
	* 自动配置项目名，项目新建之后执行link  
  
### 入口  
  
* index.android.js  
	* 安卓入口  
* index.ios.js  
	* ios入口  
  
### Infore-init  
  
* 自动生成项目配置  
  
## 组织思路  
  
### 基于配置  
  
* 地址  
* 项目名  
* 路由  
* 核心数据  
  
### 高内聚  
  
* 以功能内聚，即以一个功能代码为一个模块  
* 功能完善封装好并提供对外接口，尽量保证面向对象  
  
### 低耦合  
  
* config与core内代码尽量不耦合  
* 与project之间耦合度尽量小  
* 尽量保证不要有太多的核心模块通信  
* 尽量保证简单的数据耦合  

## 依赖包
  
